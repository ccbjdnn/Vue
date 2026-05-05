<script setup>
defineOptions({
  name: 'computedComponent'
})
import { computed, ref } from 'vue'

const count = ref([0,1,2,3,4,5,6,7,8,9,10])
const user = ref(3)
const filterCount = computed(() => count.value.filter(item => item >= user.value))
const add = () => { count.value.push(count.value.length) }
const useradd = () => { user.value >= count.value.length ? user.value = count.value.length : user.value++ }
const userdec = () => { user.value <= 0 ? user.value = 0 : user.value-- }
</script>

<template>
  <h1>{{ filterCount }}</h1>
  <button @click="useradd">增加</button>
  <button @click="userdec">减少</button>
  <button @click="add">添加数据</button>
</template>
