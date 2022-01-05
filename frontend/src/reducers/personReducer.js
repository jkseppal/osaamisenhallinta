import personService from '../services/people'
import userService from '../services/users'

const personReducer = (state = [], action) => {

  switch(action.type) {
    case 'INIT_PEOPLE':
      return action.data
    case 'ADD_PERSON':
      return [...state, action.data]
    case 'UPDATE_PERSON':
      const id = action.data.id
      const personToUpdate = state.find(p => p.id === id)
      const updatedPerson = {
        ...personToUpdate,
        surname: action.data.surname,
        firstname: action.data.firstname
      }
      return state.map(p =>
        p.id !== id ? p : updatedPerson)
    default:
      return state
  }
}

export const initializePeople = () => {
  return async dispatch => {
    const people = await personService.getPeople()
    dispatch ({
      type: 'INIT_PEOPLE',
      data: people
    })
    console.log('peopleinit tehty')
  }
}

export const createPerson = content => {
  return async dispatch => {
    personService.addPerson(content)
    dispatch ({
      type: 'ADD_PERSON',
      data: content
    })
  }
}

export const updatePerson = (id, content) => {
  return async dispatch => {
    const updatedPerson = await personService.updatePerson(id, content)
    dispatch ({
      type: 'UPDATE_PERSON',
      data: updatedPerson
    })
  }
}

export default personReducer