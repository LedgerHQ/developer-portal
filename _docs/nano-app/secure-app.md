---
title: Developing Secure Ledger Apps
subtitle: Ensuring your app passes the security review
tags: []
toc: true
toc_sticky: true
author:
layout: doc_na
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Introduction

Developing applications for Ledger devices is an intricate process. The security of the user funds relies on the fact that the application works in a correct and secure manner and that potential attackers cannot misuse it to extract private data and/or sign requests which are not authorized by the user. The app should guard against such attacks because they have a very low entry point -- a Ledger device attached to a compromised host might be a victim of the attacker's program sending invalid/non-standard requests to the device.

<!--  -->
{% include alert.html style="warning" text="This guide is meant to be a summary of all important aspects of Ledger Apps security and it shall be read by developers before developing an app for Ledger." %}
<!--  -->



## Development practices

Whenever writing a secure Ledger app, the following advice should not be taken lightly.

### Code reviews

We encourage all written code to be peer-reviewed. Importantly, the review should have at least:

1.  One reviewer proficient in C and knowing C security weaknesses.
2.  One reviewer with a "hacker's mind" (looking at the code from the perspective of an attacker).

### Security audits

We encourage third-party security reviews. Note, however, that solid review takes time and a short review might yield a false sense of security (especially if the reviewing party does not have an extensive knowledge of Ledger code specifics).

### Best practices

In order to ease security reviews and maintenance, the Ledger Security Team requires these development best practices to be met:

- The app must build with no warnings using the container image intended for that purpose, [Ledger App Builder](https://github.com/LedgerHQ/ledger-app-builder).
- The scan-build utility from clang must be used to analyze the whole project and produce no errors.
- Units tests must be present, preferably in the `tests/` folder and relying on the [cmocka](https://cmocka.org/) unit testing framework.
- Functional tests must be present. They should allow APDU testing thanks to the speculos emulator (or a real device). We recommend using [pytest](https://pytest.org) as a testing framework if tests are written in Python.

These best practices must be automated using GitHub actions to achieve continuous integration. The [GitHub workflow](https://github.com/LedgerHQ/app-xrp/blob/master/.github/workflows/ci-workflow.yml) of the XRP app acts as a reference.

On top of that, we also encourage the following practices:

- Linting helps improving code quality and ensuring consistent coding style and resolving basic coding errors.
- Developing a fuzzer thanks to [libFuzzer](https://llvm.org/docs/LibFuzzer.html).
- Integration with the Coverity static code analysis tool helps finding security issues and software defects.

They should also be included in the GitHub workflow.


## Cryptography

This section presents general concepts about cryptography development, but also guidelines specific to the security model of the Ledger devices. It gives guidelines to:

-   Ensure a potential vulnerability in one application will not cause damages to other apps.
-   Make sure all the operations that manipulate secrets are approved by the user.
-   Restrict the use of these secrets by apps.

### Don't roll your own crypto primitives

**You should never roll your own crypto primitives** (including encryption/derivation schemes, hashing functions, HMAC, etc.)

Rationale: It is a purpose of BOLOS operating system to perform these in a secure manner. Importantly, writing your own crypto primitives is likely to open you to side-channel attacks or other problems. If your primitive is not supported by BOLOS (e.g., some very new cryptography), consult with Ledger developers the possibility of including it in the OS.

### Avoid blindly signing data

**You should never allow signing of any attacker-controlled message unless it has been verified for structural validity. Importantly, you should never sign a message that might be a hash of transaction.**

Rationale: If you allow an attacker to blindly sign a message, it can easily supply a hash of a valid transaction. Your signature could then be used to send an unauthorized transaction.

If you want to sign user-supplied "personal" messages, prefix them with a fixed string (which shouldn't be a valid transaction prefix). It is also a good practice to include message length in the text to be signed. Ledger-app-eth has a good example in function `handleSignPersonalMessage`. Note that sometimes cryptocurrencies have a standardized way of signing such personal messages and in that case you should use the approved scheme.

Warning: If you allow signing untrusted hashes (while displaying a prompt to the user), be aware that

1.  Some users are not familiar with security and could be easily tricked. They can click through your prompt without properly checking unless you give them explicit "Warning: this is a very unusual operation. Do not continue unless you know what you are doing" warning. They might not see the message even then.
1.  A compromised host might both change hash on the screen and also data sent to device. This opens the possibility of users signing something they didn't want to.

### Restrict Apps to Coin-Specific BIP32 Prefix

BIP32 paths on which the app can derive keys must be restricted in your application. The chosen derivation paths must not conflict with existing paths if the use case differs.

<!--  -->
{% include alert.html style="warning" text="Ledger will not sign apps whose BIP32 prefixes have not been properly set." %}
<!--  -->


Restricting the derivation path can be done by setting the `--path` property in the app Makefile.

For example, if your application derive keys on the hardened path 44'/60', specify in your Makefile:

``` makefile
APP_LOAD_PARAMS += --path "44'/60'"
```

Derivation can also be restricted to a specific curve using the `--curve` property. Supported curves are `secp256k1`, `prime256r1` and `ed25519`.

Several curves and paths can be configured at the same time. For example, if your app must derive keys on paths 44'/535348', 13' and 17', on curves Ed25519 and prime256r1, the Makefile should contain:

``` makefile
APP_LOAD_PARAMS=--curve ed25519 --curve prime256r1 --path "44'/535348'" --path "13'" --path "17'"
```

Rationale: Setting prefixes is crucial, as it limits the amount of damage an attacker can cause if they manage to compromise an application. If a vulnerability is exploited on a poorly written or backdoored application, an attacker should not be able to exploit it to extract private keys from other apps, such as Bitcoin or Ethereum keys.

<!--  -->
{% include alert.html style="warning" text="If your application derives keys on the hardened path 44'/60' then the chainID parameter must be different from 0 or 1. This is necessary to avoid replaying transactions broadcoast on Ethereum-like chains on Ethereum. As a general recommendation, and to ensure a good level of privacy for the end user, we recommend to always use the correct coin type in the derivation path as defined in <a href='https://github.com/satoshilabs/slips/blob/master/slip-0044.md' class='alert-link'> slip44 </a>" %}
<!--  -->

### Signing/disclosing keys without user approval

<!--  -->
{% include alert.html style="warning" text="You must always require user approval for signing transactions/messages." %}
<!--  -->

Rationale: If you do not require user consent for signing important data, an attacker can use your device as a signing black box and sign whatever they want.


<!--  -->
{% include alert.html style="primary" text="You might also consider approvals for extracting public keys, as some users might want extended privacy." %}
<!--  -->


1.  They might not want to reveal their *root/account* public key, only address keys
2.  They might not want to reveal address public key until it is required. (Some cryptocurrencies use addresses that are hash of public keys. It is therefore enough to send the address to the host).


<!--  -->
{% include alert.html style="primary" text="There is a trade-off between privacy and usability here. If you want privacy, it would require a user interaction every time they want to use Ledger device, as opposed to only interaction while signing transactions. The behaviour could also be manually set in the application options." %}
<!--  -->

### Private Key Management

**You should minimize the code that works with private (ECDSA, RSA, etc.) or secret (HMAC, AES, etc.) keys.** Importantly, you should always **clear the memory** after you use these keys. That includes key data and key objects.

Leaving parts of private or secret keys lying around in memory is not a security issue on its own because there is no easy way to extract the RAM content on the chip. If a key is left in RAM by an app, another app will not be able to access it.

However, if the key has not properly been erased, a security issue could lead to the leak of this key, even if it is not used anymore. An attacker able to read arbitrary memory from the app, or execute arbitrary code, will be able to read the content of the stack segment, hence the parts of the key which have not been erased.

Here is an exemple of a common and **wrong way** of doing this:

``` c
uint8_t privateKeyData[64];
cx_ecfp_private_key_t privateKey;

os_perso_derive_node_bip32(
    tmpCtx.transactionContext.curve, tmpCtx.transactionContext.bip32Path,
    tmpCtx.transactionContext.pathLength, privateKeyData,
    NULL);
cx_ecfp_init_private_key(tmpCtx.transactionContext.curve, privateKeyData,
                         32, &privateKey);
explicit_bzero(privateKeyData, sizeof(privateKeyData));

// (later, after privateKey is not needed)
explicit_bzero(&privateKey, sizeof(privateKey));
```

In the happy path, the previous code will correctly clean the memory once the private key is initialized. Note, however, that this code **fails to protect private keys in case some system call throws (for example cx\_ecfp\_init\_private\_key)**. Correct code should wrap the clearing in `BEGIN_TRY { TRY { ... } FINALLY { explicit_bzero() } END_TRY;`.

Applications where such issues were fixed include [the ARK app](https://github.com/LedgerHQ/app-ark/commit/e84a4dc0c422f7ade586c831cbab56cb15c64df1) and [the Solana app](https://github.com/LedgerHQ/app-solana/pull/5/files).

### Be Wary of Untrusted Input

Some cryptocurrencies do not have *explicit* fee encoded in the transaction. In such cases, the app cannot rely on the fee value sent from the host. Instead, it should receive previous UTxOs and check their output amounts. Note that this usually needs to be done in a separate step due to memory constraints. Check with BTC/Cardano app design for this.

### Properly protect data you wish to cache on the host computer

Sometimes your app needs to compute over more data than it can fit inside memory. Taking an example from the previous section, it might not be easy to store all UTxOs in the device memory. As such, you might break computation into multiple steps and, for example, verify each UTxO separately and let the host computer cache a "certified summary". If you do this, be aware that

1. If the information you want the host to cache is public, you still need to attach a signature to it so that the host cannot send some other value later. This could be done with standard HMAC digest. We would recommend using a temporary (per session) key for this --having a per-session HMAC allows you to truncate the digest size (e.g., you don't need to have HMAC which withstands years of brute-force attack. Instead, you can balance the digest size against some reasonable upper bound on how long the session lives (e.g., one month should be enough)).

2. If the information is not public, you need to both encrypt and provide a signature. Notably, it is not enough to "scramble" the data by XORing with a random key as this would still allow the attacker to tamper with the values. (Or even break the scrambling if you re-use the same key).

    Instead:

    -   Encrypt the information with a sufficiently strong cypher
    -   Provide a digest to avoid tampering with the value

### Do not allow the host to freely manipulate key-pairs

Some cryptocurrencies (notably Monero) need to perform an extensive calculation with *(public, private)* key-pair spread over multiple APDU exchanges. If you need to do the same, **do not** allow the attacker to step out of the protocol. Notably, allowing the attacker to freely perform key manipulation (e.g., group multiplications, exponentiations, etc.) could undermine your app security **even if the private key never leaves the device**. In general, keep an explicit protocol state machine during the computation. Also, consult with cryptography experts to check for implications if you misstep from the protocol.

## C is your enemy

### Know your C compiler

Ledger apps are written in C. Unlike typical embedded project, the goal here is to write for a single platform with a single compiler.

The current supported compiler is clang, and it supports newest language features (up to C11). This is useful for both development and security. You should really learn about the new features and use them extensively as they might help you write more secure code.

A random collection of useful features: intermingled declarations and code, support of `_Generic`, `_Static_assert`, `__builtin_types_compatible_p`, `__typeof` (very useful for safer versions of macros), etc.

### Use safe macro constructs

C is a minefield of problems related to pointers. You can alleviate some of the problems with good macros. However, beware of when they can fail. For example, take the following code:

``` c
#define ARRAY_LEN(a) sizeof(a) / sizeof(a[0])
```

Apart from the "obvious" problem of ARRAY\_LEN macro being written without external parenthesis, making code such as

``` c
(uint8_t) ARRAY_LEN(x)
```

compile to what is understood by the compiler as

``` c
(uint8_t) sizeof(x) / sizeof(x[0])
```

there is an important problem with this macro. If used in the function like this

``` c
void fn(int x[10]) {
    int len = ARRAY_LEN(x)
}
```

The result is unexpectedly len=1. The reason is that `int x[10]` in the function header is silently converted into `int* x` and the length is therefore `sizeof(ptr) / sizeof(int)` which is indeed 1 on the platform. You can read more about the problem and how to define a safe version in <http://zubplot.blogspot.com/2015/01/gcc-is-wonderful-better-arraysize-macro.html> which explains a patch to the Linux kernel to improve safety of its ARRAY\_SIZE macro.

Note that similar problems exist, if x is a pointer, with:

``` c
memset(x, 0, sizeof(x))
```

In general, if writing macros, try to write them in a way that they will fail if they get a pointer instead of struct/array.

### Buffer overflows/underflows

Buffer overflows and underflows are perhaps the biggest source of security vulnerabilities in C code. The following example shows a buffer overflow in (a past version) of one Ledger app.

``` c
#define MAX_RAW_TX 200
...
struct tmpCtx {
    ...
    uint8_t rawTx[MAX_RAW_TX];
} transactionContext_t;

const uint8_t PREFIX[] = {0x00, 0x01, 0x02 ... } // coin-specific signing prefix

void handleSign(uint8_t p1, uint8_t p2, uint8_t *workBuffer,
                uint16_t dataLength, volatile unsigned int *flags,
                volatile unsigned int *tx) {
    ... // (no dataLength validation, we can get up to 255 from APDU)
    // Note: we can pass this line with dataLength > 200
    if (parseTx(workBuffer, dataLength, &txContent) != USTREAM_FINISHED) {
        THROW(0x6A80);
    }
    ...
    memmove(tmpCtx.rawTx, PREFIX, sizeof(PREFIX));

    // Here is the vulnerability. There should be a check of
    // if (!(dataLength + sizeof(SIGN_PREFIX) < MAX_RAW_TX)) THROW(...)
    memmove(tmpCtx.transactionContext.rawTx + sizeof(SIGN_PREFIX), workBuffer, dataLength);
}
```

In general, there is only a single remedy for buffer overflows -**always check for available buffer space before writing to memory**. The best is to not rely on some specific buffer size but instead rely on sizeof operator. If using sizeof, however, be very careful - if you ever pass a buffer to a function, you are losing its size!

``` c
uint8_t a[100];

main() {
 sizeof(a); // 100
 f(a);
 g(a);
}

void f(uint8_t* x) {
  sizeof(x); // 4
}

void g(uint8_t oops[100]) {
  sizeof(oops); // 4
}
```

For the extra safery, consider using a SIZEOF macro defined similarly to <https://github.com/LedgerHQ/ledger-app-cardano/blob/f578c903c19288495a359a2bc909b39c33ee69ca/src/utils.h#L27>

Be also wary of constructs like

``` c
memset(displayAddress, 0, sizeof(fullAddress));
memmove((void *)displayAddress, tmpCtx.address, 5);
memmove((void *)(displayAddress + 5), "...", 3);
memmove((void *)(displayAddress + 8), tmpCtx.address + addressLength - 4, 4);
```

There are several problematic aspects of such code. Apart from truncating important values (see next sections), this code makes a lot of assumptions. For example, if addressLength &lt; 4 (maybe some previous function returns addressLength=0 instead of an error) we get buffer underflow and copy up to 4 bytes of other memory and display it to the user. Or a programmer decides to shorten definition of fullAddress below 13 and we would overwrite memory after the buffer. Finally, this code uses explicit indexes (e.g., 5, 8=5+3). A better trick would be to have a safe helper macro:

``` c
#define APPEND(ptr, end, from, len) \
  do { \
    if (ptr + len >= end || len < 0) THROW(); // not enough space \
    memcpy(ptr, from, len); \
    ptr += len; \
  } while(0)

char* ptr_begin = displayAddress;
char* ptr_end = displayAddress + sizeof(displayAddress); // points behind buffer
APPEND(ptr_begin, ptr_end, tmpCtx.address, 5); // we should also assert addressLength>5
APPEND(ptr_begin, ptr_end, "...", 3); // Note, we still have explicit size here
APPEND(ptr_begin, ptr_end, tmpCtx.address - 4, 4); // Note: another assert
```

Finally, you can use SPRINTF macro from `sdk/include/os_io_seproxyhal.h` but be aware that the definition is

``` c
#define SPRINTF(strbuf, ...) snprintf(strbuf, sizeof(strbuf), __VA_ARGS__)
```

so the above warning about passing pointers instead of arrays applies to it.

### Integer overflows/underflows

Integer overflows go hand in hand with buffer overflows. In fact, they can cause serious buffer overflows. Consider following code where a numeric underflow causes buffer overflow of 64kB!

``` c
void handleSign(uint8_t p1, uint8_t p2, uint8_t *workBuffer,
                uint16_t dataLength, volatile unsigned int *flags,
                volatile unsigned int *tx)
{
    uint32_t i;

    // here we don't check if dataLength > 0 so we might be reading behind the buffer
    tmpCtx.transactionContext.pathLength = workBuffer[0];
    if ((tmpCtx.transactionContext.pathLength < 0x01) ||
        (tmpCtx.transactionContext.pathLength > MAX_BIP32_PATH))
    {
        PRINTF("Invalid path\n");
        THROW(0x6a80);
    }
    workBuffer++;
    dataLength--;
    for (i = 0; i < tmpCtx.transactionContext.pathLength; i++)
    {
        tmpCtx.transactionContext.bip32Path[i] =
            (workBuffer[0] << 24) | (workBuffer[1] << 16) |
            (workBuffer[2] << 8) | (workBuffer[3]);
        workBuffer += 4;
        // here we again blindly assume dataLength >= 4
        dataLength -= 4;
    }

    initTxContext(&txProcessingCtx, &sha256, &dataSha256, &txContent, N_storage.dataAllowed);
    // if we sent APDU with dataLength=0 at the beginning, we would end up with dataLength ~ 64kB here
    txResult = parseTx(&txProcessingCtx, workBuffer, dataLength);
    ...
}
```

As a general rule, be very careful about variables which might overflow or underflow. If possible, use bigger types that can accommodate the arithmetic operations you need to perform. For buffer sizes, prefer unsigned types -- that way, you can easily check both overflow and underflow in one go, i.e.

``` c
void f(uint8_t* buf, size_t bufSize) { // size_t is unsigned
  if (bufSize < REASONABLE_SIZE) THROW(); // guards both against underflow and overflow!
}
```

### Data Truncation

Speaking of safely formatting data, be wary of truncated values. Importantly, make sure you do not truncate any important data when displaying on the Ledger screen.

**Example 1**: Truncating tx hash from "f6954eb23ecd1d64c782e6d6c32fad2876003ae92986606585ae7187470d5e04" to "f695...5e04" might look nice for the users but this effectively reduces the security of hash and an attacker can now easily try to create a hash collision. Instead, prefer scrolling/paging of long important values.

**Example 2**: Raise errors instead of truncation

``` c
int tmp[10]; // max 10 digits, right?

uint32_t amount = 1987654321
SPRINTF(tmp, "%d", amount) // at least we won't get buffer overflow here ...
display(tmp) // but we display an empty screen!

// but it could be worse
// with bad custom formatting function we could get
format_amount(tmp, SIZEOF(tmp), amount) // "198765432" or "987654321"
```

### Stack overflow

You application has only a limited size (about \~700B) of stack. That is one of the reasons why stack cookies are not supported yet on the platform.

Given the memory constraints, BOLOS OS does not have memory mapping which would protect from stack overflow errors. As a result, it is very easy to consume more stack space and overwrite the end of your data.

Recommendation:

Enable `DEFINES += HAVE_BOLOS_APP_STACK_CANARY` in your Makefile. This will help you detect stack overflows during app development. If overflow is detected, the app will reboot the device. Note that the overflow check happens only on the next I/O. This means that the protection is not instant and an attacker might avoid the canary check: this option is not a security feature, and has been added to analyze the stack usage during testing process.

### Optimizations

Do not clear sensitive data with for-loops or other techniques. Do not use `memset` or `bzero` to clear sensitive data: it could be optimized and removed by the compiler.

**Recommendation**: Use `explicit_bzero` which guarantees that the compiler will not remove the erasure. (See [https://www.owasp.org/index.php/Insecure\\\_Compiler\\\_Optimization](https://www.owasp.org/index.php/Insecure\_Compiler\_Optimization) for an example of how things could go wrong.)

## Business logic problems

### Swallowing errors & half-updated states

It goes without saying that you should check return value of functions for any errors. Fortunately, BOLOS throws an error if something goes wrong and you might want to do the same instead of relying on error codes.

There is, however, a more indirect problem. Some BOLOS apps silently catch exceptions in the main event loop without erasing app memory. This could lead into a following insidious bug:

``` c
uint16_t totalSize;
uint8_t totalBuf[1000];

void signTx(uint8_t p1, uint8_t p2, uint8_t* data, uint16_t dataSize) {
  if (p1 == P1_INIT) {
    totalSize = 0;
  }

  uint8_t* ptr = totalBuf[totalSize];
  totalSize += dataSize;
  if (totalSize > SIZEOF(totalBuf)) THROW(ERR);
  memcpy(ptr, data, dataSize);

  if (p2 == P2_CONTINUE) {
    THROW(0x9000); // early exit with success
  }
  do_something();
}
```

An attacker might do

1.  SignTx(INIT, 100 bytes of data) // OK
2.  SignTx(CONTINUE, 100 bytes of data) // OK

...

1.  SignTx(CONTINUE, 100 bytes of data) // OK
2.  SignTx(CONTINUE, 100 bytes of data) // throws

…

1.  SignTx(CONTINUE, 100 bytes of data) // throws
2.  SignTx(CONTINUE, 100 bytes of data) **// writes to data\[-64..36\]**

The problem here is that the app state is not updated in a "transactional" manner and attacker exploits this.

Recommendations: Try to not affect global state before you throw. Many times you can use a scratch memory to assemble result and only then do `memmove` to write the result. Even better, wipe memory/reboot device on exceptions to destroy any half-updated app states.

### Too lenient parsing of transactions

It might happen that your transaction parsing is too lenient. Importantly, this might cause problems if the transaction serialization spec is ambiguous and different clients might interpret it differently. For example, if a field might be repeated one parser might take the first value while another one a second. In general, lenient tx serialization spec should not happen (and if so, the cryptocurrency has bigger concerns than Ledger wallet).

However, even if the network nodes are strict with the serialization checking, you should not slack off on your part. Any ambiguity in parsing adds an attacker a leverage point once it finds some other vulnerability.

Recommendation: Be as strict as possible with transaction parsing. Accept only fields which are in normalized form. If possible, avoid repeated fields and accept fields only in a pre-described order.

Note: you can even go further and do not parse transaction on the device at all. Instead, just send the data in a custom format and let both the app and host serialize the transaction on their own with the app revealing (and signing) only the serialized hash. This way you can avoid bugs in parsing code and be sure both the host wallet and the app agree perfectly on the content of the transaction.

### Protect Against "Instruction Change" Attacks

Ledger applications live on a secure chip which is very limited in terms of its memory and communication channel. This brings in an interesting problem -- the application might not be able to perform all its work in a single request. Instead, the work will need to be spread over multiple requests. Whenever this happens, the application needs to be protected against attacker mixing multiple non-related (or even related) requests.

If your application contains at least one instruction which works over multiple APDU exchanges (e.g., having `P1_INIT/P1_CONTINUE` flag in the standard application "terminology"), you have to protect it from interference. Common attack scenarios:

#### Example: Two multi-APDU instructions

Let's say you have SignTx and SignMessage, both sharing the same global `hash` variable, both instructions working over multiple APDU exchanges.The attacker might now call

1.  SignMessage(INIT)
2.  SignTx(INIT)
3.  SignMessage(CONTINUE) with data (no finish yet)
4.  SignTx(CONTINUE) with data (finish)

At this point, the global memory might be in an inconsistent state (for example, the SignTx hash does contain a different hash than it should be). This might lead to an easy attack.

#### Example: Single multi-APDU instruction

Even if you have only a single instruction with multiple APDU exchanges, an attacker might gain some leverage. Let's say you have roughly

``` c
struct pubkey_ctx {
  int[10] bip32_path;
  int bip32_path_len;
}

struct sign_ctx {
  hash_ctx hash;
  // some other data
}

union {
  pubkey_ctx pubkey;
  sign_ctx signTx;
} ctx;
```

To overwrite the hash context with an exact chosen value.

#### Example: "Self"-attack on a single multi-APDU instruction

You don't even need two instructions to perform a variation of the attack. Suppose your code goes along these lines

``` c
void signTx () {
  if (p1 == P1_INIT) {
    initialize_half_of_my_state()
    if (some_bad_input) THROW(error)
    initialize_rest_of_the_state
  } else {
    // do something
  }
}
```

Assuming that you do not reset state on exceptions, this might happen

1.  signTx(INIT, valid data)
2.  signTx(CONTINUE, valid data)
3.  signTx(INIT, data which throws)
4.  signTx(CONTINUE, more data)

An attacker now managed to reset half of your state (maybe tx length) but not the rest of it (maybe tx hash) which might allow it to attack your code.

Obviously, there are many variations of this basic scheme and an utmost care needs to be taken here. The recommendation here is:

1.  Do not allow mixing of instructions
2.  Within instruction, keep an explicit state machine of what is allowed to happen next)
1.  Clear memory on exceptions

### Use explicit state machines

Whenever a host is required to perform certain actions in a specific order, be sure to explicitly track the state and verify that the next step is consistent. Good examples of what might need to be checked

1. If the host claims some number of tx inputs/outputs, make sure you receive exactly that amount, not more and not less
2. If the host needs to send multiple transaction inputs and outputs and you have to process inputs before outputs, make sure the host cannot send additional input after it received an output.
3. Check that once you finished an action (signing), the attacker cannot resume with additional data (which might be empty). This is important, because usually signing "closes" some hash contexts (or destroy some other data) and re-running `SignTx(CONTINUE, empty data)` might, therefore, yield either crash or produce a signature of some different data. In general, after finishing a request you should wipe the context variable
4. If you do not reset UI after sending APDU (for example, because you displayed an address and now you are waiting for another APDU containing tx amount), make sure your button handlers fire just once -- a user might press the buttons multiple times. A general recommendation would be to always reset UI with APDU response. Additionally, you can guard your app against itself (and against bad SDK) with tracking whether it should be in IO/UI phase and assert on it in APDU/UI handlers.

A (somewhat contrived) example of problematic button handlers

``` c
void handle_sign_message(...) {
  ... // validations
  if (!is_last_apdu) {
    cx_hash(CX_CONTINUE, ctx->hash, data);
  else {
    memcpy(ctx->last_part, data);
    flags *= IO_ASYNCH;
    display_tx_prompt();
  }
}

unsigned int io_seproxyhal_touch_tx_ok() {
  // for some reason we modify ctx state here
  cx_hash(CX_LAST, ctx->last_part);
  sign(ctx->last_part);
  // now do io_exchange

  // Warning: this might throw (host might do something weird with USB)
  // -> user will press the button second time
  // -> we do another round of cx_hash -> efficiently signing
  io_exchange(....);
  // now reset UI
  ui_idle(); // <-- this line resets button callback
}
```

A fully resilient solution would be

``` c
void display_tx_prompt() {
   tx_prompt_handled = false;
   ...
}

unsigned int io_seproxyhal_touch_tx_ok() {
  assert(!tx_prompt_handled);
  tx_prompt_handled = true;
  ...
}

unsigned int io_seproxyhal_touch_tx_cancel() {
  assert(!tx_prompt_handled);
  tx_prompt_handled = true;
  ...
}
```

But such a solution is needed only if `tx_ok` or `tx_cancel` modify context/global variables before calling `ui_idle()`.

As a side note, if your `__ok()`/`__cancel()` handler both :
1. do not check whether the memory is cleared, but :
2. clear the memory inside the handler

make sure that memclear happens after calling `ui_idle()`.


Note: If not guarded properly, an attacker might try a following line of attack:

1.  Send transaction which is not what user wanted
2.  User realizes that the transaction is wrong and presses reject
3.  Attacker hogs `io_exchange` (presumably by doing some bad things to USB communication)
1.  User tries again a few more times, thinks that the UI is broken and the app hanged. The callbacks are fired again and again but `io_exchange` still throws
1.  At this point in time, a desperate user might click on "confirm" button to unblock the UI. If an attacker can guess this time, she can un-hog USB and receive confirm callback
