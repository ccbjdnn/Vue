<script setup>
import { ref } from 'vue'
const count = ref(999)
const sayhi = () => {
  console.log('ciallo!');
}

//defineExpose设置属性允许访问
defineExpose({
  count,
  sayhi
})

</script>

<template>
  <div class="test">我是测试组件</div>
</template>