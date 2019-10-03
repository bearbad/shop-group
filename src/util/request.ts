import axios from 'axios'

const request = axios.create({
  baseURL: "http://localhost:12009"
})

request.interceptors.request.use()

request.interceptors.request.use()

export default request