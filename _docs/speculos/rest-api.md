---
title: REST API
subtitle:
tags: []
author:
layout: doc_sp
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}


A REST API is available at [http://127.0.0.1:5000](http://127.0.0.1:5000) (the port can be changed thanks to `--api-port`) when speculos is running. The specification of the API can be found at this URL, or from the swagger.io [demo website](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/LedgerHQ/speculos/master/api/swagger/swagger.json).

This API is meant to be used in test environments to automate actions on the device such as:

- Taking screenshot
- Pressing buttons
- Setting or updating [automation rules](../automation)
- etc.

## Usage

For instance, pressing the left button is as simple as:

```sh
curl -d '{"action":"press-and-release"}' http://127.0.0.1:5000/button/left
```

and taking a screenshot of the device:

```sh
curl -o screenshot.png http://127.0.0.1:5000/screenshot
```
