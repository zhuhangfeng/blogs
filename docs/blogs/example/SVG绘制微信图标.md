---
title: SVG绘制微信图标
date: 2024-6-8
categories:
  - example
tags:
  - example
---

# SVG绘制微信图标
  <br/>
  <br/>

  <script setup>
    
  </script>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <!--绿色大椭圆下的小尾巴-->
  <polygon points="70,92 85,97 65,107"
  style="fill:#84d845;"/>
  <!--绿色大椭圆-->
  <ellipse cx="100" cy="60" rx="50" ry="42" style="fill:#84d845;" />
  <!--灰色小椭圆下的小尾巴-->
  <polygon points="150,115 160,110 165,120"
  style="fill:#f1f2f4;"/>
  <!--灰色小椭圆-->
  <ellipse cx="135" cy="85" rx="40" ry="32" style="fill:#f1f2f4;" />
  <!--两只大眼睛-->
  <ellipse cx="82" cy="45" rx="5" ry="5" style="fill:#136f1a;" />
  <ellipse cx="115" cy="45" rx="5" ry="5" style="fill:#136f1a;" />
  <!--两只小眼睛-->
  <ellipse cx="120" cy="75" rx="4" ry="4" style="fill:#797d7e;" />
  <ellipse cx="145" cy="75" rx="4" ry="4" style="fill:#797d7e;" />
</svg>

<style scoped>
  
</style>

## 实现思路
  - xmlns="http://www.w3.org/2000/svg" 定义了该文档使用的 XML 命名空间为 SVG 标准命名空间，确保元素和属性按照 SVG 的规范来解释和处理。
  - polygon 元素定义了一些有特定顶点坐标的多边形，points="70,92 85,97 65,107"，其中70，92代表x轴，y轴坐标。fill填充颜色
  - ellipse 元素定义了椭圆，cx="100"，cy="60"，rx="50"，ry="42"，cx，cy定义坐标中心点， rx表示椭圆的水平半径，ry表示椭圆的垂直半径。fill填充颜色

## 代码实现

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <!--绿色大椭圆下的小尾巴-->
  <polygon points="70,92 85,97 65,107"
  style="fill:#84d845;"/>
  <!--绿色大椭圆-->
  <ellipse cx="100" cy="60" rx="50" ry="42" style="fill:#84d845;" />
  <!--灰色小椭圆下的小尾巴-->
  <polygon points="150,115 160,110 165,120"
  style="fill:#f1f2f4;"/>
  <!--灰色小椭圆-->
  <ellipse cx="135" cy="85" rx="40" ry="32" style="fill:#f1f2f4;" />
  <!--两只大眼睛-->
  <ellipse cx="82" cy="45" rx="5" ry="5" style="fill:#136f1a;" />
  <ellipse cx="115" cy="45" rx="5" ry="5" style="fill:#136f1a;" />
  <!--两只小眼睛-->
  <ellipse cx="120" cy="75" rx="4" ry="4" style="fill:#797d7e;" />
  <ellipse cx="145" cy="75" rx="4" ry="4" style="fill:#797d7e;" />
</svg>

```