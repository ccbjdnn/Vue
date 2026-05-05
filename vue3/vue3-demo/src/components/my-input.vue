<script setup>
const modelValue = defineModel()
</script>

<template>
<div>
  <input 
    type="text" 
    :value="modelValue" 
    @input="e => modelValue = e.target.value"
  >

  <!-- <input v-model="modelValue"/> -->
</div>
</template>



