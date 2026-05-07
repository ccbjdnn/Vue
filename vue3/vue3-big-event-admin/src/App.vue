<script setup>
  import { useUserStore } from '@/stores'
  const userStore = useUserStore()
</script>

<template>
<hr>
<hr>
<router-view></router-view>
<hr>
<hr>
  <h1>{{ userStore.token }}</h1>
  <el-button @click="userStore.setToken('123456')">login</el-button>
  <el-button @click="userStore.removeToken()">logout</el-button>
  <exam></exam>
</template>

<style scoped></style>
