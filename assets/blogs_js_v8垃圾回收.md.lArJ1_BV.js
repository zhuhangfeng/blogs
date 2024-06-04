import{j as r,F as i,c,q as t,f as a,K as o,w as l,aD as d,b as p}from"./chunks/framework.CquVR3LJ.js";const k=JSON.parse('{"title":"v8垃圾回收","description":"","frontmatter":{"title":"v8垃圾回收","date":"2023-07-13T00:00:00.000Z","isShowComments":true,"categories":["js"],"tags":["js"],"sidebar":"auto"},"headers":[],"relativePath":"blogs/js/v8垃圾回收.md","filePath":"blogs/js/v8垃圾回收.md","lastUpdated":1715526865000}'),s={name:"blogs/js/v8垃圾回收.md"},n=d('<h1 id="v8垃圾回收" tabindex="-1">v8垃圾回收 <a class="header-anchor" href="#v8垃圾回收" aria-label="Permalink to &quot;v8垃圾回收&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念: <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念:&quot;">​</a></h2><p>v8是一款Google开发的JavaScript引擎，用于执行JavaScript代码，它实现自动管理内存，防止内存泄漏，并提高Javascript程序的性能和开发效率。</p><hr><h2 id="原理" tabindex="-1">原理: <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理:&quot;">​</a></h2>',5),h=t("hr",null,null,-1),m=t("h2",{id:"新生代",tabindex:"-1"},[a("新生代： "),t("a",{class:"header-anchor",href:"#新生代","aria-label":'Permalink to "新生代："'},"​")],-1),f=t("p",null,"新生代主要用于存放存活时间较短的对象，新创建的对象也存放在新生代。",-1),_=t("p",null,"回收器工作流程如下所示：",-1),b=d('<h3 id="图例" tabindex="-1">图例： <a class="header-anchor" href="#图例" aria-label="Permalink to &quot;图例：&quot;">​</a></h3><ul><li><p>From空间中分配了三个对象A、B、C</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEB0a8f673b0df6f577963a4053c9b8bad9?method=download&amp;shareKey=b54f7ccba59b489c485cbdad602eec2f" alt="RUNOOB 图标"></p></li><li><p>当程序主线程任务第一次执行完进入垃圾回收时发现A没有其他引用，表示可以回收</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEBcd6dcf93524b2f370a879cb04fc759ce?method=download&amp;shareKey=5410af7ddbbc8d64a12d77e744d9cf9b" alt="RUNOOB 图标"></p></li><li><p>对象B、C此时依旧处于活跃状态，因此会被复制到To空间中进行保存</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEB832badac765b8b7afc1f26a2062f202a?method=download&amp;shareKey=a537b8e17a9d7aac80ac16c4c0f1172d" alt="RUNOOB 图标"></p></li><li><p>From空间中的所有非存活对象全部清除</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEB6bf2ec961287f52dd8274b6d872bd753?method=download&amp;shareKey=b3d0bb0a6cf891a29a45af285ca12276" alt="RUNOOB 图标"></p></li><li><p>From空间和To空间进行互换</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEBa843c9f298b5029237d8a5ac218e6bd3?method=download&amp;shareKey=b557038b0a8b2ef623a8bc563a08f11f" alt="RUNOOB 图标"></p></li></ul><hr><h2 id="老生代" tabindex="-1">老生代: <a class="header-anchor" href="#老生代" aria-label="Permalink to &quot;老生代:&quot;">​</a></h2>',4),u=d('<ul><li><p>Mark-Sweep：标记清除分为标记和清除两个阶段。标记阶段垃圾回收器会在内部构建一个根节点。从根节点出发遍历其可以访问到的子节点并标记为活动的，根节点不能访问的地方即为非活动的（垃圾），清除阶段垃圾回收器将释放所有非活动的内存块。以下几种情况可以作为根节点：</p><ol><li>全局对象（Javascript中window全局对象）</li><li>本地函数的局部变量和参数</li><li>当前嵌套调用链上的其他函数的变量和参数</li></ol></li><li><p>Mark-Compact：使用该算法的原因是因为Mark-Sweep算法中存在清理完后的对象内存地址不连续，出现内存碎片问题、导致如果需要分配一个大对象而空闲内存不足以分配就会提前触发垃圾回收。Mark-Compact算法就是为了解决内存碎片问题，在标记算法标记完成后使用标记整理算法把标记过的对象移到栈内存的一端，再清理掉边界外的全部内存</p></li></ul><h3 id="图例-1" tabindex="-1">图例： <a class="header-anchor" href="#图例-1" aria-label="Permalink to &quot;图例：&quot;">​</a></h3><ul><li><p>老生代中有A、B、C、D四个对象</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEB1bc88be39c05251772d08d41a4f50b74?method=download&amp;shareKey=dd34bd7b54bf926dd2ffa655223c2652" alt="RUNOOB 图标"></p></li><li><p>标记阶段，将对象A、C标记为活动的</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEB91a4afd5f3eb9132c80803b81880273b?method=download&amp;shareKey=f908460b9ecdfb1a33e3c99cb67471e6" alt="RUNOOB 图标"></p></li><li><p>整理阶段，将活动对象A、C移到栈内存的一端</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEBf7a6c9dd864247a347b597b4d9ee7d0f?method=download&amp;shareKey=b19832524192f82fdf5368d0fa3430dd" alt="RUNOOB 图标"></p></li><li><p>清除阶段，将活动对象的左侧内存全部回收</p><p><img src="https://note.youdao.com/yws/api/personal/file/WEBd9f14bdea1305a2930c80e7456b3a302?method=download&amp;shareKey=bd443ccfbece15b0f08680c499272568" alt="RUNOOB 图标"></p></li></ul><p>由于JS的单线程机制，垃圾回收过程会阻碍主线程同步任务的进行，造成卡顿。v8引擎又引入了Incremental Marking(增量标记)，及将原本需要一次性遍历堆内存的操作改为增量标记的方式，先标记内存中的一部分对象，然后暂停，接着执行主线程任务，执行完再从原来暂停的地方继续标记,提高性能</p><p>v8引擎后续又引入了延迟清理（lazy sweeping）和增量式整理（incremental compaction），同时为了充分利用多核CPU的性能，也将引入并行标记和并行清理，进一步减少垃圾回收对主线程的影响，提升更多性能</p><hr><h2 id="新生代-老生代-对象晋升" tabindex="-1">新生代-&gt;老生代（对象晋升） <a class="header-anchor" href="#新生代-老生代-对象晋升" aria-label="Permalink to &quot;新生代-&gt;老生代（对象晋升）&quot;">​</a></h2><ul><li>对象经历过一次Scavenge算法就会移到老生代中，否则移到To空间</li><li>当To空间内存占比已经超过25%就会移到老生代中（25%内存限制的原因是To空间经历一次Scacenge算法后会和From空间角色互换，变为From空间，后续内存分配都是在From空间中进行的，如果内存使用过高甚至溢出，会影响后续对象的分配）</li></ul><hr><h2 id="避免内存泄漏的方法" tabindex="-1">避免内存泄漏的方法 <a class="header-anchor" href="#避免内存泄漏的方法" aria-label="Permalink to &quot;避免内存泄漏的方法&quot;">​</a></h2><ul><li><p>尽量少的使用全局变量，使用完全局变量后设置为null触发回收机制</p></li><li><p>及时清除定时器</p></li><li><p>合理使用闭包：闭包可以引用其外部函数的变量，导致这些变量无法被垃圾回收。确保闭包只持有必要的变量，并在使用完毕后释放对这些变量的引用。</p></li><li><p>显式释放不再使用的对象：在不再需要某个对象时，手动将其引用设为 null。这样可以告诉垃圾回收器该对象可以被回收，释放占用的内存。</p></li><li><p>避免循环引用：循环引用是指两个或多个对象之间相互引用，导致它们无法被垃圾回收。确保对象之间的引用关系是单向的，或者使用弱引用（WeakMap、WeakSet）来避免循环引用问题。</p></li><li><p>注意 DOM 对象的引用：在操作 DOM 元素时，避免将其引用存储在全局变量或长期存在的对象中。当不再需要时，及时清除对 DOM 对象的引用，以便垃圾回收器可以回收它们。</p></li></ul>',11);function T(y,w,B,g,v,O){const e=i("font");return p(),c("div",null,[n,t("p",null,[a("使用了一种称为 "),o(e,{color:"red"},{default:l(()=>[a("“分代式垃圾回收” ")]),_:1}),a("策略，根据对象的存活时间将内存的垃圾回收经行不同的分代，然后使用不同的垃圾回收算法。v8内存结构主要由"),o(e,{color:"red"},{default:l(()=>[a("新生代")]),_:1}),a("、"),o(e,{color:"red"},{default:l(()=>[a("老生代")]),_:1}),a("、大对象区、代码区、map区组成。")]),h,m,f,_,t("p",null,[a("新生代使用"),o(e,{color:"red"},{default:l(()=>[a("Scavenge（半空间）")]),_:1}),a("算法把新生代内存划分为两个区域其中处于激活状态的区域称为"),o(e,{color:"red"},{default:l(()=>[a("From空间")]),_:1}),a("、未激活的区域称为"),o(e,{color:"red"},{default:l(()=>[a("To空间")]),_:1}),a("。程序中声明的对象首先会被分配到From空间，当进新垃圾回收时，如果From空间中有存活的对象，则会复制到To空间进行保存、非存活的对象会被自动回收，当复制完成后Form空间和To空间进行互换。原来的From空间会变为新的To空间，原来的To空间会变为新的From空间。")]),b,t("p",null,[a("管理着大量的存活对象，使用"),o(e,{color:"red"},{default:l(()=>[a("Mark-Sweep（标记清除）")]),_:1}),a("和"),o(e,{color:"red"},{default:l(()=>[a("Mark-Compact（标记整理）")]),_:1}),a("进行管理。")]),u])}const C=r(s,[["render",T]]);export{k as __pageData,C as default};
