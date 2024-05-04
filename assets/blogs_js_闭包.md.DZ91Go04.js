import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BHtvoqpK.js";const g=JSON.parse('{"title":"闭包","description":"","frontmatter":{"title":"闭包","date":"2023-09-05T00:00:00.000Z","isShowComments":true,"categories":["js"],"tags":["js"],"sidebar":"auto"},"headers":[],"relativePath":"blogs/js/闭包.md","filePath":"blogs/js/闭包.md"}'),t={name:"blogs/js/闭包.md"},l=n(`<hr><h2 id="概念" tabindex="-1">概念: <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念:&quot;">​</a></h2><p>官话：闭包是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在Javascript中，闭包会随着函数的创建而被同时创建。</p><p>白话：在一个作用域中可以访问另一个函数作用域中的局部变量的函数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zhf&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><hr><p>注意：访问到父级函数的变量是不会销毁，可以长久保存，但是也会导致内存泄漏，函数调用成功以后可以把 c赋值为null来释放内存</p>`,7),e=[l];function p(h,k,r,d,c,o){return a(),i("div",null,e)}const _=s(t,[["render",p]]);export{g as __pageData,_ as default};
