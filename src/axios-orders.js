import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://create-ur-burger.firebaseio.com/',
})

export default instance
