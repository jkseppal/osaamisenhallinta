import axios from 'axios'
const baseUrl = '/api/users'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const createUser = async newObject => {
  const config = {
    headers: { Authorization: token }
  }
  
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getUsers = async () => {
  const response = await axios.get(baseUrl)
  console.log('käyttäjät haettu (service)')
  return response.data
}

export default {
  setToken: setToken,
  createUser: createUser,
  getUsers: getUsers
}