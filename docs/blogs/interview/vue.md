---
title: interview-(vue)
date: 2024-3-5
isShowComments: true    
categories:
 - interview
tags:
 - interview
sidebar: 'auto'
---

## MVVM的理解
   MVVM是一种软甲架构模式，MVVM分为Model、View、ViewModel
   - Model：数据模型层，数据和业务逻辑都在Model层中定义
   - View：视图层，负责数据的展示
   - ViewModel：视图模型层用于控制数据的改变和视图的更新

## vue和react的区别

   不同
   - 模板语法不同，react采用JSX语法，vue使用基于HTML的模板语法
   - 数据绑定不同，vue采用双向数据绑定，react是单向数据绑定
   - 状态管理不同，vue采用vuex状态管理，react使用redux状态管理
   - 组件通信不同，
   - 生命周期不同
   
   相同
   - 组件化开发
   - 虚拟DOM
   - 响应式更新
   - 集成能力

## Vue2和Vue3有哪些区别

   - vue2使用的是optionsApi，vue3使用composition API组合式API，更好的组织代码，提高代码可维护性
   - vue2 使用Object.defineProperty实现响应式原理，vue3使用Proxy实现响应式原理更好的性能和更准确的数据变化追踪能力
   - vue3引入了Teleprot组件，可以将DOM元素渲染到DOM数的其他位置，用于创建模态框、弹出框
   - Vue3全局API名称发生改变，同时新增了watchEffect、Hooks等功能
   - vue3对TypeScript的支持更加友好
   - vue3核心库的依赖更少，减少打包体积

## SPA的理解，有什么优点

   SPA（单页面应用）是一种前端应用程序的架构模式，加载应用程序是只加载一个HTML页面，通过使用Javascript动态地更新页面内容，从而实现无刷新的用户体验
   优点
   - 用户体验好
   - 代码复用率高
   - 服务器负载较低
   缺点
   - 首次加载时间长
   - 不利于SEO搜索引擎抓取

## SPA和多页面有什么区别

   - 页面加载方式：多页面应用每次导航需要重新加载整个页面，SPA单页面无需重新加载整个页面
   - 用户体验：SPA提供了流程、快速的用户体验，因为页面切换时无需等待整个页面的重新加载，只有需要的数据和资源会被加载，减少了页面刷新的延迟。多页面应用则可能会有页面刷新的延迟，给用户带来较长的等待时间。
   - 代码复用：SPA采用组件化开发，在不同页面中复用组件，提高代码可维护性。多页面应用的每个页面都是独立的，组件复用的机会少
   - 路由管理：在多页面应用中，页面之间的导航和路由由服务器处理，每个页面对应一个不同的URL，而在SPA中，前端负责管理页面的导航和路由，通过前端路由库（如Vue Router）来管理不同路径对应的组件
   - SEO：多页面比较有利，单页面由于是用JavaScript动态生成，不利于搜索引擎抓取

## vue的性能优化有哪些

   - 编码阶段
      - vue2中v-if和v-for不能一起使用，因为v-for的优先级比v-if高，会造成性能浪费。vue3中v-if的优先级比v-for高，也不能在一起使用，会报错
      - vue-for 保证key的唯一性
      - 使用keep-alive缓存组件
      - v-if和v-show酌情使用，v-if直接不显示标签，而v-show是隐藏标签， v-show适用于切换频率较高的场景
      - 路由懒加载、异步组件
      - 图片懒加载
      - 节流:频繁触发变为少量触发，规定事件间隔内只执行一次
      ```js
      <!-- 定时器版本 -->
      function throttle(func,wait){
         var timer
         return function(){
            let context =this
            let args = arguments
            if(!timer){
               timer = setTimeout(()=>{
               timer = null
                  fn.apply(context,args)
               },wait)
               
            }
         }
      }
      <!-- 时间戳版本 -->
      function throttleTime(fn,wait){
         var count = 0
         return function(){
            let context = this
            let args = arguments
            let nowTime = Date.now()
            if(nowTime-count>=wait){
               fn.apply(context,args)
               count = Date.now()
            }
         }
      }
      ```
      - 防抖：多次触发变为一次触发，最后一次在规定时间后触发
      ```js
      function debounce(fn,wait,immediate){
         let timer;
         let args = arguments
         let context = this
         if(timer)clearTimeout(timer)
         if(immediate){
            let nowTime = !timer
             timer = setTimeout(()=>{
               timer = null
            },wait)
            if(nowTime)fn.apply(context,args)
         }else{
            timer = setTimeout(()=>{
               fn.apply(context,args)
            },wait)
         }
      }
      ```
      - 第三方模块按需引入
      - 服务端与渲染
   
   - 打包优化
      - 压缩代码
      - 使用CDN加载第三方模块
      - 抽离公共文件
   
   - 用户体验
      - 骨架屏
      - 客户端缓存
   
   - SEO优化
      - 预渲染
      - 服务端渲染
      - 合理使用meta标签

## Vue生命周期

   vue2：
   - beforeCreate: 创建前，初始化事件和数据观测还未开始，不能访问data、methods中的数据和方法
   - created：创建后，实例初始化完成，可以访问data中的数据，但是渲染节点还未挂载到DOM上
   - beforeMount：挂载前，Vue实例还未挂载到页面上
   - mounted：挂载后，vue实例已经挂载完成，可以操作DOM
   - beforeUpdate：更新前，数据已是最新的，但是还未更新到页面上
   - update：更新后，数据和页面都是最新的
   - beforDestorye：销毁前，还能获取到data中的数据
   - destoryed：销毁后，实例完全被销毁
   - activated：keep-alive组件激活时调用（保持状态）

   vue3：
   - setup：替代vue2中的beforeCreate和created
   - onBeforeMount：挂载前，vue实例还未挂载到页面
   - onMounted：挂载后，vue实例已经挂载完成，可以操作DOM
   - onBeforeUpdate：更新前数据已是最新的，但是还未更新到页面
   - onUpdated：更新后，页面和数据都是最新的
   - onBeforeUnmount：组件将要卸载时调
   - onUnmounted：组件已经卸载了
   - onActivated：缓存的组件被激活时调用

## computed和watch的区别

   - computed：具有缓存功能，不支持异步，只有依赖的属性改变时才会重新计算，应用于需要依赖多个数据计算新值时，如过滤、排序
   - watch：不具备缓存功能，支持异步，一旦监听的数据发生变化，就会立即触发，应用于对数据进行复杂处理或执行异步操作，如网络请求

## Vue组件通信

   - 父传子
      - props
      - $chanildren
      - $refs
   
   - 子传父
      - $emit
      - $parent
      - 全局事件总线
   
   - 兄弟组件
      - provied
      - inject
      - 全局事件总线
      - vuex

## 常见的事件修饰符及其作用

   - .stop 阻止冒泡
   - .prevent 阻止默认事件
   - .capture 于事件冒泡的方向相反，事件捕获由外到内
   - .self 只会触发自己范围内的事件，不包含子元素
   - .one 只会触发一次

## v-if和v-show的区别

   - v-if是直接删除DOM，消耗比较大，
   - v-show是使用display：none控制显隐。切换频率较高时使用

## v-html的原理

   会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHtml为v-html的值

## v-model是如何实现的，语法糖实际是什么

   - 当作用在表单上：通过v-bind：value绑定数据，v-on：input来监听数据变化并修改value，testValue = $event.target.value
   - 当作用在组件上：本质上是父子通信语法糖，使用prop和$emit实现

## data为什么是一个函数而不是对象

   如果data是一个对象，就会造成多个组件引用同一个实例造成数据污染，如果是一个函数返回值，那每个组件都会有自己的私有数据空间，不会干扰其他组件的运行。

## mixin和mixins区别

   - mixin是全局混入，会影响到每个组件实例
   - mixins是局部混入，哪个组件使用就引入哪个组件中
   - 提高组件复用率
   - mixin和组件发生冲突时data的属性和methon中的方法优先于maxin
   - mixin的生命周期优先于组件中执行

## 路由的hash和history模式的区别

   - hash：url地址不带#号，通过hashChange事件监听hash变化，渲染不同的内容
   - history：使用pushState方法或者replaceState方法完成。history需要服务器端配置，不然刷新会出现404

## router和route的区别

   - route是路由信息，包括path、params、query、name等路由信息参数
   - router是路由实例，包含路由跳转方法、钩子函数等

## 如何设置动态路由

   - params传参
      - 路由配置：/index/:id
      - 路由跳转：this.$router.push({name:'index',params:{id:"zs"}})
      - 路由参数获取：$route.params.id
      - 最后形成的路由：/index/zs
   
   - query传参
      - 路由配置：/index
      - 路由跳转：this.$router.push({path:'index',query:{id:'zs'}})
      - 最后形成的路由：/index?id=zs

## 路由守卫

   - 全局前置钩子：beforeEach、beforeResolve，afterEach
   - 路由独享守卫：beforeEnter
   - 组件内钩子：beforeRouterEnter

## Vue中key的作用

   更高效的更新虚拟DOM，原理是vue在patch过程中通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，减少DOM操作

## 双向数据绑定的原理

   采用数据劫持结合发布者-订阅的方式。
   - vue2 通过Object.defineProperty方法给每个值添加上一个getter和setter，数据获取时触发getter，数据改变时触发setter
   - vue3 通过Proxy代理的方式比vue2更加完善，因为vue2的响应式只能监听到修改，不能监听到新增和删除，监听数组还要通过重写的方法才能手动更新

## vue是如何收集依赖的

   依赖收集发生在defineReactive()方法中，在方法内new Dep()实例化一个Dep()实例，然后在getter中通过dep.depend()方法对数据依赖进行收集，然后在setter中通过dep.notify()通知更新

## slot是什么

   一般在封装组件的时候使用，在组件内不知道以哪种形式来展示内容时可以用slot占位置。
   - 默认插槽 一个组件只有一个匿名插槽
   - 具名插槽 一个组件可以有多个具名插槽
   - 作用域插槽 可以将子组件内部的数据传递给父组件

## keep-alive的理解

   用于缓存组件其中两个生命周期actived、deactived配合keep-alive使用，上一个呢是缓存组件被激活时触发，下一个是缓存组件被停用时触发

## $nextTick

   DOM更新循环结束之后执行延迟回调

## vue模板编译原理
   将模板字符串解析成抽象语法树，然后生成可执行的渲染函数
   - 模板解析，使用parese函数将模板解析字符串解析成AST
   - 标记解析，使用optimize函数优化静态内容
   - 生成render函数，使用generate函数创建render函数