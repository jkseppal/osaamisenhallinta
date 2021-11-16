import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { notificationChange } from './reducers/notificationReducer'
import { createPerson, initializePeople } from './reducers/personReducer'
//import { initializeUsers } from './reducers/usersReducer'
import { errorMessageChange } from './reducers/errorReducer'
import PersonForm from './components/PersonForm'
import People from './components/People'

const App = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  useEffect(() => {
    dispatch(initializePeople())
    console.log('henkilöt haettu')
  }, [dispatch])

  /*useEffect((user) => {
    if (user) {
      dispatch(initializeUsers())
      console.log('käyttäjät haettu')
    }
  }, [dispatch])*/

  let users = useSelector(state => state.users)
  let people = useSelector(state => state.people)
  
  const handleLogout = async (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.removeItem('loggedUser')
    dispatch(notificationChange('Olet kirjautunut ulos sovelluksesta', 5))
    window.location.assign('/')
    return false
  }

  const addPerson = async (personObject) => {
    try {
      console.log('yritys...')
      await dispatch(createPerson(personObject))
      dispatch(notificationChange('henkilö lisätty'))
    } catch (exception) {
      dispatch(errorMessageChange('henkilön lisääminen epäonnistui'))
    }
  }

  if (!user) {
    return (
      <Login />
    )
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home
              handleLogout={handleLogout}
              users = {users}
              people = {people}
            />
          </Route>
          <Route path="/add-person">
            <PersonForm
              addPerson={addPerson}
              user={user}
            />
          </Route>
          <Route path="/people">
            <People
              handleLogout={handleLogout}
              people={people}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
