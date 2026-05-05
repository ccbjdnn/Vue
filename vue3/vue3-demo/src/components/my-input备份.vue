<script setup>
// 接收父组件传递过来的modelValue属性值
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
<div>
  <input 
    type="text" 
    :value="modelValue" 
    @input="e => emit('update:modelValue', e.target.value)"
  >
</div>
</template>



