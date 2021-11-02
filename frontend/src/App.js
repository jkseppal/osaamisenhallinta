import React, { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  
  const handleLogout = async (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.removeItem('loggedUser')
    //dispatch(notificationChange('Olet kirjautunut ulos sovelluksesta', 5))
    window.location.assign('/')
    return false
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home handleLogout={handleLogout} />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
