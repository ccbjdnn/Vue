<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
defineOptions({
  name: 'Son-1',
})
</script>

<template>
  <div>
    <h2>子组件1 - {{ counterStore.count }} - <button @click="counterStore.increment">&nbsp;+&nbsp;</button></h2>
  </div>
</template>