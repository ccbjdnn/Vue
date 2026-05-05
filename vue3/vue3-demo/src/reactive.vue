<script setup>
defineOptions({
  name: 'reactiveComponent'
})
import { reactive } from 'vue'

// reactive 得是对象
const state = reactive({
  count: 0
})
</script>

<template>
  <h1>{{ state.count }}</h1>
  <button @click="state.count++">增加</button>
  <button @click="state.count--">减少</button>
</template>