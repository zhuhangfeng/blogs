import{j as t,c as l,b as a,aD as i}from"./chunks/framework.CquVR3LJ.js";const N=JSON.parse('{"title":"Http","description":"","frontmatter":{"title":"Http","date":"2024-3-5","isShowComments":true,"categories":["interview"],"tags":["interview"],"sidebar":"auto"},"headers":[],"relativePath":"blogs/interview/http.md","filePath":"blogs/interview/http.md","lastUpdated":1715526865000}'),e={name:"blogs/interview/http.md"},h=i('<h1 id="http" tabindex="-1">Http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;Http&quot;">​</a></h1><h2 id="https和http的区别" tabindex="-1">https和http的区别 <a class="header-anchor" href="#https和http的区别" aria-label="Permalink to &quot;https和http的区别&quot;">​</a></h2><ul><li>http属于明文传说协议，不安全，使用端口80</li><li>https使用SSL/TLS协议加密传输，比较安全，使用端口443</li></ul><h2 id="https的加密过程-是对称密钥吗" tabindex="-1">https的加密过程，是对称密钥吗 <a class="header-anchor" href="#https的加密过程-是对称密钥吗" aria-label="Permalink to &quot;https的加密过程，是对称密钥吗&quot;">​</a></h2><ul><li>浏览器对服务器发送请求，服务器收到后返回证书以及公钥给浏览器，浏览器使用公钥加密一个对称密钥发送给服务器，服务器收到后使用私钥解密对称密钥，以此通道进行连接。</li><li>这个加密通道使用非对称加密方式，而通信过程使用对称加密方法加密数据和解密数据</li></ul><h2 id="http1-0和http2-0的区别" tabindex="-1">http1.0和http2.0的区别 <a class="header-anchor" href="#http1-0和http2-0的区别" aria-label="Permalink to &quot;http1.0和http2.0的区别&quot;">​</a></h2><ul><li>多路复用：1.0每个请求都是独立的TCP请求，2.0使用多路复用，一个TCP连接可以进行多次请求，允许不同请求在同一连接交错发送。</li><li>头部处理：1.0每次都需要发送完整的头部数据，2.0使用报头压缩，降低开销</li><li>数据传输：1.0报文信息必须是文本，数据可以是文本或二进制，2.0报文信息和数据都是二进制</li><li>服务器推送</li></ul><h2 id="浏览器输入地址按下回车会发送什么" tabindex="-1">浏览器输入地址按下回车会发送什么 <a class="header-anchor" href="#浏览器输入地址按下回车会发送什么" aria-label="Permalink to &quot;浏览器输入地址按下回车会发送什么&quot;">​</a></h2><ul><li>URL解析：协议解析（使用http还是https协议）、域名解析（DNS服务器解析）、端口号解析、路径解析、参数解析</li><li>DNS服务器会根据域名查询返回IP地址</li><li>浏览器使用http协议与服务器建立TCP连接，其中需要三次握手，断开连接需要四次挥手</li><li>连接建立成功，浏览器携带参数和路径向服务器发送请求，服务器根据参数和路径返回对应的内容，如html、css、js。</li><li>浏览器收到数据后，把html解析成DOM树，把css编译成css规则树，合并DOM树和CSS规则生成render树，最终渲染到浏览器上</li></ul><h2 id="dns服务器解析域名过程" tabindex="-1">DNS服务器解析域名过程 <a class="header-anchor" href="#dns服务器解析域名过程" aria-label="Permalink to &quot;DNS服务器解析域名过程&quot;">​</a></h2><ul><li>首先DNS服务器会在DNS缓存中查找是否有域名对应的IP地址，如果有直接返回，密钥则进入下一步递归查询</li><li>根域名服务器发起查询找到例如.com 、.cn的顶级域名</li><li>顶级域名服务器根据顶级域名查找对应的二级域名如baidu.com</li><li>权威域名服务器根据二级域名进行查找返回正确的IP地址</li></ul><h2 id="tcp连接的三次握手、四次挥手" tabindex="-1">TCP连接的三次握手、四次挥手 <a class="header-anchor" href="#tcp连接的三次握手、四次挥手" aria-label="Permalink to &quot;TCP连接的三次握手、四次挥手&quot;">​</a></h2><ul><li><p>第一次握手（SYN）：客户端给服务器发送一个带有SYN的数据包请求建立连接</p></li><li><p>第二次握手（SYN+ACK）：服务器收到SYN数据包后，回复一个带有SYN和ACK标志的数据包，表示同意建立连接</p></li><li><p>第三次握手（ACK）：客户端收到服务器的SYN+ACK数据包后，会发送一个带有ACK标志的数据包表示连接建立成功</p></li><li><p>第一次挥手（FIN）：客户端发送一个带有FIN标志的数据给服务器，请求关闭连接</p></li><li><p>第二次挥手（ACK）：服务器收到客户端发送的FIN数据包后，会发送一个带有ACK标志的数据包给客户端，确认收到关闭请求</p></li><li><p>第三次挥手（FIN）：服务器发送一个带有FIN标志的数据包给客户端，表示服务器也准备关闭连接</p></li><li><p>第四次挥手（ACK）：客户端收到服务器的FIN数据包后，会发送一个带有ACK标志的数据包给服务器，确认收到关闭请求</p></li></ul><h2 id="tcp三次握手-四次挥手-如果只有两次会出现哪些问题" tabindex="-1">TCP三次握手，四次挥手，如果只有两次会出现哪些问题 <a class="header-anchor" href="#tcp三次握手-四次挥手-如果只有两次会出现哪些问题" aria-label="Permalink to &quot;TCP三次握手，四次挥手，如果只有两次会出现哪些问题&quot;">​</a></h2><ul><li>2次握手，客户端发送SYN标识数据包给服务器请求建立连接，服务器收到后返回SYN+ACK数据包给客户端，没有进行第三次确认，会导致服务器不知道客户端是不是要建立连接。导致连接不稳定，不可靠。</li><li>2次挥手，客服端发送FIN标识的数据包给服务器请求断开连接，服务器收到后回复ACK标识的数据包表示知道了你要关闭，但是服务器未进行发送FIN标识数据包表示可以断开连接，就会导致数据传输不完整。</li></ul>',15),r=[h];function p(s,o,n,c,d,u){return a(),l("div",null,r)}const S=t(e,[["render",p]]);export{N as __pageData,S as default};
