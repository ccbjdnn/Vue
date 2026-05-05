<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
defineOptions({
  name: 'Son-2',
})
</script>

<template>
  <div>
    <h2>子组件2 - {{ counterStore.count }} - <button @click="counterStore.decrement">&nbsp;-&nbsp;</button></h2>
    <h2>子组件2 - {{ counterStore.doubleCountGetter }}</h2>
  </div>
</template>