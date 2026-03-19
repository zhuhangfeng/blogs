---
title: HTML
date: 2024-3-5
categories:
 - interview
tags:
 - interview
---
# HTML

## src和href的区别
<font color="#FF0000">src</font>和<font color="#FF0000">href</font>都是用来加载外部资源，区别 如下：

- src：当浏览器解析到该元素时，会暂停其他资源的加载和处理，直到该资源加载完成。它会将资源内容嵌入到当前标签所在的位置，将其指向的资源下载应用到文档内，如js脚本等。常用在img、script、iframe等标签。

- href：指向外部资源所在的位置，和当前元素位置建立链接，当浏览器解识别到它的指向的位置，将其下载的时候不会阻止其他资源的加载解析。常用在a、link标签。

## HTML5新特性
 - 新增语义化标签：
    1. &lt;header&gt;：定义文档或节的页眉。
    2. &lt;nav&gt;：定义导航链接的部分。
    3. &lt;article&gt;：定义独立的内容区块，比如一篇文章。
    4. &lt;section&gt;：定义文档中的节或区段。
    5. &lt;aside&gt;：定义页面内容之外的内容，比如侧边栏。
    6. &lt;footer&gt;：定义页面的页脚。
    7. &lt;main&gt;：定义文档的主要内容
    8. &lt;figure&gt;：定义独立的流内容，比如图片、表格、图表等
    9. &lt;figcaption&gt;：为&lt;figure&gt;元素的标题。
 - 新增表单类型属性，email、number、时间控件、color颜色拾取器、placeholder、autofocus自动获取焦点
 - 新增音视频标签、video、audio
 - 新增canvas画布、websocket通信、拖拽等
 - 新增本地储存localStorage、sessionStorage

## 对HTML语义化的理解
根据内容来悬着合适的标签

 - 方便浏览器爬虫更好的识别内容。
 - 有利于代码的可读性，开发者能清晰的看出网页的结构，便于团队的开发与维护

## DOCTYPE(文档类型)的作用

doctype 是HTML5中一种标准通用标记语言的文档类型声明，是用来告诉浏览器的解析器，该用什么样的方式去加载识别文档。在html5中doctype声明不支持任何参数。因此，只需要使用简单的<!DOCTYPE html>就可以

## ifame有哪些优点和缺点？

iframe通常用来加载外部链接，不会影响网页内容的加载

<font color="#FF0000">优点</font>

 - 可以将网页原封不动的加载进来
 - 增加代码的可用性
 - 用来加载显示较慢的内容，如广告、视频等

 <font color="#FF0000">缺点</font>

 - 加载的内容无法被浏览器引擎识别，对SEO不友好
 - 会阻塞onload事件加载
 - 会产生很多页面，不利于管理

## Canvas和SVG的区别

 - canvas画布，是通过JavaScript来绘制2d图，是逐像素进行渲染。
 - SVG矢量图，是基于XML描述的2D图形语言，每个元素都是可用的，可以为其添加事件。

## script标签中defaer和async的区别

 他两个都是表示异步加载外部js脚本，不会阻碍页面的加载解析。区别

  - 执行顺序：有多个async标签不能保证先后加载顺序，而多个defer标签可以按先后顺序加载。
  - 是否立即执行：async加载完脚本后会立即执行，defer是要等文档解析完成后才执行。
  - `<script src='xxx'></script>`：遇到script标签时会阻塞html的解析，script下载完成后会立即执行，接着再解析html
  ![An image](/script.png)
  
  - `<script src='xxx' async></script>`：遇到async时不会阻塞html的解析，等script下载完成后会暂停html的解析，执行script，执行完再解析html
  ![An image](/async.png)

  - `<script src='xxx' defer></script>`：遇到defer时不会阻塞html的解析，下载完script不会立即执行，等html解析完成后才会执行script
  ![An image](/defer.png)


## 怎样添加、移除、移动、复制、创建和查找结点

 - 添加节点 document.appendChild(dom)
 - 移除节点 document.removeChild(dom)
 - 移动节点 document.appendChild(targetDom)
 - 复制节点 dom.cloneNode(true),参数true表示是否复制子节点
 - 创建节点 document.createElement(dom)
 - 查找节点：
   - document.getElementById("elementId") id查找
   - document.getElementsByClassName("className") class类名查找
   - document.getElementsByTagName("tagName") 标签名查找
   - document.querySelector("selector")
   - document.querySelectorAll("selector")

## link和@import的区别
   
   - link可以加载css，link引入的css会被同时加载
   - @import导入样式，但是引入的css将在页面加载完毕后才被加载，兼容性不好

## 重排重绘

   - 重排：浏览器渲染页面之前需要对结构进行布局的重新计算
      - 容器宽高等几何属性发生变更会触发重排
      
   - 重绘：将已经计算好的布局重新绘制出来
      - 样式字体非几何属性发生变更会触发重绘
   
   ### 重排一定会重绘、重绘不一定重排

## 写H5和小程序有什么相同及不同的地方吗？

   - 相同点：
      - 都是使用HTML、CSS、JavaScript来开发应用
      - 跨平台在多种设备和操作系统上运行
      - 无需安装、轻量级方便使用
   

   - 不同点：
      - H5的运行环境是浏览器，小程序的运行环境是微信、支付宝等平台
      - 开发框架
      - 生命周期
      - 性能
      - 开发和维护

## 