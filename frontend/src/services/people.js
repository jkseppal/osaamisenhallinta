import axios from 'axios'
const baseUrl = '/api/people'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const addPerson = async newObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getPeople = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(baseUrl, config)
  console.log('henkilöt haettu (service)')
  return response.data
}

const updatePerson = async (id, newObject) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

export default {
  setToken: setToken,
  addPerson: addPerson,
  getPeople: getPeople,
  updatePerson: updatePerson
}