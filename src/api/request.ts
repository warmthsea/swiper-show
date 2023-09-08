import axios from 'axios'

export const baseURL = 'http://47.108.187.69:1000'

const service = axios.create({
  baseURL,
  timeout: -1,
  headers: {
    Authorization: '',
  },
})
service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
