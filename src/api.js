import Axios from 'axios'

let baseURL = "https://api.vue-tricks.com"

if (process.env.NODE_ENV === 'development')
    baseURL = "http://localhost:4000"

if (process.env.NODE_ENV === 'staging')
    baseURL = "http://api.staging.vue-tricks.com"

export const api = new Axios.create({
    baseURL: baseURL,
    timeout: 2000
})