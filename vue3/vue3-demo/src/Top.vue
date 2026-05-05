<script setup>
import Center from '@/components/center.vue'
import { provide, ref } from 'vue'

// 跨层传递普通数据
const themeColor = 'pink'
provide('themeColor', themeColor)
// 跨层传递响应式数据
const count = ref(0)
provide('count', count)

//跨层传递方法
const addCount = (val) => {
  count.value += val
}
provide('addCount', addCount)
provide('subCount', (val) => {
  count.value -= val
})

setTimeout(() => {
  count.value += 10086
}, 1000)

</script>

<template>
  <div>
    <h1>我是Top组件</h1>
    <Center></Center>
  </div>
</template>