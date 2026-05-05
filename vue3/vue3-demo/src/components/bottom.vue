<script setup>
import { inject } from 'vue'

// 跨层接收普通数据
const themeColor = inject('themeColor')
console.log(themeColor);
// 跨层接收响应式数据
const count = inject('count')
console.log(count);
// 跨层接收方法
const addCount = inject('addCount')
const subCount = inject('subCount')
</script>

<template>
  <div>
    <h3>我是bottom组件 - {{ themeColor }} - {{ count }}</h3>
  </div>
  <div>
    <button @click="addCount(10)">增加</button>
    <button @click="subCount(10)">减少</button>
  </div>
</template>

<style scoped>
</style>