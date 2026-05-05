<!-- 加上setup允许script直接使用组合api -->
<script setup>
  import { onBeforeMount,ref } from 'vue'

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
  <!-- ref 可以直接使用模板中的变量,不需要.value -->
  <h1>{{ msg }}</h1>
  <button @click="ciallo">+ 1</button>
</template>