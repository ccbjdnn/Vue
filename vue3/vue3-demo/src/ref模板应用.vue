<script setup>
import { ref, onMounted } from 'vue'
import TestCom from '@/components/test-com.vue'

const inputRef = ref(null)

// 组件挂载完成后,才能获取文本框的ref
onMounted(() => {
  console.log(inputRef);
  // inputRef.value.focus()
})
const focusInput = () => {
  inputRef.value.focus()
}

// 测试组件的ref
const testRef = ref(null)
const getTestRef = () => {
  console.log(`-------------------`);
  console.log(testRef.value);
  console.log(testRef.value.count);
  console.log(testRef.value.sayhi);
  console.log(`-------------------`);
}

</script>

<template>
  <div>
  <input ref="inputRef" type="text">
  <button @click="focusInput">文本框聚焦</button>
  </div>
  <TestCom ref="testRef"></TestCom>
  <button @click="getTestRef">得到测试组件</button>
</template>