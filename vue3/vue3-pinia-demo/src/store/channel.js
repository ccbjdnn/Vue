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
// 本地后端测试
// axios.get('http://localhost:3000/api/user')
//   .then(res => {
//     console.log(res.data)
//   })

// axios.post('http://localhost:3000/api/login', {
//   username: 'admin',
//   password: '123456'
// }).then(res => {
//   console.log(res.data)
// })