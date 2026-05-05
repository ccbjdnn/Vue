<script setup>
// 编译器宏接收
const inherit = defineProps({
  money: String,
  IQ: Number
})
console.log(inherit)
console.log(inherit.money)
console.log(inherit.IQ)

const emit = defineEmits(['play'])
const play = () => {
  emit('IQchange', 2.5)
}
</script>

<template>
  <div class="son"><h2>我是子组件1,我有 {{ inherit.money }} 元,我的IQ是 {{ inherit.IQ }}</h2>
    <button @click="play">颓废</button>
  </div>
</template>

<style scoped>
.son{
  color: red;
  border: 1px solid red;
  padding: 10px;
  width: 200px;
}
</style>
