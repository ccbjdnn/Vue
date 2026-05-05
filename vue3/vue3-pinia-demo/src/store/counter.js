import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter',()=>{
  // 声明数据state
  const count = ref(0)
  //声明方法action
  const increment = () => count.value++
  const decrement = () => count.value--
  const doubleCount = () => count.value *= 2
  // 声明getter
  const doubleCountGetter = computed(() => count.value * 2)

  // 返回数据和方法
  return {
    count,
    doubleCountGetter,
    increment,
    decrement,
    doubleCount
  }
})
