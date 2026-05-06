<script setup>
import { storeToRefs } from 'pinia'
import Son1 from '@/components/son1.vue'
import Son2 from '@/components/son2.vue'
// 引入channelStore仓库
import { useChannelStore } from '@/store/channel'
const channelStore = useChannelStore()
// 引入counterStore仓库
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
// console.log(counterStore.count)
// const { count, doubleCount } = counterStore---不能直接解,会丢失响应式数据
const { count } = storeToRefs(counterStore)
const { doubleCount } = counterStore//方法转响应式会失效

</script>

<template>
  <h1>App.vue根组件 - {{ count }} - <button @click="doubleCount">&nbsp;翻倍&nbsp;</button></h1>
  <son1></son1>
  <son2></son2>
  <hr>
  <button @click="channelStore.getChannelList">获取频道数据</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped></style>
