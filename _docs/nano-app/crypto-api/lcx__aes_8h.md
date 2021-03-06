---
title: lcx_aes.h
subtitle:
tags: []
category: CryptographyAPI
toc:
layout: doc
---

<button class="uk-button uk-button-default uk-button-small uk-margin-medium-top" onclick="history.back()">Previous</button>
<a class="uk-button uk-button-default uk-button-small uk-margin-medium-top crypto-button" href="../../crypto-api/files">Back to the files list</a>


<p>AES (Advanced Encryption Standard).  
<a href="#details">More...</a></p>
<table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="func-members"></a>
Functions</h2></td></tr>
<tr class="memitem:a159ceb54e8b22a467a4f643474f85356"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356">cx_aes_init_key_no_throw</a> (const uint8_t *rawkey, size_t key_len, <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key)</td></tr>
<tr class="memdesc:a159ceb54e8b22a467a4f643474f85356"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes an AES Key.  <a href="#a159ceb54e8b22a467a4f643474f85356">More...</a><br /></td></tr>
<tr class="memitem:ab360df96c653641f7d1fc30a0c7d7cd6"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#ab360df96c653641f7d1fc30a0c7d7cd6">cx_aes_init_key</a> (const unsigned char *rawkey, unsigned int key_len, <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key)</td></tr>
<tr class="memdesc:ab360df96c653641f7d1fc30a0c7d7cd6"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes an AES Key.  <a href="#ab360df96c653641f7d1fc30a0c7d7cd6">More...</a><br /></td></tr>
<tr class="memitem:a43d55289801fc0491b669fee92a0604f"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#a43d55289801fc0491b669fee92a0604f">cx_aes_iv_no_throw</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, uint32_t mode, const uint8_t *iv, size_t iv_len, const uint8_t *in, size_t in_len, uint8_t *out, size_t *out_len)</td></tr>
<tr class="memdesc:a43d55289801fc0491b669fee92a0604f"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Encrypts, decrypts, signs or verifies data with AES algorithm.  <a href="#a43d55289801fc0491b669fee92a0604f">More...</a><br /></td></tr>
<tr class="memitem:ac6ada32dc75900ea7a2bbd707e2194b5"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#ac6ada32dc75900ea7a2bbd707e2194b5">cx_aes_iv</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, int mode, unsigned char *iv, unsigned int iv_len, const unsigned char *in, unsigned int in_len, unsigned char *out, unsigned int out_len)</td></tr>
<tr class="memdesc:ac6ada32dc75900ea7a2bbd707e2194b5"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Encrypts, decrypts, signs or verifies data with AES algorithm.  <a href="#ac6ada32dc75900ea7a2bbd707e2194b5">More...</a><br /></td></tr>
<tr class="memitem:ac5fc63ae567c1ff8fde82003dbf4c968"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#ac5fc63ae567c1ff8fde82003dbf4c968">cx_aes_no_throw</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, uint32_t mode, const uint8_t *in, size_t in_len, uint8_t *out, size_t *out_len)</td></tr>
<tr class="memdesc:ac5fc63ae567c1ff8fde82003dbf4c968"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Encrypts, decrypts, signs or verifies data with AES algorithm.  <a href="#ac5fc63ae567c1ff8fde82003dbf4c968">More...</a><br /></td></tr>
<tr class="memitem:a3e09a5d34cec17fa31a9e8bb256c082b"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#a3e09a5d34cec17fa31a9e8bb256c082b">cx_aes</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, int mode, const unsigned char *in, unsigned int in_len, unsigned char *out, unsigned int out_len)</td></tr>
<tr class="memdesc:a3e09a5d34cec17fa31a9e8bb256c082b"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Encrypts, decrypts, signs or verifies data with AES algorithm.  <a href="#a3e09a5d34cec17fa31a9e8bb256c082b">More...</a><br /></td></tr>
<tr class="memitem:a244526bca422d4916e4c243a2e83c146"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#a244526bca422d4916e4c243a2e83c146">cx_aes_enc_block</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, const uint8_t *inblock, uint8_t *outblock)</td></tr>
<tr class="memdesc:a244526bca422d4916e4c243a2e83c146"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Encrypts a 16-byte block using AES algorithm.  <a href="#a244526bca422d4916e4c243a2e83c146">More...</a><br /></td></tr>
<tr class="memitem:a0ff49f193d81b89b8ea429a4da5ca333"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__aes_8h#a0ff49f193d81b89b8ea429a4da5ca333">cx_aes_dec_block</a> (const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *key, const uint8_t *inblock, uint8_t *outblock)</td></tr>
<tr class="memdesc:a0ff49f193d81b89b8ea429a4da5ca333"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Decrypts a 16-byte block using AES algorithm.  <a href="#a0ff49f193d81b89b8ea429a4da5ca333">More...</a><br /></td></tr>
</table>
<a name="details" id="details"></a>

## Detailed Description

<div class="textblock"><p>AES (Advanced Encryption Standard). </p>
<p>AES is an encryption standard based on Rijndael algorithm, a symmetric block cipher that can process data blocks of 128 bits. The key length is either 128, 192 or 256 bits.</p>
<p>Refer to <a href="https://csrc.nist.gov/publications/detail/fips/197/final">FIPS 197 </a> for more details. </p>
</div><h2 class="groupheader">Function Documentation</h2>
<a id="a3e09a5d34cec17fa31a9e8bb256c082b"></a>
<h2 class="memtitle">cx_aes()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_aes </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><b>mode</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>in_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned char *&#160;</td>
          <td class="paramname"><b>out</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>out_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Encrypts, decrypts, signs or verifies data with AES algorithm. </p>
<p>Same as <a class="el" href="../lcx__aes_8h#a43d55289801fc0491b669fee92a0604f" title="Encrypts, decrypts, signs or verifies data with AES algorithm. ">cx_aes_iv_no_throw</a> with initial IV assumed to be sixteen zeros. This function throws an exception if the computation doesn't succeed.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__aes_8h#ac5fc63ae567c1ff8fde82003dbf4c968" title="Encrypts, decrypts, signs or verifies data with AES algorithm. ">cx_aes_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the key initialized with <a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356" title="Initializes an AES Key. ">cx_aes_init_key_no_throw</a>.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_ENCRYPT</li>
<li>CX_DECRYPT</li>
<li>CX_SIGN</li>
<li>CX_VERIFY</li>
<li>CX_PAD_NONE</li>
<li>CX_PAD_ISO9797M1</li>
<li>CX_PAD_ISO9797M2</li>
<li>CX_CHAIN_ECB</li>
<li>CX_CHAIN_CBC</li>
<li>CX_CHAIN_CTR</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in_len</td><td colspan="4">Length of the input data. If CX_LAST is set, padding is automatically done according to the <b>mode</b>. Otherwise, <b>in_len</b> shall be a multiple of AES_BLOCK_SIZE.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">out</td><td colspan="4">Output data according to the mode:<ul>
<li>encrypted/decrypted output data</li>
<li>generated signature</li>
<li>signature to be verified</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">out_len</td><td colspan="4">Length of the output data.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Length of the output.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
    <tr><td class="paramname">INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a0ff49f193d81b89b8ea429a4da5ca333"></a>
<h2 class="memtitle">cx_aes_dec_block()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_aes_dec_block </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>inblock</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>outblock</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Decrypts a 16-byte block using AES algorithm. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the AES key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">inblock</td><td colspan="4">Ciphertext block to decrypt.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">outblock</td><td colspan="4">Plaintext block.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK</li>
<li>CX_INVALID_PARAMETER</li>
<li>INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a244526bca422d4916e4c243a2e83c146"></a>
<h2 class="memtitle">cx_aes_enc_block()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_aes_enc_block </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>inblock</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>outblock</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Encrypts a 16-byte block using AES algorithm. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the AES key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">inblock</td><td colspan="4">Plaintext block to encrypt.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">outblock</td><td colspan="4">Ciphertext block.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK</li>
<li>CX_INVALID_PARAMETER</li>
<li>INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ab360df96c653641f7d1fc30a0c7d7cd6"></a>
<h2 class="memtitle">cx_aes_init_key()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_aes_init_key </td>
          <td>(</td>
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>rawkey</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype"><a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Initializes an AES Key. </p>
<p>Once initialized, the key can be stored in non-volatile memory and directly used for any AES processing. This function throws an exception if the initialization fails.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356" title="Initializes an AES Key. ">cx_aes_init_key_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">rawkey</td><td colspan="4">Pointer to the supplied key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key: 16, 24 or 32 octets.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">key</td><td colspan="4">Pointer to the key structure. This must not be NULL.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Length of the key.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a159ceb54e8b22a467a4f643474f85356"></a>
<h2 class="memtitle">cx_aes_init_key_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_aes_init_key_no_throw </td>
          <td>(</td>
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>rawkey</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype"><a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes an AES Key. </p>
<p>Once initialized, the key can be stored in non-volatile memory and directly used for any AES processing.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">rawkey</td><td colspan="4">Pointer to the supplied key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key: 16, 24 or 32 octets.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">key</td><td colspan="4">Pointer to the key structure. This must not be NULL.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ac6ada32dc75900ea7a2bbd707e2194b5"></a>
<h2 class="memtitle">cx_aes_iv()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_aes_iv </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><b>mode</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned char *&#160;</td>
          <td class="paramname"><b>iv</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>iv_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>in_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned char *&#160;</td>
          <td class="paramname"><b>out</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>out_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Encrypts, decrypts, signs or verifies data with AES algorithm. </p>
<p>This function throws an exception if the computation doesn't succeed.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__aes_8h#a43d55289801fc0491b669fee92a0604f" title="Encrypts, decrypts, signs or verifies data with AES algorithm. ">cx_aes_iv_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the key initialized with <a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356" title="Initializes an AES Key. ">cx_aes_init_key_no_throw</a>.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_ENCRYPT</li>
<li>CX_DECRYPT</li>
<li>CX_SIGN</li>
<li>CX_VERIFY</li>
<li>CX_PAD_NONE</li>
<li>CX_PAD_ISO9797M1</li>
<li>CX_PAD_ISO9797M2</li>
<li>CX_CHAIN_ECB</li>
<li>CX_CHAIN_CBC</li>
<li>CX_CHAIN_CTR</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">iv</td><td colspan="4">Initialization vector.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">iv_len</td><td colspan="4">Length of the initialization vector.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in_len</td><td colspan="4">Length of the input data. If CX_LAST is set, padding is automatically done according to the <b>mode</b>. Otherwise, <b>in_len</b> shall be a multiple of AES_BLOCK_SIZE.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">out</td><td colspan="4">Output data according to the mode:<ul>
<li>encrypted/decrypted output data</li>
<li>generated signature</li>
<li>signature to be verified</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">out_len</td><td colspan="4">Length of the output data.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Length of the output.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
    <tr><td class="paramname">INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a43d55289801fc0491b669fee92a0604f"></a>
<h2 class="memtitle">cx_aes_iv_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_aes_iv_no_throw </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>mode</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>iv</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>iv_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>in_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>out</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t *&#160;</td>
          <td class="paramname"><b>out_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Encrypts, decrypts, signs or verifies data with AES algorithm. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the key initialized with <a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356" title="Initializes an AES Key. ">cx_aes_init_key_no_throw</a>.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_ENCRYPT</li>
<li>CX_DECRYPT</li>
<li>CX_SIGN</li>
<li>CX_VERIFY</li>
<li>CX_PAD_NONE</li>
<li>CX_PAD_ISO9797M1</li>
<li>CX_PAD_ISO9797M2</li>
<li>CX_CHAIN_ECB</li>
<li>CX_CHAIN_CBC</li>
<li>CX_CHAIN_CTR</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">iv</td><td colspan="4">Initialization vector.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">iv_len</td><td colspan="4">Length of the initialization vector.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in_len</td><td colspan="4">Length of the input data. If CX_LAST is set, padding is automatically done according to the <b>mode</b>. Otherwise, <b>in_len</b> shall be a multiple of AES_BLOCK_SIZE.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">out</td><td colspan="4">Output data according to the mode:<ul>
<li>encrypted/decrypted output data</li>
<li>generated signature</li>
<li>signature to be verified</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">out_len</td><td colspan="4">Length of the output data.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_INVALID_PARAMETER</li>
<li>INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<a id="ac5fc63ae567c1ff8fde82003dbf4c968"></a>
<h2 class="memtitle">cx_aes_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_aes_no_throw </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="../ox__aes_8h#ab8b2f2ea9595e64bb23f47fa0785c22c">cx_aes_key_t</a> *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint32_t&#160;</td>
          <td class="paramname"><b>mode</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>in_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>out</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t *&#160;</td>
          <td class="paramname"><b>out_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Encrypts, decrypts, signs or verifies data with AES algorithm. </p>
<p>Same as <a class="el" href="../lcx__aes_8h#a43d55289801fc0491b669fee92a0604f" title="Encrypts, decrypts, signs or verifies data with AES algorithm. ">cx_aes_iv_no_throw</a> with initial IV assumed to be sixteen zeros.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the key initialized with <a class="el" href="../lcx__aes_8h#a159ceb54e8b22a467a4f643474f85356" title="Initializes an AES Key. ">cx_aes_init_key_no_throw</a>.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_ENCRYPT</li>
<li>CX_DECRYPT</li>
<li>CX_SIGN</li>
<li>CX_VERIFY</li>
<li>CX_PAD_NONE</li>
<li>CX_PAD_ISO9797M1</li>
<li>CX_PAD_ISO9797M2</li>
<li>CX_CHAIN_ECB</li>
<li>CX_CHAIN_CBC</li>
<li>CX_CHAIN_CTR</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in_len</td><td colspan="4">Length of the input data. If CX_LAST is set, padding is automatically done according to the <b>mode</b>. Otherwise, <b>in_len</b> shall be a multiple of AES_BLOCK_SIZE.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">out</td><td colspan="4">Output data according to the mode:<ul>
<li>encrypted/decrypted output data</li>
<li>generated signature</li>
<li>signature to be verified</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">out_len</td><td colspan="4">Length of the output data.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success</li>
<li>CX_INVALID_PARAMETER</li>
<li>INVALID_PARAMETER </li>
</ul>
</dd></dl>

</div>
</div>
<button class="uk-button uk-button-default uk-button-small uk-margin-medium-top" onclick="history.back()">Previous</button>
<a class="uk-button uk-button-default uk-button-small uk-margin-medium-top crypto-button" href="../../crypto-api/files">Back to the files list</a>
