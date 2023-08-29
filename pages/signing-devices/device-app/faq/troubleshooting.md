---
title: Pitfalls & Troubleshooting
subtitle:
tags: [not enough ram, ram, stack overflow, exception, try catch finally, application crashing, app crashing, unaligned ram]
category: Embedded Application
toc: true
redirect_from: 
  - docs/nano-app/troubleshooting
  - docs/nano-app/troubleshooting/
author:
layout: doc
---

## Introduction

In this article, we will walk you through the important concepts when developing on the BOLOS platform and provide some analysis of common failure scenarios you might experience while developing applications. This article can help you if you are developing your application from scratch or if you are going through important customization of a forked application.

## Not Enough RAM

At the time of this writing, the default link script provided by the SDK for the Ledger Nano S allocates 4 KiB of RAM for applications to use. This 4 KiB has to be enough to store all global non-const and [non-NVRAM](../persistent-storage/) variables as well as the call stack (which is currently set to 768 bytes by default, also defined in the link script).

This is the linker error you will get if you declare too many global non-const and non-NVRAM variables to fit in RAM:

```
bin/app.elf section `.bss' will not fit in region `SRAM'
```

The only solution to this problem is using less RAM. To do so, make your application's memory layout more efficient. Alternatively, if you're feeling adventurous, you can attempt to modify the link script (`script.ld` at the root of the SDK folder) to optimize the space allocated for the call stack. If you choose to pursue the latter option, we recommend you also read the next section.

## Stack Overflows

It is complicated to determine the exact amount of the call stack used by your application without running it. We recommend using a stack canary to avoid stack overflows.

To create a stack canary, you have to set a magic value at the start of the stack area. The stack grows towards lower addresses, so a canary at the start of this area will be located at the top of the stack.

The canary is then checked regularly. If the canary was modified, this means there was a stack overflow.

Here is the recommended way to implement a stack canary:

``` c
// This symbol is defined by the link script to be at the start of the stack
// area.
extern unsigned long _stack;

#define STACK_CANARY (*((volatile uint32_t*) &_stack))

void init_canary() {
    STACK_CANARY = 0xDEADBEEF;
}

void check_canary() {
    if (STACK_CANARY != 0xDEADBEEF)
        THROW(EXCEPTION_OVERFLOW);
}
```

The canary must be checked regularly. You can run the check every time `io_event(...)` is called.

## Exception Handling

With our error model, there are two common failure scenarios.

1. You must be careful always to close a `TRY` context when jumping out of it. For example, in the block of code below, the `CLOSE_TRY` macro must be used to close the `TRY` context before returning from the function in the case that `i > 0`. However, in the `CATCH` clause, the `TRY` has already been closed automatically, so `CLOSE_TRY` is unnecessary.

    ``` c
    bool is_positive(int8_t i) {
        BEGIN_TRY {
            TRY {
                if (i == 0)
                    THROW(EXCEPTION);
                if (i > 0) {
                    CLOSE_TRY;
                    return true;
                }
            } CATCH_OTHER(e) {
                return false;
            } FINALLY {}
        } END_TRY;
        return false;
    }
    ```

2. When modifying variables within a `try` / `catch` / `finally` context, always declare those variables `volatile`. This will prevent the compiler from making invalid assumptions when optimizing your code because it doesn't understand how our exception model works.

    ``` c
    uint16_t multiply(uint8_t a, uint8_t b) {
        volatile uint16_t product = 0;
        volatile uint8_t multiplier = b;
        while (true) {
            BEGIN_TRY {
                TRY {
                    if (multiplier == 0)
                        THROW(1);
                    multiplier--;
                    product += a;
                    THROW(2);
                } CATCH_OTHER(e) {
                    if (e == 1)
                        return product;
                } FINALLY {}
            } END_TRY;
        }
        // Suppress compiler warning
        return 0;
    }
    ```

    In the above example, `a` does not need to be declared `volatile` because it is never modified.

<!--  -->
{% include alert.html style="tip" text="For greater clarity and coherence, we recommend using the error codes defined in the SDKs wherever possible (see <code>EXCEPTION</code>, <code>INVALID_PARAMETER</code>, etc. in <code>os.h</code>). If you decide to use custom error codes, use custom error codes for each error case." %}
<!--  -->

## The Application crashed

An application crashing when running on the device (the device's screen freezes and stops responding to the APDU) can be caused by a number of issues. For example:
- The Secure Element is isolated due to invalid handling of [SEPROXYHAL](https://developers.ledger.com/docs/embedded-app/bolos-hardware-architecture/#seproxyhal) packets
- There's a core fault on the device (perhaps due to a [misaligned memory access](../memory-alignment/) or an attempt to access restricted memory)

If it occurs, simplify the app and strip away as much code as possible until the problem can be isolated.

<!--  -->
{% include alert.html style="tip" text="These errors happen rarely, and you should not encounter them if you're using the <a href='../app-builder-container/'>Ledger App Builder</a>." %}
<!--  -->


## Unaligned RAM access

``` c
uint16_t *ptr16 = &tmp_ctx.signing_context.buffer[processed];
PRINTF("uint16_t: %d", ptr16[0]);
```

`ptr16[0]` access can make the application crash, even though `tmp_ctx.signing_context.buffer[processed]` (`unsigned char*`) can be accessed. This happens when a pointer isn't word-aligned, but a word is accessed in RAM. As a workaround, copy the buffer into a properly aligned location (e.g. using `os_memmove`).

Please refer to the [alignment](../memory-alignment/) page for further information.

