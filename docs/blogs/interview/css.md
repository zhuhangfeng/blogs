---
title: CSS
date: 2024-3-5
categories:
 - interview
tags:
 - interview
---
# CSS

## 行内元素、块级元素、空（void）
   行内元素是指文档流中水平排列的元素，他们不会换行，在同一行上。只会占据自身所需的空间。

   块级元素是指在文档流中独占一行的元素，会在前后都产生换行，他们会占据整个可用的宽度

   空（void）元素是指没有内容的元素，他们通常用来插入一些不需要额外信息的标签.

 - 行内：a、b、span、input、img、select、strong
 - 块：p、div、h1、ul、ol、li、dl、dt、dd
 - 空：hr、br、img、input、link、meta

## CSS3新增特性
   - 新增css选择器、伪类
   - 特效：text-shadow、box-shadow
   - 线性渐变：gradient
   - 旋转过渡：transform、transtion
   - 动画：animation
   - 圆角：border-radius

## 盒模型

盒模型都是由四个部分组成的分别是margin、border、padding和content。
标准盒模型和IE盒模型的区别在于设置width和height时对应的范围不同。

   - 标准盒模型：width、height 只包含了content
   - IE盒模型：width、height除了content本身，还包含了border、padding。

通过修改元素的box-sizing属性来改变元素的盒模型
   - box-sizeing：content-box 表示标准盒模型（默认值）
   - box-sizeing：border-box 表示IE盒模型

## CSS选择器和优先级

   选择器

   - id选择器 #id   100
   - 类选择器 .classname 10
   - 属性选择器 div[class='foo'] 10
   - 伪类选择器 div::last-child 10
   - 标签选择器 div 1
   - 伪元素选择器 div:after 1
   - 兄弟选择器 div-span 0 
   - 子选择器 ui>li 0
   - 后代选择器 div span 0
   - 通配符选择器 0

   优先级

   - ！important
   - 内联样式
   - id选择器
   - 类选择器/伪类选择器/属性选择器
   - 标签选择器/伪元素选择器
   - 关系选择器/通配符选择器

## CSS可继承属性和不可继承属性

可继承

   - font-weight
   - color
   - font-size
   - line-height
   - cursor

不可继承

   - margin、padding、border
   - display
   - background
   - overflow
   - width、height
   - position


## display的属性和作用

   - block：块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
   - inline：行内元素类型。默认宽度为内容宽度，不可设置宽度，同行显示。
   - inline-block：行内块级元素，默认宽度为内容宽度，可以设置宽高，同行显示
   - table：块级表格
   - flex flex容器布局
   - none 隐藏元素
   - inherit：从父类继承display属性

## 隐藏元素的方式
   
   - display:none 元素在文档中不存在，不会占据位置
   - visibility:hidden 元素在文档中的位置还保留，仍然占据空间
   - opacity：0   将透明度设置为0
   - z-index：负值   直接将元素放置在最下层，利用其他元素来遮盖
   - position：absolute   将元素定位到可视区域以外  
   - clip-path：circle(0) 裁剪

## 单行、多行文本溢出
   单行
   ```css
      overflow:hidden;//移除隐藏
      text-overflow:ellipsis;//溢出用省略号显示
      whtie-space:nowrap;//规定段落中的文本不进行换行
   ```

   多行
   ```css
      overflow：hidden
      text-overflow：ellipsis;// 溢出用省率号显示
      display：-webkit-box;//作为弹性伸缩盒子模型显示。
      -webkit-line-clamp：n ; //显示 n 行
      -webkit-box-orient：vertical;//设置伸缩盒子的子元素排列方
   ```

## sass、less他们的区别是什么？
  
   - 编译环境不一样。sass是在服务端处理的，less是需要引入less.js来处理Less代码输出CSS到浏览器，也可以在开发服务器将Less语法编译成css文件，输出css文件到生产包目录
   - 变量符不一样。Less是@，而Sass是$
   - sass支持条件语句，可以使用if()else{},for{}循环等等，而less不支持

## link和@import的区别
   
   - link可以加载css，link引入的css会被同时加载
   - @import导入样式，但是引入的css将在页面加载完毕后才被加载，兼容性不好

## 常见的css单位

   - px像素
   - 百分比父元素，当浏览器的宽度或高度发生变化时，当前元素依据比例发生变化
   - em和rem，相对长度单位，em相对于父元素，rem相对于根元素
   - vw/vh 与视窗口有关的单位，代表视窗口的宽度。

## px、em、rem的区别
   - px固定像素单位，不会随其他元素变化而变化
   - em相对于父元素的单位，随父元素的变化而变化
   - rem相对于根元素的单位，随html的变化而变化

## 三栏布局
   - 利用绝对定位，左右两栏设置绝对定位，中间使用对应方向大小的margin值
   - 利用flex布局，左右两栏固定大小，中间一栏设置flex：1
   - 利用浮动，左右两栏设置固定大小，设置对应方向浮动，中间一栏设置左右两个方向的margin值。

## 水平垂直居中

   - 利用绝对定位
      父元素 position:relative
      子元素 position:absolute
             left:50%
             top:50%
             transform:translate(-50%,-50%)
   
   - 利用绝对定位
      父元素 position:relative
      子元素 position:absolute
             top:0
             bottom:0
             left:0
             right:0
             margin:auto
             width:100px
             height:100px
   
   - 利用flex布局
      display：flex
      justify-content: ccenter
      align-items: center

## flex布局的理解
   flex布局是css3中的布局方式，根据不同屏幕尺寸的变化来适应大小
   常用属性：
   - flex-direction：决定主轴的方向
   - flex-wrap：如果一条轴线排不下，如何换行。
   - flex-flow: 是flex-direction属性和flex-wrap属性的简写形式，默认值为row，nowrap 
   - justify-content: 定义项目在主轴上如何对齐
   - align-items：定义项目在交叉轴上如何对齐

## flex：1表示什么

   flex是flex-grow、flex-shrink、flex-basis的缩写。flex：1表示占用剩余所有空间

## 聊聊网格布局（Grid Layout）和响应式布局（Responsive Layout）
   - 网格布局（Grid Layout）是一种二维布局系统，将页面划分为行和列，常用于水平和垂直居中、嵌套网络、自适应容器大小
      - display:grid;将元素设置为网格容器
      - grid-template-rows：100px 200px 定义2行(第一行高100px、第二行高200px)
      - grid-template-columns: auto auto auto属性和3列（三列自动宽度）
      - grid-template-area：合并行或者列
      - grid-gap: 10px;设置行列的间距

   - 响应式布局（Responsive Layout）是一种设计方法，通过媒体查询（media）、相对单位和弹性布局等技术可以实现网页的响应式调整
      - 使用媒体查询根据设备的特性和屏幕尺寸应用不同的css样式
      - 相对单位（百分比、vw、vh、rem、em）
      - 弹性布局（flex、grid）



## 对BFC的理解，如何创建BFC
   BFC是块级格式上下文，在BFC布局里面的元素不受外面元素的影响

   创建BFC条件
   - 设置浮动。float有值但是不为空
   - 设置绝对定位：position(absolute、fixed)
   - overfilow值为：hidden、auto、scroll
   - display值为：inline-block、table-cell、table-caption0

   BFC作用
   - 解决margin重叠问题：由于BFC是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为BFC，就解决了margin重叠问题
   - 解决高度塌陷问题

## 什么是margin重叠、如何解决
   两个块级元素分别设置上下margin可能会导致边距合并为一个边距
   两个元素都变为BFC

## position 常用属性 默认值是什么

   - static 默认值，没有定位，元素正常在文档流中显示
   - relative 相对定位，相对于原来的位置进行定位
   - absolute 绝对定位，相对于一个父元素进行定位
   - fixed 绝对定位，相对于浏览器窗口
   - sticky 粘性定位，基于用户滚动位置

## 实现一个三角形
   ```css
   div{
      width:0;
      height:0;
      border-top:50px solid red;
      border-left:50px solid transparent;
      border-right:50px solid transparent;
   }
   ```

## 画一条0.5px的线

   - 使用transform：scale(0.5,0.5)

## 伪元素和伪类

   - 伪元素可以在一个元素前面或后面添加内容，通常使用::双冒号来表示伪元素
      - ::before 在元素之前插入内容
      - ::after 在元素之后插入虚拟内容
      - ::first-line 选择元素的第一行文本
      - ::first-letter 选择元素的第一个字母
   
   - 伪类使用单冒号（:）来表示伪类
      - :hover 鼠标悬停在元素上应用的样式
      - :active 元素被激活时应用的样式（通常时鼠标点击）
      - :first-child 选择作为父元素的第一个子元素
      - :nth-child() 选择指定位置的子元素
      - :not() 排除特定选择器匹配的元素
