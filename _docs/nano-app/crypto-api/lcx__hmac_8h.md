---
title: lcx_hmac.h
subtitle:
tags: []
category: CryptographyAPI
toc:
layout: doc
---

<button class="uk-button uk-button-default uk-button-small uk-margin-medium-top" onclick="history.back()">Previous</button>
<a class="uk-button uk-button-default uk-button-small uk-margin-medium-top crypto-button" href="../../crypto-api/files">Back to the files list</a>


<p>HMAC (Keyed-Hash Message Authentication Code)  
<a href="#details">More...</a></p>
<table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="nested-classes"></a>
Data Structures</h2></td></tr>
<tr class="memitem:"><td class="memItemLeft" align="right" valign="top">struct &#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../cx__hmac__t">cx_hmac_t</a></td></tr>
<tr class="memdesc:"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">HMAC context, abstract type.  <a href="../cx__hmac__t#details">More...</a><br /></td></tr>
<tr class="memitem:"><td class="memItemLeft" align="right" valign="top">struct &#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../cx__hmac__ripemd160__t">cx_hmac_ripemd160_t</a></td></tr>
<tr class="memdesc:"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">HMAC context, concrete type for RIPEMD160.  <a href="../cx__hmac__ripemd160__t#details">More...</a><br /></td></tr>
<tr class="memitem:"><td class="memItemLeft" align="right" valign="top">struct &#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a></td></tr>
<tr class="memdesc:"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">HMAC context, concrete type for SHA-224/SHA-256.  <a href="../cx__hmac__sha256__t#details">More...</a><br /></td></tr>
<tr class="memitem:"><td class="memItemLeft" align="right" valign="top">struct &#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a></td></tr>
<tr class="memdesc:"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">HMAC context, concrete type for SHA-384/SHA-512.  <a href="../cx__hmac__sha512__t#details">More...</a><br /></td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="4"><h2 class="groupheader"><a name="func-members"></a>
Functions</h2></td></tr>
<tr class="memitem:a655097348db511c8f8732c5f09f063ec"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a655097348db511c8f8732c5f09f063ec">cx_hmac_ripemd160_init_no_throw</a> (<a class="el" href="../cx__hmac__ripemd160__t">cx_hmac_ripemd160_t</a> *hmac, const uint8_t *key, size_t key_len)</td></tr>
<tr class="memdesc:a655097348db511c8f8732c5f09f063ec"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-RIPEMD160 context.  <a href="#a655097348db511c8f8732c5f09f063ec">More...</a><br /></td></tr>
<tr class="memitem:a607b5443b71e13baf822bd14cf3e900f"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a607b5443b71e13baf822bd14cf3e900f">cx_hmac_ripemd160_init</a> (<a class="el" href="../cx__hmac__ripemd160__t">cx_hmac_ripemd160_t</a> *hmac, const unsigned char *key, unsigned int key_len)</td></tr>
<tr class="memdesc:a607b5443b71e13baf822bd14cf3e900f"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-RIPEMD160 context.  <a href="#a607b5443b71e13baf822bd14cf3e900f">More...</a><br /></td></tr>
<tr class="memitem:a7f90af47a865e3d4bbe8f16ffac15d2d"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a7f90af47a865e3d4bbe8f16ffac15d2d">cx_hmac_sha224_init</a> (<a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *hmac, const uint8_t *key, unsigned int key_len)</td></tr>
<tr class="memdesc:a7f90af47a865e3d4bbe8f16ffac15d2d"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA224 context.  <a href="#a7f90af47a865e3d4bbe8f16ffac15d2d">More...</a><br /></td></tr>
<tr class="memitem:acb664a12291a2fe0e05588c45b7206cb"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#acb664a12291a2fe0e05588c45b7206cb">cx_hmac_sha256_init_no_throw</a> (<a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *hmac, const uint8_t *key, size_t key_len)</td></tr>
<tr class="memdesc:acb664a12291a2fe0e05588c45b7206cb"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA256 context.  <a href="#acb664a12291a2fe0e05588c45b7206cb">More...</a><br /></td></tr>
<tr class="memitem:a92fe5e51130696bcf38e458ae8b931ba"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a92fe5e51130696bcf38e458ae8b931ba">cx_hmac_sha256_init</a> (<a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *hmac, const unsigned char *key, unsigned int key_len)</td></tr>
<tr class="memdesc:a92fe5e51130696bcf38e458ae8b931ba"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA256 context.  <a href="#a92fe5e51130696bcf38e458ae8b931ba">More...</a><br /></td></tr>
<tr class="memitem:a280d26d38eeebad8555b0ce5a5facb27"><td class="memItemLeft" align="right" valign="top">size_t&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a280d26d38eeebad8555b0ce5a5facb27">cx_hmac_sha256</a> (const uint8_t *key, size_t key_len, const uint8_t *in, size_t len, uint8_t *mac, size_t mac_len)</td></tr>
<tr class="memdesc:a280d26d38eeebad8555b0ce5a5facb27"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes a HMAC value using SHA256.  <a href="#a280d26d38eeebad8555b0ce5a5facb27">More...</a><br /></td></tr>
<tr class="memitem:a47c555a072160c325e54c04f406ce2d6"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a47c555a072160c325e54c04f406ce2d6">cx_hmac_sha384_init</a> (<a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *hmac, const uint8_t *key, unsigned int key_len)</td></tr>
<tr class="memdesc:a47c555a072160c325e54c04f406ce2d6"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA384 context.  <a href="#a47c555a072160c325e54c04f406ce2d6">More...</a><br /></td></tr>
<tr class="memitem:a22bea8db8f917221b9ade35d9838b109"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a22bea8db8f917221b9ade35d9838b109">cx_hmac_sha512_init_no_throw</a> (<a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *hmac, const uint8_t *key, size_t key_len)</td></tr>
<tr class="memdesc:a22bea8db8f917221b9ade35d9838b109"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA512 context.  <a href="#a22bea8db8f917221b9ade35d9838b109">More...</a><br /></td></tr>
<tr class="memitem:a1366763eb58eab50def9aa26ebeb9a3e"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a1366763eb58eab50def9aa26ebeb9a3e">cx_hmac_sha512_init</a> (<a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *hmac, const unsigned char *key, unsigned int key_len)</td></tr>
<tr class="memdesc:a1366763eb58eab50def9aa26ebeb9a3e"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC-SHA512 context.  <a href="#a1366763eb58eab50def9aa26ebeb9a3e">More...</a><br /></td></tr>
<tr class="memitem:aae387607e11e005d1fe466a47ff22133"><td class="memItemLeft" align="right" valign="top">size_t&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#aae387607e11e005d1fe466a47ff22133">cx_hmac_sha512</a> (const uint8_t *key, size_t key_len, const uint8_t *in, size_t len, uint8_t *mac, size_t mac_len)</td></tr>
<tr class="memdesc:aae387607e11e005d1fe466a47ff22133"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes a HMAC value using SHA512.  <a href="#aae387607e11e005d1fe466a47ff22133">More...</a><br /></td></tr>
<tr class="memitem:ac17c793ef88b21ebf2914a698fa189b2"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#ac17c793ef88b21ebf2914a698fa189b2">cx_hmac_no_throw</a> (<a class="el" href="../cx__hmac__t">cx_hmac_t</a> *hmac, uint32_t mode, const uint8_t *in, size_t len, uint8_t *mac, size_t mac_len)</td></tr>
<tr class="memdesc:ac17c793ef88b21ebf2914a698fa189b2"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes a HMAC value according to the specified hash function.  <a href="#ac17c793ef88b21ebf2914a698fa189b2">More...</a><br /></td></tr>
<tr class="memitem:a59713fd754b21c5af7de282b7b03c824"><td class="memItemLeft" align="right" valign="top">static int&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a59713fd754b21c5af7de282b7b03c824">cx_hmac</a> (<a class="el" href="../cx__hmac__t">cx_hmac_t</a> *hmac, int mode, const unsigned char *in, unsigned int len, unsigned char *mac, unsigned int mac_len)</td></tr>
<tr class="memdesc:a59713fd754b21c5af7de282b7b03c824"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Computes a HMAC value according to the specified hash function.  <a href="#a59713fd754b21c5af7de282b7b03c824">More...</a><br /></td></tr>
<tr class="memitem:a4c0edf6c13ffd8f4eb0873b354edb700"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a4c0edf6c13ffd8f4eb0873b354edb700">cx_hmac_init</a> (<a class="el" href="../cx__hmac__t">cx_hmac_t</a> *hmac, <a class="el" href="../lcx__hash_8h#aac7f6b791a4df89ac2e67ee43d4021a2">cx_md_t</a> hash_id, const uint8_t *key, size_t key_len)</td></tr>
<tr class="memdesc:a4c0edf6c13ffd8f4eb0873b354edb700"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Initializes a HMAC context.  <a href="#a4c0edf6c13ffd8f4eb0873b354edb700">More...</a><br /></td></tr>
<tr class="memitem:a89bba951d06459552c9c2fdfdab08a33"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a89bba951d06459552c9c2fdfdab08a33">cx_hmac_update</a> (<a class="el" href="../cx__hmac__t">cx_hmac_t</a> *hmac, const uint8_t *in, size_t in_len)</td></tr>
<tr class="memdesc:a89bba951d06459552c9c2fdfdab08a33"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Adds more data to compute the HMAC.  <a href="#a89bba951d06459552c9c2fdfdab08a33">More...</a><br /></td></tr>
<tr class="memitem:a4b2c981c7bf4691016436768a329ae09"><td class="memItemLeft" align="right" valign="top"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a>&#160;</td><td colspan="3" class="memItemRight" valign="bottom"><a class="el" href="../lcx__hmac_8h#a4b2c981c7bf4691016436768a329ae09">cx_hmac_final</a> (<a class="el" href="../cx__hmac__t">cx_hmac_t</a> *ctx, uint8_t *out, size_t *out_len)</td></tr>
<tr class="memdesc:a4b2c981c7bf4691016436768a329ae09"><td class="mdescLeft">&#160;</td><td colspan="3" class="mdescRight">Finalizes the HMAC algorithm.  <a href="#a4b2c981c7bf4691016436768a329ae09">More...</a><br /></td></tr>
</table>
<a name="details" id="details"></a>

## Detailed Description

<div class="textblock"><p>HMAC (Keyed-Hash Message Authentication Code) </p>
<p>A HMAC is a specific type of message authentication code which involves a hash function and a secret key. It enables the verification of the integrity and the authenticity of a message. </p>
</div><h2 class="groupheader">Function Documentation</h2>
<a id="a59713fd754b21c5af7de282b7b03c824"></a>
<h2 class="memtitle">cx_hmac()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_hmac </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__t">cx_hmac_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
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
          <td class="paramname"><b>len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned char *&#160;</td>
          <td class="paramname"><b>mac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>mac_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Computes a HMAC value according to the specified hash function. </p>
<p>This function throws an exception if the computation doesn't succeed.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__hmac_8h#ac17c793ef88b21ebf2914a698fa189b2" title="Computes a HMAC value according to the specified hash function. ">cx_hmac_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be initialized with one of the initialization functions. The context shall be in RAM. The function shall be called with the cast (<a class="el" href="../cx__hmac__t" title="HMAC context, abstract type. ">cx_hmac_t</a> *).</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags. Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_NO_REINIT If CX_LAST is set and CX_NO_REINIT is not set, the context is reinitialized.</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data to add to the context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">len</td><td colspan="4">Length of the input data.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">mac</td><td colspan="4">Pointer to the computed HMAC or NULL pointer (if CX_LAST is not set).</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mac_len</td><td colspan="4">Length of the output buffer if not NULL, 0 otherwise. The buffer size must be larger than the length of the HMAC value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Identifier of the hash function.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a4b2c981c7bf4691016436768a329ae09"></a>
<h2 class="memtitle">cx_hmac_final()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_final </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__t">cx_hmac_t</a> *&#160;</td>
          <td class="paramname"><b>ctx</b>, </td>
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

<p>Finalizes the HMAC algorithm. </p>
<p>A call to this function is equivalent to <b>cx_hmac_no_throw(hash, CX_LAST, NULL, 0, out, out_len)</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">ctx</td><td colspan="4">Pointer to the HMAC context.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">out</td><td colspan="4">Computed HMAC value is CX_LAST is set.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">out_len</td><td colspan="4">Length of the output (the most significant bytes).</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Error code:<ul>
<li>CX_OK on success </li>
</ul>
</dd></dl>

</div>
</div>
<a id="a4c0edf6c13ffd8f4eb0873b354edb700"></a>
<h2 class="memtitle">cx_hmac_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__t">cx_hmac_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype"><a class="el" href="../lcx__hash_8h#aac7f6b791a4df89ac2e67ee43d4021a2">cx_md_t</a>&#160;</td>
          <td class="paramname"><b>hash_id</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">hash_id</td><td colspan="4">The message digest algorithm identifier.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 128 bytes.</td></tr>
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
<a id="ac17c793ef88b21ebf2914a698fa189b2"></a>
<h2 class="memtitle">cx_hmac_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_no_throw </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__t">cx_hmac_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
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
          <td class="paramname"><b>len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>mac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>mac_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes a HMAC value according to the specified hash function. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be initialized with one of the initialization functions. The context shall be in RAM. The function shall be called with the cast (<a class="el" href="../cx__hmac__t" title="HMAC context, abstract type. ">cx_hmac_t</a> *).</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mode</td><td colspan="4">Crypto mode flags. Supported flags:<ul>
<li>CX_LAST</li>
<li>CX_NO_REINIT If CX_LAST is set and CX_NO_REINIT is not set, the context is reinitialized.</li>
</ul>
</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data to add to the context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">len</td><td colspan="4">Length of the input data.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">mac</td><td colspan="4">Pointer to the computed HMAC or NULL pointer (if CX_LAST is not set).</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mac_len</td><td colspan="4">Length of the output buffer if not NULL, 0 otherwise. The buffer size must be larger than the length of the HMAC value.</td></tr>
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
<a id="a607b5443b71e13baf822bd14cf3e900f"></a>
<h2 class="memtitle">cx_hmac_ripemd160_init()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_hmac_ripemd160_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__ripemd160__t">cx_hmac_ripemd160_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Initializes a HMAC-RIPEMD160 context. </p>
<p>This function throws an exception if the initialization fails.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__hmac_8h#a655097348db511c8f8732c5f09f063ec" title="Initializes a HMAC-RIPEMD160 context. ">cx_hmac_ripemd160_init_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 64 bytes.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>RIPEMD160 identifier.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a655097348db511c8f8732c5f09f063ec"></a>
<h2 class="memtitle">cx_hmac_ripemd160_init_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_ripemd160_init_no_throw </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__ripemd160__t">cx_hmac_ripemd160_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC-RIPEMD160 context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 64 bytes.</td></tr>
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
<a id="a7f90af47a865e3d4bbe8f16ffac15d2d"></a>
<h2 class="memtitle">cx_hmac_sha224_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_sha224_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA224 context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 64 bytes.</td></tr>
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
<a id="a280d26d38eeebad8555b0ce5a5facb27"></a>
<h2 class="memtitle">cx_hmac_sha256()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">size_t cx_hmac_sha256 </td>
          <td>(</td>
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>mac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>mac_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes a HMAC value using SHA256. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">HMAC key value.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the HMAC key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">len</td><td colspan="4">Length of the input data.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">mac</td><td colspan="4">Computed HMAC value.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mac_len</td><td colspan="4">Size of the output buffer. The buffer size must be larger than the length of the HMAC value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Length of the HMAC value. </dd></dl>

</div>
</div>
<a id="a92fe5e51130696bcf38e458ae8b931ba"></a>
<h2 class="memtitle">cx_hmac_sha256_init()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_hmac_sha256_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA256 context. </p>
<p>This function throws an exception if the initialization fails.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__hmac_8h#acb664a12291a2fe0e05588c45b7206cb" title="Initializes a HMAC-SHA256 context. ">cx_hmac_sha256_init_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 64 bytes.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>SHA256 identifier.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="acb664a12291a2fe0e05588c45b7206cb"></a>
<h2 class="memtitle">cx_hmac_sha256_init_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_sha256_init_no_throw </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha256__t">cx_hmac_sha256_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA256 context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 64 bytes.</td></tr>
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
<a id="a47c555a072160c325e54c04f406ce2d6"></a>
<h2 class="memtitle">cx_hmac_sha384_init()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_sha384_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA384 context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 128 bytes.</td></tr>
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
<a id="aae387607e11e005d1fe466a47ff22133"></a>
<h2 class="memtitle">cx_hmac_sha512()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">size_t cx_hmac_sha512 </td>
          <td>(</td>
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>len</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">uint8_t *&#160;</td>
          <td class="paramname"><b>mac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>mac_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Computes a HMAC value using SHA512. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">HMAC key value.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the HMAC key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">len</td><td colspan="4">Length of the input data.</td></tr>
    <tr><td class="paramdir">[out]</td><td class="paramname">mac</td><td colspan="4">Computed HMAC value.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">mac_len</td><td colspan="4">Size of the output buffer. The buffer size must be larger than the length of the HMAC value.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>Length of the HMAC value. </dd></dl>

</div>
</div>
<a id="a1366763eb58eab50def9aa26ebeb9a3e"></a>
<h2 class="memtitle">cx_hmac_sha512_init()</h2>

<div class="memitem">
<div class="memproto">
<table class="mlabels">
  <tr>
  <td class="mlabels-left">
      <table class="memname">
        <tr>
          <td class="memname">static int cx_hmac_sha512_init </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const unsigned char *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
  </td>
  </tr>
</table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA512 context. </p>
<p>This function throws an exception if if the initialization fails.</p>
<dl class="section warning"><dt>Warning</dt><dd>It is recommended to use <a class="el" href="../lcx__hmac_8h#a22bea8db8f917221b9ade35d9838b109" title="Initializes a HMAC-SHA512 context. ">cx_hmac_sha512_init_no_throw</a> rather than this function.</dd></dl>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 128 bytes.</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>SHA512 identifier.</dd></dl>
<dl class="exception"><dt>Exceptions</dt><dd>
  <table class="exception">
    <tr><td class="paramname">CX_INVALID_PARAMETER</td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a id="a22bea8db8f917221b9ade35d9838b109"></a>
<h2 class="memtitle">cx_hmac_sha512_init_no_throw()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_sha512_init_no_throw </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__sha512__t">cx_hmac_sha512_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>key</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>key_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes a HMAC-SHA512 context. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the context. The context shall be in RAM.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key</td><td colspan="4">Pointer to the HMAC key value. If a key has been set, passing NULL pointer will reinitialize the context with the previously set key.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">key_len</td><td colspan="4">Length of the key. The key length shall be less than 128 bytes.</td></tr>
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
<a id="a89bba951d06459552c9c2fdfdab08a33"></a>
<h2 class="memtitle">cx_hmac_update()</h2>

<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="../cx__errors_8h#a06db7f567671764f4980db9bc828fa85">cx_err_t</a> cx_hmac_update </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="../cx__hmac__t">cx_hmac_t</a> *&#160;</td>
          <td class="paramname"><b>hmac</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">const uint8_t *&#160;</td>
          <td class="paramname"><b>in</b>, </td>
        </tr>
        <tr>
          <td colspan="2" class="paramkey"></td>
          
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><b>in_len</b>&#160;</td>
        </tr>
        <tr>
          
          <td>)</td>
          
        </tr>
      </table>
</div><div class="memdoc">

<p>Adds more data to compute the HMAC. </p>
<p>A call to this function is equivalent to: <b>cx_hmac_no_throw(hmac, 0, in, in_len, NULL, 0)</b>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramdir">[out]</td><td class="paramname">hmac</td><td colspan="4">Pointer to the HMAC context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in</td><td colspan="4">Input data to add to the context.</td></tr>
    <tr><td class="paramdir">[in]</td><td class="paramname">in_len</td><td colspan="4">Length of the input data.</td></tr>
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
