---
title: App’s home
subtitle:
tags: [requirement, requirements]
category: Embedded Application
toc: true
author:
layout: doc
---

The app’s home is what users see when they launch your app. It explains what your app is about, and quickly lead them to where they can take action—typically creating a transaction in Ledger Live or another wallet.

## Anatomy of the apps'home

Your app’s home shows your app icon, your app name, and your app description. The positioning of the elements and the buttons are taken care of automatically, so you can focus on providing a helpful, concise description of what your app does.

<!-- ------------- Image ------------- -->
{: .center}
[![App architecture](/stax-bitcoin-home.png)](/stax-bitcoin-home.png)
<!-- --------------------------------- -->


{% include alert.html style="important" text="Don’t provide a misleading app description: focus on writing a concise, easy-to-understand description that fits most use cases for your apps and your users." %}

The other elements of the app’s home are: 
- the quit button in the top-right corner exitting your app and bringing users back to the Ledger Stax home screen
- the Information button, covered in the next chapter.

## Key takeways

{% include alert.html style="tip" text="<ul>
	<li>Provide a short, helpful description that helps users understand what your app does for them, and what to do next.</li>
	<li>Rely on the default home screen construction built from your app resources, and don’t modify the layout.</li>
</ul>" %}

## Useful Graphic Library APIs

- Use `nbgl_useCaseHome()` to make the home screen of an application.
- For plugins only, use `nbgl_useCasePlugInHome()` to make an the plugin version of the home screen of an application.
- For specific cases (non-cyrpto apps for example), use `nbgl_useCaseHomeExt()` to make an extended version of home screen of an application (with an action button).

More info [here](../stax-graphic-lib/).
