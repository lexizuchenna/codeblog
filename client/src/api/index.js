const axios = require('axios')

const url = 'http://localhost:2000'

export const getPostByCategory = () => axios.get(`${url}/api/posts`)