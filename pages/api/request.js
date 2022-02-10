import axios from 'axios'

const service = axios.create({
  baseURL:"http://localhost:5555"
})

service.interceptors.request.use((config)=>{
  return config
},async (err) => {
  return Promise.reject(err)
})

export default service