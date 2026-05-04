<!-- 加上setup允许script直接使用组合api -->
<script setup>
  import { onBeforeMount, onMounted,ref } from 'vue'

  // 这里可以直接使用组合api
  console.log('setup')

  onBeforeMount(() => {
    console.log('onBeforeMount');
  })

  let msg = ref('ciallo')
  const count = ref(0)
  const ciallo = () => {
    console.log(`ciallo ${count.value++}`)
    msg.value = `ciallo ${count.value}`
  }

</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="ciallo">+ 1</button>
</template>