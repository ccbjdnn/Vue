<script setup>
defineOptions({
  name: 'watchComponent'
})
import { ref, watch } from 'vue'

const count = ref(0)
const id = ref([0,1,2,3,4,5,6,7,8,9,10])
const info = ref({
  name: 'ciallo',
  age: 18
})
// 监听count变化(单个变量)
watch(count, (newVal, oldVal) => {
  console.log(`count从 ${oldVal} 变化成 ${newVal}`)
})
// 监听id变化(数组)
// newVal===oldVal默认不会深拷贝
watch(id, (newVal) => {
  console.log(`数组变化成 ${newVal}`)
}, {deep: true,immediate: true})
//deep: true 表示会监听数组的每个元素变化,immediate: true 表示进页面立即执行回调函数
// 监听info变化(对象)
watch(
  () => info.value.age,
  () => console.log('info的age变化了')
)

const pushId = () => {
  id.value.push(id.value.length)
}
const popId = () => {
  id.value.pop()
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">+ 1</button>
  <button @click="count--">- 1</button>
  <hr>
  <h1>{{ id }}</h1>
  <button @click="pushId">添加id</button>
  <button @click="popId">删除id</button>
  <hr>
  <h1>{{ info.name }}</h1>
  <h1>{{ info.age }}</h1>
  <button @click="info.age++">增加年龄</button>
</template>
