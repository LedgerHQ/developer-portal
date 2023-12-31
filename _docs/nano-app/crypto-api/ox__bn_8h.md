---
title: ox_bn.h
subtitle:
tags: []
category: CryptographyAPI
toc:
layout: doc
---

<button class="uk-button uk-button-default uk-button-small uk-margin-medium-top" onclick="history.back()">Previous</button>
<a class="uk-button uk-button-default uk-button-small uk-margin-medium-top crypto-button" href="../../crypto-api/files">Back to the files list</a>


<p>Big Number syscalls.  
<a href="#details">More...</a></p>
<table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="nested-classes"></a>
Data Structures</h2></td></tr>
<tr class="memitem:"><td class="memItemLeft" align="right" valign="top">struct &#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a></td></tr>
<tr class="memdesc:"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Montgomery context.  <a href="../cx__bn__mont__ctx__t#details">More...</a><br /></td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="define-members"></a>
Macros</h2></td></tr>
<tr class="memitem:a8e4037d905d5c7cdae69259dabf0afe9"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a8e4037d905d5c7cdae69259dabf0afe9">CX_BN_WORD_ALIGNEMENT</a>&#160;&#160;&#160;16</td></tr>
<tr class="memdesc:a8e4037d905d5c7cdae69259dabf0afe9"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Minimal word size in bytes.  <a href="#a8e4037d905d5c7cdae69259dabf0afe9">More...</a><br /></td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="typedef-members"></a>
Typedefs</h2></td></tr>
<tr class="memitem:a3caccc9ce9a31d3cba31ce1de1194d12"><td class="memItemLeft" align="right" valign="top">typedef uint32_t&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a></td></tr>
<tr class="memdesc:a3caccc9ce9a31d3cba31ce1de1194d12"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Index of a big number.  <a href="#a3caccc9ce9a31d3cba31ce1de1194d12">More...</a><br /></td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="func-members"></a>
Functions</h2></td></tr>
<tr class="memitem:a6d3a8100c6eb2e07df393cf228640a6b"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a6d3a8100c6eb2e07df393cf228640a6b">cx_bn_lock</a> (size_t word_nbytes, uint32_t flags)</td></tr>
<tr class="memdesc:a6d3a8100c6eb2e07df393cf228640a6b"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Locks the BN processor.  <a href="#a6d3a8100c6eb2e07df393cf228640a6b">More...</a><br /></td></tr>
<tr class="memitem:a957cdbd9bc99c18a5689366c59ff97c0"><td class="memItemLeft" align="right" valign="top">SYSCALL uint32_t&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a957cdbd9bc99c18a5689366c59ff97c0">cx_bn_unlock</a> (void)</td></tr>
<tr class="memdesc:a957cdbd9bc99c18a5689366c59ff97c0"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Releases the BN lock.  <a href="#a957cdbd9bc99c18a5689366c59ff97c0">More...</a><br /></td></tr>
<tr class="memitem:aa519cefbabb81d6a859741c572c9c84e"><td class="memItemLeft" align="right" valign="top">SYSCALL bool&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aa519cefbabb81d6a859741c572c9c84e">cx_bn_is_locked</a> (void)</td></tr>
<tr class="memdesc:aa519cefbabb81d6a859741c572c9c84e"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Checks whether the BN processor is currently locked.  <a href="#aa519cefbabb81d6a859741c572c9c84e">More...</a><br /></td></tr>
<tr class="memitem:afc9a4e2e538d9fa3b59762a9b4c74a13"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#afc9a4e2e538d9fa3b59762a9b4c74a13">cx_bn_locked</a> (void)</td></tr>
<tr class="memdesc:afc9a4e2e538d9fa3b59762a9b4c74a13"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Ascertains whether the BN processor is currently locked.  <a href="#afc9a4e2e538d9fa3b59762a9b4c74a13">More...</a><br /></td></tr>
<tr class="memitem:a178aa2a046e9ca47fb6b15635308f32e"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a178aa2a046e9ca47fb6b15635308f32e">cx_bn_alloc</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *x, size_t nbytes)</td></tr>
<tr class="memdesc:a178aa2a046e9ca47fb6b15635308f32e"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Allocates memory for a new BN.  <a href="#a178aa2a046e9ca47fb6b15635308f32e">More...</a><br /></td></tr>
<tr class="memitem:aa7fc424d92176eebb7256da23bb52dc5"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aa7fc424d92176eebb7256da23bb52dc5">cx_bn_alloc_init</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *x, size_t nbytes, const uint8_t *value, size_t value_nbytes)</td></tr>
<tr class="memdesc:aa7fc424d92176eebb7256da23bb52dc5"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Allocates memory for a new BN and initializes it with the specified value.  <a href="#aa7fc424d92176eebb7256da23bb52dc5">More...</a><br /></td></tr>
<tr class="memitem:a9c569df5d9c8d7e20b67c40e89a34063"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a9c569df5d9c8d7e20b67c40e89a34063">cx_bn_destroy</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *x)</td></tr>
<tr class="memdesc:a9c569df5d9c8d7e20b67c40e89a34063"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Releases a BN and gives back its attached memory to the system.  <a href="#a9c569df5d9c8d7e20b67c40e89a34063">More...</a><br /></td></tr>
<tr class="memitem:a1c585a11ef51dd20e1a40ffae9b75b67"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a1c585a11ef51dd20e1a40ffae9b75b67">cx_bn_nbytes</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, size_t *nbytes)</td></tr>
<tr class="memdesc:a1c585a11ef51dd20e1a40ffae9b75b67"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Gets the size in bytes of a BN.  <a href="#a1c585a11ef51dd20e1a40ffae9b75b67">More...</a><br /></td></tr>
<tr class="memitem:ae7b9707a52805901b5a0a197f996f418"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ae7b9707a52805901b5a0a197f996f418">cx_bn_init</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, const uint8_t *value, size_t value_nbytes)</td></tr>
<tr class="memdesc:ae7b9707a52805901b5a0a197f996f418"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Iinitializes a BN with an unsigned value.  <a href="#ae7b9707a52805901b5a0a197f996f418">More...</a><br /></td></tr>
<tr class="memitem:a36b5bc930e7c58fee9688a183ffdbd22"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a36b5bc930e7c58fee9688a183ffdbd22">cx_bn_rand</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x)</td></tr>
<tr class="memdesc:a36b5bc930e7c58fee9688a183ffdbd22"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Generates a random number and stores it in the given index.  <a href="#a36b5bc930e7c58fee9688a183ffdbd22">More...</a><br /></td></tr>
<tr class="memitem:aac623653ae81c2a17d943ed0d2b6bf35"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aac623653ae81c2a17d943ed0d2b6bf35">cx_bn_copy</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:aac623653ae81c2a17d943ed0d2b6bf35"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Copies the BN value.  <a href="#aac623653ae81c2a17d943ed0d2b6bf35">More...</a><br /></td></tr>
<tr class="memitem:aa9172ace5089aee1871025d35f78ada6"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aa9172ace5089aee1871025d35f78ada6">cx_bn_set_u32</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t n)</td></tr>
<tr class="memdesc:aa9172ace5089aee1871025d35f78ada6"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Sets the value of a BN with a 32-bit unsigned value.  <a href="#aa9172ace5089aee1871025d35f78ada6">More...</a><br /></td></tr>
<tr class="memitem:a06a1eda83aae776ec9791d689ba16d6a"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a06a1eda83aae776ec9791d689ba16d6a">cx_bn_get_u32</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t *n)</td></tr>
<tr class="memdesc:a06a1eda83aae776ec9791d689ba16d6a"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Gets the 32-bit value corresponding to a BN.  <a href="#a06a1eda83aae776ec9791d689ba16d6a">More...</a><br /></td></tr>
<tr class="memitem:afae29eeacb4da26d2f50390378ce178b"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#afae29eeacb4da26d2f50390378ce178b">cx_bn_export</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint8_t *bytes, size_t nbytes)</td></tr>
<tr class="memdesc:afae29eeacb4da26d2f50390378ce178b"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Stores (serializes) a BN value as unsigned raw bytes in big-endian order.  <a href="#afae29eeacb4da26d2f50390378ce178b">More...</a><br /></td></tr>
<tr class="memitem:aed53c1ee80adfd33c7b31433760eda40"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aed53c1ee80adfd33c7b31433760eda40">cx_bn_cmp</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b, int *diff)</td></tr>
<tr class="memdesc:aed53c1ee80adfd33c7b31433760eda40"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Compares two BN values.  <a href="#aed53c1ee80adfd33c7b31433760eda40">More...</a><br /></td></tr>
<tr class="memitem:a2f19bd9f238faff1cb863a899d83f1af"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a2f19bd9f238faff1cb863a899d83f1af">cx_bn_cmp_u32</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, uint32_t b, int *diff)</td></tr>
<tr class="memdesc:a2f19bd9f238faff1cb863a899d83f1af"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Compares a BN value with an unsigned integer.  <a href="#a2f19bd9f238faff1cb863a899d83f1af">More...</a><br /></td></tr>
<tr class="memitem:a965f622e64eb56ec9e57c0ccad0a949f"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a965f622e64eb56ec9e57c0ccad0a949f">cx_bn_is_odd</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n, bool *odd)</td></tr>
<tr class="memdesc:a965f622e64eb56ec9e57c0ccad0a949f"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Tests whether a BN value is odd.  <a href="#a965f622e64eb56ec9e57c0ccad0a949f">More...</a><br /></td></tr>
<tr class="memitem:a1a0474ec79ec7495acd683886ac2ba58"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a1a0474ec79ec7495acd683886ac2ba58">cx_bn_xor</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:a1a0474ec79ec7495acd683886ac2ba58"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs the bitwise 'exclusive-OR' of two BN values.  <a href="#a1a0474ec79ec7495acd683886ac2ba58">More...</a><br /></td></tr>
<tr class="memitem:a891eefd285653d985ca058b632bcec0e"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a891eefd285653d985ca058b632bcec0e">cx_bn_or</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:a891eefd285653d985ca058b632bcec0e"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs the bitwise 'OR' of two BN values.  <a href="#a891eefd285653d985ca058b632bcec0e">More...</a><br /></td></tr>
<tr class="memitem:a062230d9ffbd699afb628e16edf28ec2"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a062230d9ffbd699afb628e16edf28ec2">cx_bn_and</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:a062230d9ffbd699afb628e16edf28ec2"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs the bitwise 'AND' of two BN values.  <a href="#a062230d9ffbd699afb628e16edf28ec2">More...</a><br /></td></tr>
<tr class="memitem:ab83c53f05e072f3adac9f0765c67317d"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ab83c53f05e072f3adac9f0765c67317d">cx_bn_tst_bit</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t pos, bool *set)</td></tr>
<tr class="memdesc:ab83c53f05e072f3adac9f0765c67317d"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Tests the bit value at the specified index.  <a href="#ab83c53f05e072f3adac9f0765c67317d">More...</a><br /></td></tr>
<tr class="memitem:a211dea54f2f29b22d8c8668fd8482383"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a211dea54f2f29b22d8c8668fd8482383">cx_bn_set_bit</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t pos)</td></tr>
<tr class="memdesc:a211dea54f2f29b22d8c8668fd8482383"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Sets the bit value at the specified index.  <a href="#a211dea54f2f29b22d8c8668fd8482383">More...</a><br /></td></tr>
<tr class="memitem:a03120fe7c557cd31948b1130ce3a0f9b"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a03120fe7c557cd31948b1130ce3a0f9b">cx_bn_clr_bit</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t pos)</td></tr>
<tr class="memdesc:a03120fe7c557cd31948b1130ce3a0f9b"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Clears the bit value at the specified index.  <a href="#a03120fe7c557cd31948b1130ce3a0f9b">More...</a><br /></td></tr>
<tr class="memitem:ad2b31165841f721be8bd6881d253ecfe"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ad2b31165841f721be8bd6881d253ecfe">cx_bn_shr</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t n)</td></tr>
<tr class="memdesc:ad2b31165841f721be8bd6881d253ecfe"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a right shift.  <a href="#ad2b31165841f721be8bd6881d253ecfe">More...</a><br /></td></tr>
<tr class="memitem:a5f5244f83e44137a249118b6a4df1f49"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a5f5244f83e44137a249118b6a4df1f49">cx_bn_shl</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, uint32_t n)</td></tr>
<tr class="memdesc:a5f5244f83e44137a249118b6a4df1f49"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a left shift.  <a href="#a5f5244f83e44137a249118b6a4df1f49">More...</a><br /></td></tr>
<tr class="memitem:a836e397b38a29c46b19a5cd8a38f920f"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a836e397b38a29c46b19a5cd8a38f920f">cx_bn_cnt_bits</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n, uint32_t *nbits)</td></tr>
<tr class="memdesc:a836e397b38a29c46b19a5cd8a38f920f"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Counts the number of bits set to 1 of the BN value.  <a href="#a836e397b38a29c46b19a5cd8a38f920f">More...</a><br /></td></tr>
<tr class="memitem:a7e91d3fc7ab84ef9bd478fd6c55f9e2c"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a7e91d3fc7ab84ef9bd478fd6c55f9e2c">cx_bn_add</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:a7e91d3fc7ab84ef9bd478fd6c55f9e2c"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs an addition <b>r = a + b</b>.  <a href="#a7e91d3fc7ab84ef9bd478fd6c55f9e2c">More...</a><br /></td></tr>
<tr class="memitem:af075c2ab25f971f283bfed15d62b840c"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#af075c2ab25f971f283bfed15d62b840c">cx_bn_sub</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:af075c2ab25f971f283bfed15d62b840c"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a subtraction <b>r = a - b</b>.  <a href="#af075c2ab25f971f283bfed15d62b840c">More...</a><br /></td></tr>
<tr class="memitem:a6f65a9cd681a1c232a130f5eda6ac543"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a6f65a9cd681a1c232a130f5eda6ac543">cx_bn_mul</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b)</td></tr>
<tr class="memdesc:a6f65a9cd681a1c232a130f5eda6ac543"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a multiplication <b>r = a * b</b>.  <a href="#a6f65a9cd681a1c232a130f5eda6ac543">More...</a><br /></td></tr>
<tr class="memitem:a5be0853e346986506d1320184d9563f4"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a5be0853e346986506d1320184d9563f4">cx_bn_mod_add</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:a5be0853e346986506d1320184d9563f4"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular addition <b>r = a + b mod n</b>.  <a href="#a5be0853e346986506d1320184d9563f4">More...</a><br /></td></tr>
<tr class="memitem:ade4b28da6dddfd6e4f78acdaba9566eb"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ade4b28da6dddfd6e4f78acdaba9566eb">cx_bn_mod_sub</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:ade4b28da6dddfd6e4f78acdaba9566eb"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular subtraction <b>r = a - b mod n</b>.  <a href="#ade4b28da6dddfd6e4f78acdaba9566eb">More...</a><br /></td></tr>
<tr class="memitem:a99d12c1f9ee47c76f6f071d766bd305f"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a99d12c1f9ee47c76f6f071d766bd305f">cx_bn_mod_mul</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:a99d12c1f9ee47c76f6f071d766bd305f"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular multiplication <b>r = a * b mod n</b>.  <a href="#a99d12c1f9ee47c76f6f071d766bd305f">More...</a><br /></td></tr>
<tr class="memitem:ac04ef099548e399df84d972cdf83f99a"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ac04ef099548e399df84d972cdf83f99a">cx_bn_reduce</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> d, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:ac04ef099548e399df84d972cdf83f99a"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a reduction <b>r = d mod n</b>.  <a href="#ac04ef099548e399df84d972cdf83f99a">More...</a><br /></td></tr>
<tr class="memitem:ae35f88dfde67d9c20e733d144a19bb94"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ae35f88dfde67d9c20e733d144a19bb94">cx_bn_mod_sqrt</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n, uint32_t sign)</td></tr>
<tr class="memdesc:ae35f88dfde67d9c20e733d144a19bb94"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes <b>r</b> such that <b>r² = a mod n</b> if <b>a</b> is a quadratic residue.  <a href="#ae35f88dfde67d9c20e733d144a19bb94">More...</a><br /></td></tr>
<tr class="memitem:a6b30b34ab43f02228d57fcf9727d3afc"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a6b30b34ab43f02228d57fcf9727d3afc">cx_bn_mod_pow_bn</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> e, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:a6b30b34ab43f02228d57fcf9727d3afc"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular exponentiation <b>r = a^e mod n</b>.  <a href="#a6b30b34ab43f02228d57fcf9727d3afc">More...</a><br /></td></tr>
<tr class="memitem:a8d74dbd3e478f5660ce972d0faa9bec1"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a8d74dbd3e478f5660ce972d0faa9bec1">cx_bn_mod_pow</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const uint8_t *e, uint32_t e_len, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:a8d74dbd3e478f5660ce972d0faa9bec1"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular exponentiation <b>r = a^e mod n</b>.  <a href="#a8d74dbd3e478f5660ce972d0faa9bec1">More...</a><br /></td></tr>
<tr class="memitem:aa47de169921a3034468d796720f35dbc"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#aa47de169921a3034468d796720f35dbc">cx_bn_mod_pow2</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const uint8_t *e, uint32_t e_len, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:aa47de169921a3034468d796720f35dbc"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular exponentiation <b>r = a^e mod n</b>.  <a href="#aa47de169921a3034468d796720f35dbc">More...</a><br /></td></tr>
<tr class="memitem:abfff1f779b7a85df5e93ea5e6b748db7"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#abfff1f779b7a85df5e93ea5e6b748db7">cx_bn_mod_invert_nprime</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:abfff1f779b7a85df5e93ea5e6b748db7"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes the modular inverse <b>r = a^(-1) mod n</b>, for a prime <b>n</b>.  <a href="#abfff1f779b7a85df5e93ea5e6b748db7">More...</a><br /></td></tr>
<tr class="memitem:abe79dfbbe52e582d63a46af9c07309f1"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#abe79dfbbe52e582d63a46af9c07309f1">cx_bn_mod_u32_invert</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, uint32_t a, <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:abe79dfbbe52e582d63a46af9c07309f1"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes the modular inverse <b>r = a^(-1) mod n</b>, of a 32-bit value.  <a href="#abe79dfbbe52e582d63a46af9c07309f1">More...</a><br /></td></tr>
<tr class="memitem:ac9fd3bf92a0400b939021a9f39ba8f2e"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ac9fd3bf92a0400b939021a9f39ba8f2e">cx_mont_alloc</a> (<a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx, size_t length)</td></tr>
<tr class="memdesc:ac9fd3bf92a0400b939021a9f39ba8f2e"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Allocates memory for the Montgomery context.  <a href="#ac9fd3bf92a0400b939021a9f39ba8f2e">More...</a><br /></td></tr>
<tr class="memitem:a806d52bead2e69770baae7f6f76e0bbf"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a806d52bead2e69770baae7f6f76e0bbf">cx_mont_init</a> (<a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:a806d52bead2e69770baae7f6f76e0bbf"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a Montgomery context with the modulus.  <a href="#a806d52bead2e69770baae7f6f76e0bbf">More...</a><br /></td></tr>
<tr class="memitem:a456479d69047db9f4f2a45d403388da1"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a456479d69047db9f4f2a45d403388da1">cx_mont_init2</a> (<a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> h)</td></tr>
<tr class="memdesc:a456479d69047db9f4f2a45d403388da1"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a Montgomery context with the modulus and the second Montgomery constant.  <a href="#a456479d69047db9f4f2a45d403388da1">More...</a><br /></td></tr>
<tr class="memitem:a7f3d5e171e1c62578ddb473734196443"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a7f3d5e171e1c62578ddb473734196443">cx_mont_to_montgomery</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> z, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:a7f3d5e171e1c62578ddb473734196443"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes the Montgomery representation of a BN value.  <a href="#a7f3d5e171e1c62578ddb473734196443">More...</a><br /></td></tr>
<tr class="memitem:a35f1f172db33387a35673e25229f9e3a"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a35f1f172db33387a35673e25229f9e3a">cx_mont_from_montgomery</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> z, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> x, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:a35f1f172db33387a35673e25229f9e3a"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes the normal representation of a BN value given a Montgomery representation.  <a href="#a35f1f172db33387a35673e25229f9e3a">More...</a><br /></td></tr>
<tr class="memitem:a23d71f727a1bdaa942d87f27f1223164"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a23d71f727a1bdaa942d87f27f1223164">cx_mont_mul</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> b, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:a23d71f727a1bdaa942d87f27f1223164"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a Montgomery multiplication.  <a href="#a23d71f727a1bdaa942d87f27f1223164">More...</a><br /></td></tr>
<tr class="memitem:a1e1a99cfff22700f3f0a03c5bd01652a"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a1e1a99cfff22700f3f0a03c5bd01652a">cx_mont_pow</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const uint8_t *e, uint32_t e_len, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:a1e1a99cfff22700f3f0a03c5bd01652a"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular exponentiation <b>r = a^e mod n</b>.  <a href="#a1e1a99cfff22700f3f0a03c5bd01652a">More...</a><br /></td></tr>
<tr class="memitem:ae05617d9cb1711b9a26664f371950a99"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ae05617d9cb1711b9a26664f371950a99">cx_mont_pow_bn</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> e, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:ae05617d9cb1711b9a26664f371950a99"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Performs a modular exponentiation <b>r = a^e mod n</b>.  <a href="#ae05617d9cb1711b9a26664f371950a99">More...</a><br /></td></tr>
<tr class="memitem:a56e8e57ee180b7fb6af72a8e08855eb7"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a56e8e57ee180b7fb6af72a8e08855eb7">cx_mont_invert_nprime</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> a, const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *ctx)</td></tr>
<tr class="memdesc:a56e8e57ee180b7fb6af72a8e08855eb7"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes the modular inverse <b>r = a^(-1) mod n</b> for a prime number <b>n</b>.  <a href="#a56e8e57ee180b7fb6af72a8e08855eb7">More...</a><br /></td></tr>
<tr class="memitem:a82c8a652e35c9040a7be456959a8fac2"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#a82c8a652e35c9040a7be456959a8fac2">cx_bn_is_prime</a> (const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n, bool *prime)</td></tr>
<tr class="memdesc:a82c8a652e35c9040a7be456959a8fac2"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Tests whether a BN value is a probable prime.  <a href="#a82c8a652e35c9040a7be456959a8fac2">More...</a><br /></td></tr>
<tr class="memitem:adb0a12ebd2ff9e822a990c00586861bd"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#adb0a12ebd2ff9e822a990c00586861bd">cx_bn_next_prime</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:adb0a12ebd2ff9e822a990c00586861bd"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Gets the first prime number after a given BN value.  <a href="#adb0a12ebd2ff9e822a990c00586861bd">More...</a><br /></td></tr>
<tr class="memitem:ab838e5ee98111bac2cb87f6e51604691"><td class="memItemLeft" align="right" valign="top">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../ox__bn_8h#ab838e5ee98111bac2cb87f6e51604691">cx_bn_rng</a> (<a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> r, const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> n)</td></tr>
<tr class="memdesc:ab838e5ee98111bac2cb87f6e51604691"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Generates a random number <b>r</b> in the range ]0,n[.  <a href="#ab838e5ee98111bac2cb87f6e51604691">More...</a><br /></td></tr>
</table>
<a name="details" id="details"></a>

## Detailed Description

<div class="textblock"><p>Big Number syscalls. </p>
<p>This file contains the big numbers definitions and functions:</p><ul>
<li>Lock the memory for further computations</li>
<li>Unlock the memory at the end of the operations</li>
<li>Arithmetic on big numbers </li>
</ul>
</div><h2 class="groupheader">Macro Definition Documentation</h2>
<a id="a8e4037d905d5c7cdae69259dabf0afe9"></a>
<h2 class="memtitle">CX_BN_WORD_ALIGNEMENT</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define CX_BN_WORD_ALIGNEMENT&#160;&#160;&#160;16</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Minimal word size in bytes. </p>
<p>A BN size shall be a multiple of this. </p>

</div>
</div>
<h2 class="groupheader">Typedef Documentation</h2>
<a id="a3caccc9ce9a31d3cba31ce1de1194d12"></a>
<h2 class="memtitle">cx_bn_t</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef uint32_t <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Index of a big number. </p>

</div>
</div>
<h2 class="groupheader">Function Documentation</h2>
<a id="a7e91d3fc7ab84ef9bd478fd6c55f9e2c"></a>
<h2 class="memtitle">cx_bn_add()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_add </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs an addition <b>r = a + b</b>. </p>
<p><b>r</b>, <b>a</b> and <b>b</b> shall have the same BN size.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK or CX_CARRY on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a178aa2a046e9ca47fb6b15635308f32e"></a>
<h2 class="memtitle">cx_bn_alloc()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_alloc </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>nbytes</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Allocates memory for a new BN. </p>
<p>The specified number of bytes is the minimal required bytes, the number of words allocated will be automatically a multiple of the configured word size. At this moment the BN value is set to 0.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">Pointer to a BN.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">nbytes</td><td colspan="4">Number of bytes of x.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_MEMORY_FULL</li>
<li>CX_BN_INVALID_PARAMETER_SIZE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aa7fc424d92176eebb7256da23bb52dc5"></a>
<h2 class="memtitle">cx_bn_alloc_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_alloc_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>nbytes</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>value</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>value_nbytes</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Allocates memory for a new BN and initializes it with the specified value. </p>
<p>The specified number of bytes is the minimal required bytes, the number of words allocated will be automatically a multiple of the configured word size.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">Pointer to a BN.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">nbytes</td><td colspan="4">Number of bytes of x.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">value</td><td colspan="4">Pointer to the value used to initialize the BN.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">value_nbytes</td><td colspan="4">Number of bytes of value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_MEMORY_FULL</li>
<li>CX_BN_INVALID_PARAMETER_SIZE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a062230d9ffbd699afb628e16edf28ec2"></a>
<h2 class="memtitle">cx_bn_and()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_and </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs the bitwise 'AND' of two BN values. </p>
<p><b>r</b> must be distinct from <b>a</b> and <b>b</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a03120fe7c557cd31948b1130ce3a0f9b"></a>
<h2 class="memtitle">cx_bn_clr_bit()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_clr_bit </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>pos</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Clears the bit value at the specified index. </p>
<p>The BN value is in big endian order, thus the position 0 corresponds to the least significant bit.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">pos</td><td colspan="4">Position of the bit.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aed53c1ee80adfd33c7b31433760eda40"></a>
<h2 class="memtitle">cx_bn_cmp()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_cmp </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">int *&#160;</td>
          <td class="paramname"><b>diff</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Compares two BN values. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index to the first value to be compared.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index to the second value to be compared.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">diff</td><td colspan="4">Result of the comparison:<ul>
<li>0 if the numbers are equal.</li>
<li>&gt; 0 if the first number is greater than the second</li>
<li>&lt; 0 if the first number is smaller than the second</li>
</ul>
</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a2f19bd9f238faff1cb863a899d83f1af"></a>
<h2 class="memtitle">cx_bn_cmp_u32()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_cmp_u32 </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">int *&#160;</td>
          <td class="paramname"><b>diff</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Compares a BN value with an unsigned integer. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index to the value to be compared.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">Integer to be compared.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">diff</td><td colspan="4">Result of the comparison:<ul>
<li>0 if the numbers are equal.</li>
<li>&gt; 0 if the BN value is greater</li>
<li>&lt; 0 if the BN value is smaller</li>
</ul>
</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a836e397b38a29c46b19a5cd8a38f920f"></a>
<h2 class="memtitle">cx_bn_cnt_bits()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_cnt_bits </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t *&#160;</td>
          <td class="paramname"><b>nbits</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Counts the number of bits set to 1 of the BN value. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">nbits</td><td colspan="4">Number of bits set.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aac623653ae81c2a17d943ed0d2b6bf35"></a>
<h2 class="memtitle">cx_bn_copy()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_copy </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Copies the BN value. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">a</td><td colspan="4">BN destination index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN source index.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER_SIZE</li>
<li>CX_BN_INVALID_PARAMETER_VALUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a9c569df5d9c8d7e20b67c40e89a34063"></a>
<h2 class="memtitle">cx_bn_destroy()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_destroy </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a> *&#160;</td>
          <td class="paramname"><b>x</b></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Releases a BN and gives back its attached memory to the system. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN to release. If NULL, nothing is done.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER_SIZE</li>
<li>CX_BN_INVALID_PARAMETER_VALUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="afae29eeacb4da26d2f50390378ce178b"></a>
<h2 class="memtitle">cx_bn_export()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_export </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>bytes</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>nbytes</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Stores (serializes) a BN value as unsigned raw bytes in big-endian order. </p>
<p>Only the least significant <b>nbytes</b> bytes of the BN are serialized If <b>nbytes</b> is greater than the BN size, <b>x</b> is serialized right aligned and zero left-padded.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">bytes</td><td colspan="4">Buffer where to store the serialized number.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">nbytes</td><td colspan="4">Number of bytes to store into the buffer.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER_SIZE</li>
<li>CX_BN_INVALID_PARAMETER_VALUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a06a1eda83aae776ec9791d689ba16d6a"></a>
<h2 class="memtitle">cx_bn_get_u32()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_get_u32 </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t *&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the 32-bit value corresponding to a BN. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">n</td><td colspan="4">Stored 32-bit unsigned value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ae7b9707a52805901b5a0a197f996f418"></a>
<h2 class="memtitle">cx_bn_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>value</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>value_nbytes</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Iinitializes a BN with an unsigned value. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">value</td><td colspan="4">Pointer to the value in big-endian order.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">value_nbytes</td><td colspan="4">Number of bytes of the value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER_SIZE</li>
<li>CX_BN_INVALID_PARAMETER_VALUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aa519cefbabb81d6a859741c572c9c84e"></a>
<h2 class="memtitle">cx_bn_is_locked()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL bool cx_bn_is_locked </td>
          <td>(</td>
          <td class="paramtype">void&#160;</td>
          <td class="paramname"></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Checks whether the BN processor is currently locked. </p>
<p>The memory can be used only if the BN processor is locked.</p>
<dl class="section return"><dt>Returns</dt><dd>1 if locked, 0 otherwise. </dd></dl>

</div>
</div>
<a id="a965f622e64eb56ec9e57c0ccad0a949f"></a>
<h2 class="memtitle">cx_bn_is_odd()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_is_odd </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">bool *&#160;</td>
          <td class="paramname"><b>odd</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Tests whether a BN value is odd. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">odd</td><td colspan="4">Boolean which indicates the parity of the BN value:<ul>
<li>1 if odd</li>
<li>0 if even</li>
</ul>
</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a82c8a652e35c9040a7be456959a8fac2"></a>
<h2 class="memtitle">cx_bn_is_prime()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_is_prime </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">bool *&#160;</td>
          <td class="paramname"><b>prime</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Tests whether a BN value is a probable prime. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the value.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">prime</td><td colspan="4">Boolean which indicates whether the number is a prime:<ul>
<li>1 if it is a prime</li>
<li>0 otherwise</li>
</ul>
</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a6d3a8100c6eb2e07df393cf228640a6b"></a>
<h2 class="memtitle">cx_bn_lock()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_lock </td>
          <td>(</td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>word_nbytes</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>flags</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Locks the BN processor. </p>
<p>The memory is reset then the word size is set. Once locked the memory can be used.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">word_nbytes</td><td colspan="4">Word size in byte, the size of the parameters will be a multiple of <b>word_nbytes</b>. This size must be a multiple of CX_BN_WORD_ALIGNEMENT. </td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">flags</td><td colspan="4">Flags.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_LOCKED if already locked. </li>
</ul>
</dd></dl>

</div>
</div>
<a id="afc9a4e2e538d9fa3b59762a9b4c74a13"></a>
<h2 class="memtitle">cx_bn_locked()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_locked </td>
          <td>(</td>
          <td class="paramtype">void&#160;</td>
          <td class="paramname"></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Ascertains whether the BN processor is currently locked. </p>
<p>If the BN processor is not locked the memory cannot be used.</p>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a5be0853e346986506d1320184d9563f4"></a>
<h2 class="memtitle">cx_bn_mod_add()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_add </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular addition <b>r = a + b mod n</b>. </p>
<p><b>r</b>, <b>a</b>, <b>b</b> and <b>n</b> shall have the same BN size. The values of <b>a</b> and <b>b</b> must be strictly smaller than modulus value.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="abfff1f779b7a85df5e93ea5e6b748db7"></a>
<h2 class="memtitle">cx_bn_mod_invert_nprime()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_invert_nprime </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes the modular inverse <b>r = a^(-1) mod n</b>, for a prime <b>n</b>. </p>
<p><b>r</b>, <b>a</b> and <b>n</b> shall have the same BN size. <b>n</b> must be prime.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the value to be inverted.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a99d12c1f9ee47c76f6f071d766bd305f"></a>
<h2 class="memtitle">cx_bn_mod_mul()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_mul </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular multiplication <b>r = a * b mod n</b>. </p>
<p><b>r</b>, <b>a</b>, <b>b</b> and <b>n</b> shall have the same BN size. The value of b must be strictly smaller than modulus value.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_INVALID_PARAMETER_VALUE</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a8d74dbd3e478f5660ce972d0faa9bec1"></a>
<h2 class="memtitle">cx_bn_mod_pow()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_pow </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>e</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>e_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular exponentiation <b>r = a^e mod n</b>. </p>
<p><b>r</b>, <b>a</b> and <b>n</b> shall have the same BN size. <b>r</b>, <b>a</b> and <b>n</b> must be different.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the base of the exponentiation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e</td><td colspan="4">Pointer to the exponent.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e_len</td><td colspan="4">Length of the exponent buffer.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aa47de169921a3034468d796720f35dbc"></a>
<h2 class="memtitle">cx_bn_mod_pow2()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_pow2 </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>e</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>e_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular exponentiation <b>r = a^e mod n</b>. </p>
<p>This fonction reuses the parameter <b>a</b> for intermediate computations, hence requires less memory. <b>r</b>, <b>a</b> and <b>n</b> shall have the same BN size. <b>r</b>, <b>a</b> and <b>n</b> must be different.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the base of the exponentiation. The BN value is modified during the computations.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e</td><td colspan="4">Pointer to the exponent.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e_len</td><td colspan="4">Length of the exponent buffer.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a6b30b34ab43f02228d57fcf9727d3afc"></a>
<h2 class="memtitle">cx_bn_mod_pow_bn()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_pow_bn </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>e</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular exponentiation <b>r = a^e mod n</b>. </p>
<p><b>r</b>, <b>a</b> and <b>n</b> shall have the same BN size. <b>r</b>, <b>a</b> and <b>n</b> must be different.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the base of the exponentiation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e</td><td colspan="4">BN index of the exponent.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ae35f88dfde67d9c20e733d144a19bb94"></a>
<h2 class="memtitle">cx_bn_mod_sqrt()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_sqrt </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>sign</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes <b>r</b> such that <b>r² = a mod n</b> if <b>a</b> is a quadratic residue. </p>
<p>This returns an error if the given number is not a quadratic residue. <b>r</b>, <b>a</b> and <b>n</b> shall have the same BN size.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the quadratic residue or quadratic non residue.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">sign</td><td colspan="4">Sign of the result.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL</li>
<li>CX_NO_RESIDUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ade4b28da6dddfd6e4f78acdaba9566eb"></a>
<h2 class="memtitle">cx_bn_mod_sub()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_sub </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular subtraction <b>r = a - b mod n</b>. </p>
<p><b>r</b>, <b>a</b>, <b>b</b> and <b>n</b> shall have the same BN size. The values of <b>a</b> and <b>b</b> must be strictly smaller than modulus value.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="abe79dfbbe52e582d63a46af9c07309f1"></a>
<h2 class="memtitle">cx_bn_mod_u32_invert()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mod_u32_invert </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes the modular inverse <b>r = a^(-1) mod n</b>, of a 32-bit value. </p>
<p><b>r</b> and <b>n</b> shall have the same BN size. The parameter <b>n</b> is detroyed and contains zero after the function returns.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">32-bit value to be inverted.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL</li>
<li>CX_INTERNAL_ERROR</li>
<li>CX_NOT_INVERTIBLE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a6f65a9cd681a1c232a130f5eda6ac543"></a>
<h2 class="memtitle">cx_bn_mul()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_mul </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a multiplication <b>r = a * b</b>. </p>
<p><b>a</b> and <b>b</b> shall have the same BN size. The size of <b>r</b> must be the size of <b>a</b></p><ul>
<li>the size of <b>b</b>.</li>
</ul>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a1c585a11ef51dd20e1a40ffae9b75b67"></a>
<h2 class="memtitle">cx_bn_nbytes()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_nbytes </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t *&#160;</td>
          <td class="paramname"><b>nbytes</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the size in bytes of a BN. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">nbytes</td><td colspan="4">Returned number of bytes.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="adb0a12ebd2ff9e822a990c00586861bd"></a>
<h2 class="memtitle">cx_bn_next_prime()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_next_prime </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the first prime number after a given BN value. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in,out]</td><td class="paramname">n</td><td colspan="4">BN index of the value and the result.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL</li>
<li>CX_OVERFLOW </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a891eefd285653d985ca058b632bcec0e"></a>
<h2 class="memtitle">cx_bn_or()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_or </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs the bitwise 'OR' of two BN values. </p>
<p><b>r</b> must be distinct from <b>a</b> and <b>b</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a36b5bc930e7c58fee9688a183ffdbd22"></a>
<h2 class="memtitle">cx_bn_rand()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_rand </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Generates a random number and stores it in the given index. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_INVALID_PARAMETER_VALUE </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ac04ef099548e399df84d972cdf83f99a"></a>
<h2 class="memtitle">cx_bn_reduce()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_reduce </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>d</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a reduction <b>r = d mod n</b>. </p>
<p><b>r</b> and <b>n</b> shall have the same BN size.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">d</td><td colspan="4">BN index of the value to be reduced.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ab838e5ee98111bac2cb87f6e51604691"></a>
<h2 class="memtitle">cx_bn_rng()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_rng </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Generates a random number <b>r</b> in the range ]0,n[. </p>
<p><b>r</b> is such that: <b>0 &lt; r &lt; n</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the upper bound.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a211dea54f2f29b22d8c8668fd8482383"></a>
<h2 class="memtitle">cx_bn_set_bit()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_set_bit </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>pos</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the bit value at the specified index. </p>
<p>The BN value is in big endian order, thus the position 0 corresponds to the least significant bit.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">pos</td><td colspan="4">Position of the bit.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="aa9172ace5089aee1871025d35f78ada6"></a>
<h2 class="memtitle">cx_bn_set_u32()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_set_u32 </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the value of a BN with a 32-bit unsigned value. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">32-bit value to be assigned.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a5f5244f83e44137a249118b6a4df1f49"></a>
<h2 class="memtitle">cx_bn_shl()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_shl </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a left shift. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">Number of bits to shift.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ad2b31165841f721be8bd6881d253ecfe"></a>
<h2 class="memtitle">cx_bn_shr()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_shr </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a right shift. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">Number of bits to shift.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="af075c2ab25f971f283bfed15d62b840c"></a>
<h2 class="memtitle">cx_bn_sub()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_sub </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a subtraction <b>r = a - b</b>. </p>
<p><b>r</b>, <b>a</b> and <b>b</b> shall have the same BN size.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK or CX_CARRY on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ab83c53f05e072f3adac9f0765c67317d"></a>
<h2 class="memtitle">cx_bn_tst_bit()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_tst_bit </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>pos</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">bool *&#160;</td>
          <td class="paramname"><b>set</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Tests the bit value at the specified index. </p>
<p>The BN value is in big endian order, thus the position 0 corresponds to the least significant bit.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">x</td><td colspan="4">BN index.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">pos</td><td colspan="4">Position of the bit.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">set</td><td colspan="4">Boolean which indicates the bit value<ul>
<li>1 if the bit is set</li>
<li>0 otherwise</li>
</ul>
</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a957cdbd9bc99c18a5689366c59ff97c0"></a>
<h2 class="memtitle">cx_bn_unlock()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL uint32_t cx_bn_unlock </td>
          <td>(</td>
          <td class="paramtype">void&#160;</td>
          <td class="paramname"></td><td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Releases the BN lock. </p>
<p>It erases all content data. Once unlocked the memory cannot be used anymore.</p>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_BN_NOT_LOCKED if not locked </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a1a0474ec79ec7495acd683886ac2ba58"></a>
<h2 class="memtitle">cx_bn_xor()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_bn_xor </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs the bitwise 'exclusive-OR' of two BN values. </p>
<p><b>r</b> must be distinct from <b>a</b> and <b>b</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ac9fd3bf92a0400b939021a9f39ba8f2e"></a>
<h2 class="memtitle">cx_mont_alloc()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_alloc </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>length</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Allocates memory for the Montgomery context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">length</td><td colspan="4">BN size for the context fields.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a35f1f172db33387a35673e25229f9e3a"></a>
<h2 class="memtitle">cx_mont_from_montgomery()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_from_montgomery </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>z</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes the normal representation of a BN value given a Montgomery representation. </p>
<p>The context must be initialized.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">x</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">z</td><td colspan="4">BN index of the value to be converted. The value should be in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a806d52bead2e69770baae7f6f76e0bbf"></a>
<h2 class="memtitle">cx_mont_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a Montgomery context with the modulus. </p>
<p>Calculate and set up the second Montgomery constant.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to a Montgomery context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a456479d69047db9f4f2a45d403388da1"></a>
<h2 class="memtitle">cx_mont_init2()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_init2 </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>n</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>h</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a Montgomery context with the modulus and the second Montgomery constant. </p>
<p>Set up the second Montgomery constant with the given parameter. The caller should make sure that the given second Montgomery constant is correct.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to a Montgomery context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">n</td><td colspan="4">BN index of the modulus.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">h</td><td colspan="4">BN index of the pre calculated second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a56e8e57ee180b7fb6af72a8e08855eb7"></a>
<h2 class="memtitle">cx_mont_invert_nprime()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_invert_nprime </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes the modular inverse <b>r = a^(-1) mod n</b> for a prime number <b>n</b>. </p>
<p>The context must be initialized.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result. The result is in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the value to be inverted. The value is in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a23d71f727a1bdaa942d87f27f1223164"></a>
<h2 class="memtitle">cx_mont_mul()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_mul </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>b</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a Montgomery multiplication. </p>
<p>The context must be initialized.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the first operand in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">b</td><td colspan="4">BN index of the second operand in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a1e1a99cfff22700f3f0a03c5bd01652a"></a>
<h2 class="memtitle">cx_mont_pow()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_pow </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>e</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>e_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular exponentiation <b>r = a^e mod n</b>. </p>
<p>The context must be initialized. The BN value <b>a</b> is in Montgomery representation.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result. The result is in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the exponentiation base in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e</td><td colspan="4">Pointer to the exponent.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e_len</td><td colspan="4">Length of the exponent in bytes.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ae05617d9cb1711b9a26664f371950a99"></a>
<h2 class="memtitle">cx_mont_pow_bn()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_pow_bn </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>r</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>a</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>e</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Performs a modular exponentiation <b>r = a^e mod n</b>. </p>
<p>The context must be initialized. The BN value <b>a</b> is in Montgomery representation.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">r</td><td colspan="4">BN index for the result. The result is in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">a</td><td colspan="4">BN index of the exponentiation base in Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">e</td><td colspan="4">BN index of the exponent.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a7f3d5e171e1c62578ddb473734196443"></a>
<h2 class="memtitle">cx_mont_to_montgomery()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">SYSCALL <a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_mont_to_montgomery </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>x</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../ox__bn_8h#a3caccc9ce9a31d3cba31ce1de1194d12">cx_bn_t</a>&#160;</td>
          <td class="paramname"><b>z</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const <a class="el" href="../cx__bn__mont__ctx__t">cx_bn_mont_ctx_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes the Montgomery representation of a BN value. </p>
<p>The context must be initialized.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">x</td><td colspan="4">BN index for the result.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">z</td><td colspan="4">BN index of the value to convert into Montgomery representation.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the Montgomery context, initialized with the modulus and the second Montgomery constant.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_NOT_LOCKED</li>
<li>CX_INVALID_PARAMETER</li>
<li>CX_MEMORY_FULL </li>
</ul>
</dd></dl>

</div>
</div>
<button class="uk-button uk-button-default uk-button-small uk-margin-medium-top" onclick="history.back()">Previous</button>
<a class="uk-button uk-button-default uk-button-small uk-margin-medium-top crypto-button" href="../../crypto-api/files">Back to the files list</a>
