---
title: element-plus
date: 2024-6-4
categories:
  - example
tags:
  - example
---

# element-plus
  <br/>
  <br/>

<script setup>
  import {ref ,reactive,onMounted}from 'vue'
 import { ElButton } from 'element-plus'
 function handleClick(){
   console.log('点击了按钮')
 }
</script>

<el-button type="primary" @click="handleClick">点击我</el-button>

<style>
</style>
