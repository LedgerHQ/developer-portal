---
title: Security Audits
subtitle: 
tags: [development phases, develop embedded app, security audit]
category: Embedded Application
toc: true
author:
layout: doc
---

## Introduction

To be listed on the Ledger Live “My Ledger“ section, Embedded Apps and Plugins must go through our integration process that includes a security audit performed by one of our trusted partners. 

Provided your project fulfills the [conditions](#conditions), this is how an external audit unfolds:
1. You get in touch with the auditers and sign a contract with them. [Read more](#your-agreement-with-our-partners).
2. The auditors review your app based on Ledger specifications. [Read more](#content-of-the-security-audit).
3. Ledger reviews the security audit report
4. Ledger publishes your app

## Conditions

To go through an external security audit, ensure your project fulfills the following conditions:

- Your Embedded App works with all our devices (Ledger Nano S, S Plus, X and Stax)
- Your Embedded App has been functionally validated by Ledger team


<!--  -->
{% include alert.html style="important" text="<ul>
<li>Do not start a security audit process if your Embedded App is not ready for all Ledger devices (Ledger Nano S, S Plus, X and Stax).</li>
<li>Your Embedded App must still be functional after the security audit </li></ul>" %}
<!--  -->

## Your agreement with our partners

If your embedded app is ready to go through the security audit, you can contact one of our partners:

- [Kudelski IoT]( https://www.kudelski-iot.com/services-and-systems/ledger-security-audit).
- [Quarkslab](https://www.quarkslab.com/), contact them [here](mailto:qb_ledger@quarkslab.com).

They both follow Ledger specifications and will provide a full report with potential vulnerabilites.

Important aspects of your agreement:
- Time: When the auditors will be able to start the review.
- Cost: The external audit will be entirely at your expense.
- Maintenance: You must include a clause for updates or sign a new contract for any major update. If you don't, your app will not be updated by Ledger and will be reverted to developer mode if it is breaking.

<!--  -->
{% include alert.html style="note" text="Ledger is not a stakeholder in the contract between you and our partners." %}
<!--  -->

## Content of the security audit

Ledger has established and made public a detailed specification of what needs to be done to perform a security audit following Ledger’s standards. 

<table>
    <thead>
        <tr>
            <th style="width:20%;">Step</th>
            <th style="width:80%;">Specification</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Application privileges</td>
            <td><ul><li>Check application flags (privileges) and allowed derivation paths.</li></ul></td>
        </tr>
        <tr>
            <td>Compilation</td>
            <td><ul><li>Check for compilation warnings, and if warnings have been silenced. If so, ask for a fix.</li></ul></td>
        </tr>
        <tr>
            <td>Tests</td>
            <td><ul><li>Run tests and check they succeed.</li>
                <li>Check tests are sound</li></ul>
            </td>
        </tr>
        <tr>
            <td>Static Analysis</td>
            <td><ul><li>Check for defects using scan-build and our scan options. Add in CI if not present.</li>
                <li>CodeQL: check with the "security and quality" queries. Add in CI if not present.</li></ul>
            </td>
        </tr>
        <tr>
            <td>Manual code review</td>
            <td><ul><li>List every transaction fields. Look which ones must be displayed to the user.</li>
                <li>Check transaction parser, field formatters.</li>
                <li>Check if sensitive data is properly erased.</li>
                <li>Do not allow blind signing.</li></ul>
            </td>
        </tr>
        <tr>
            <td>Fuzzing</td>
            <td><ul><li>Implement a transaction fuzzer. Best effort to reach decent coverage.</li>
                <li>Use libFuzzer if possible to integrate with ClusterFuzzLite.</li></ul>
            </td>
        </tr>
        <tr>
            <td>Deliverables</td>
            <td><ul><li>Report and executive summary detailing findings, and tests that gave no results.</li>
                <li>Security fixes: on a temporary private fork.</li>
                <li>Feedback on the SDK: what could be improved for a better security.</li></ul>
            </td>
        </tr>
    </tbody>
</table>

## Security Guidelines

To develop a secure embedded app, read and apply [the security guidelines](../secure-app/).
