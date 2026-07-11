# 图片展示

<template>
  <div class="gallery-container">
    <img :src="withBase('/gallery-1.png')" alt="展示图片" class="gallery-image" />
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
</script>

<style>
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.gallery-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
</style>
