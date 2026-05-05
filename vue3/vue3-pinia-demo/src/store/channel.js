import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel',()=>{
  // 声明数据state
  const channelList = ref([])
  const getChannelList = async ()=>{
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    const {channels} = res.data.data
    channelList.value = channels
    console.log(channels)
  }
  // 声明方法
  return {
    channelList,
    getChannelList
  }
})

