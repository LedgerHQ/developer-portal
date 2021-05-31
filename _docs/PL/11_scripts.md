--- 
title: Scripts
subtitle: Set of Scripts
tags: []
toc: true
toc_sticky: true
author: parkerhoyes
layout: doc_pl
---


The Python loader includes a collection of useful scripts for managing
BOLOS devices. This section includes an overview of some of the most
important scripts and how they can be used.

In order to use any of these scripts, the device must be in the
dashboard application (no apps are open, the device should display a
list of installed apps).

Here is an example using the [deleteApp.py](https://github.com/LedgerHQ/blue-loader-python/blob/master/ledgerblue/deleteApp.py)
 script from the command-line:

```bash
python -m ledgerblue.deleteApp --targetId 0x31100002 --appName "Hello World"
```

The above command will delete the app named \"Hello World\" from the
connected Leger Nano S.

See the `script reference` page for the
detailed documentation about each script.

