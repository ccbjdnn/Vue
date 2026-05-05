<script setup>
defineOptions({
  name: 'fatherComponent'
})
import { ref } from 'vue'
import SonCom1 from '@/components/son-com-1.vue'

const IQ = ref(250)
console.log(IQ);
console.log(IQ.value);
console.log(`----------`);

const study = () => {
  IQ.value++
}
const IQreduce = (val) => {
  IQ.value -= val
}

</script>

<template>
  <!-- 局部组件导入直接使用 -->
   <div class="box">
    <h1>我是父组件,我的IQ是 {{ IQ }}  <button @click="study">学习</button></h1>
    <!-- 添加属性方法传值 -->
    <SonCom1
    @play="IQreduce"
    money="1000w" 
    :sendIQ="IQ">
    </SonCom1>
   </div>
</template>