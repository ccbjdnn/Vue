<script setup>
defineOptions({
  name: '生命周期apiComponent'
})
import { onMounted } from 'vue'
// beforecreate和created生命周期api放在setup中执行
const getlist = () => {
  setTimeout(() => {
    console.log('getlist')
  }, 1000)
}
getlist()
// 可以有多个onMounted回调函数
onMounted(() => {
  console.log('onMounted--1');
})
onMounted(() => {
  console.log('onMounted--2');
})



</script>

<template>
  <div>
  </div>
</template>