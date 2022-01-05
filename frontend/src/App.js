import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { notificationChange } from './reducers/notificationReducer'
import { createPerson, initializePeople, updatePerson } from './reducers/personReducer'
//import { initializeUsers } from './reducers/usersReducer'
import { errorMessageChange } from './reducers/errorReducer'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import People from './components/People'
import NavBar from './components/NavBar'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

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

  const personUpdate = async (id, personObject) => {
    try {
      console.log('id on personUpdate: ', id)
      console.log('personObject on personUpdate: ', personObject)
      await dispatch(updatePerson(id, personObject))
      await dispatch(initializePeople())
      dispatch(notificationChange('tiedot lisätty', 5))
    } catch (exception) {
      dispatch(errorMessageChange('tietojen lisäys epäonnistui', 5))
    }

  }

  const addPerson = async (personObject) => {
    try {
      console.log('yritys...')
      await dispatch(createPerson(personObject))
      await dispatch(initializePeople())
      dispatch(notificationChange('henkilö lisätty', 5))
    } catch (exception) {
      dispatch(errorMessageChange('henkilön lisääminen epäonnistui', 5))
    }
  }

  if (!user) {
    return (
      <Login />
    )
  }
  
  return (
    <div>
      <Router>
        <NavBar handleLogout={handleLogout} />
        
        <div className="container">
          <Notification />
          <ErrorMessage />
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
            <Route path="/people/:id">
              <Person
                people={people}
                personUpdate={personUpdate}
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
    </div>
  )
}

export default App
