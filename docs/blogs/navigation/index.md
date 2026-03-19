---
layout: page
sidebar: false
---

<script setup>
import {ref ,onMounted}from 'vue'

const arrList = ref([
      {
        icon: 'https://www.jyshare.com/wp-content/uploads/2022/04/judge-logo.jpg',
        title: '菜鸟工具包',
        link: 'https://www.jyshare.com/'
      },
      {
        icon: 'https://uiverse.io/android-chrome-192x192.png',
        title: 'uiverse',
        link: 'https://uiverse.io/',
        desc:'炫酷的css样式库'
      },
      {
        icon: 'https://navnav.co/assets/logo-7d2e3e19995a6030c546114a9d5133d0c30ca2c8025e47c40b68d67347dbfa07.png',
        title: 'NavNav+',
        link: 'https://navnav.co/',
        desc:'各种各样的样式'
      },
      {
        icon: 'https://htmlrev.com/images/favicon.png',
        title: 'htmlrev',
        link: 'https://htmlrev.com/',
        desc:'丰富的前端模板'
      },
      {
        icon: 'https://driverjs.com/favicon.svg',
        title: 'driverjs',
        link: 'https://driverjs.com/',
        desc:'功能引导库'
      },
      {
        icon: 'https://openui.fly.dev/favicon.png',
        title: 'driverjs',
        link: 'https://openui.fly.dev/ai/aHzOZjDG4kJ4H34n3Ce48',
        desc:'前端代码ai生成界面'
      },
       {
        icon: 'https://openui.fly.dev/favicon.png',
        title: 'inspiration',
        link: 'https://csscoco.com/inspiration/#/./init',
        desc:'css布局、动画'
      },
      {
        icon: '  https://avatars.githubusercontent.com/u/21018904?s=48&v=4',
        title: 'GitHub-Chinese-Top-Charts',
        link: 'https://github.com/GrowingGit/GitHub-Chinese-Top-Charts',
        desc:'GitHub中文排行榜'
      },
      {
        icon: 'https://www.ghxi.com/favicon.ico',
        title: '软件下载大全',
        link: 'https://www.ghxi.com/?post=274',
      },
])
onMounted(()=>{
const table = document.getElementById('myTable');
    table.addEventListener('click', function (e) {
      const target = e.target;
      if (target.tagName === 'TD') {
        target.contentEditable = true;
      }
    });
})

function handleBlur(item1){
  console.log(item1)
}

</script>
  <div class="main">
    <div class="box" v-for="item in arrList">
      <a :href="item.link" target="_blank">
        <div class="box-info">
          <img class="info-icon" alt="" :src="item.icon"/>
          <span span class="info-name">{{item.title}}</span>
        </div>
        <div class="box-des" v-if="item.desc">
          {{item.desc}}
        </div>
      </a>
    </div>
   
</div>

  <style scoped>
    .main{
      width:100%;
      height:100%;
      padding:30px;
      display:grid;
      grid: auto / auto auto auto auto;
      grid-gap: 10px;
    }
.box{
 background-color:#AFEEEE;
 border-radius: 10px;
 padding: 10px;
}
.box:hover{
  background-color:#48D1CC;
}
.box-info{
  display: flex; 
  align-items: center;
  margin-bottom: 10px;
}
.info-icon{
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.info-name{
  font-size: 20px;
  font-weight: 600;
}
    </style>