import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import personService from '../services/people'
import userService from '../services/users'
import { Form, Button } from 'react-bootstrap'
import { notificationChange } from '../reducers/notificationReducer'
import { errorMessageChange } from '../reducers/errorReducer'
import Notification from './Notification'
import ErrorMessage from './ErrorMessage'
import tornileijona from '../tornileijona.svg'

const Login = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      personService.setToken(user.token)
      userService.setToken(user.token)
      console.log('user: ', user)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      console.log('user: ', window.localStorage.getItem('loggedUser'))
      setUser(user)
      setUsername('')
      setPassword('')
      window.location.assign('/home')
      dispatch(notificationChange('Onnistunut sisäänkirjautuminen!', 3))
    } catch (exception) {
      dispatch(errorMessageChange('Virheellinen käyttäjätunnus tai salasana', 5))
      console.log('invalid username or password')
    }
  }

  if (user) {
    return (
      <div className="container">
        <Notification />
        <ErrorMessage />
        <h2>Sisäänkirjautuminen onnistunut</h2>
      </div>
    )
  } else {
    return (
      <div className="container">
        <Notification />
        <ErrorMessage />
        <div className="login-box">
          <div className="login" align="center">
            <img src={tornileijona} alt="logo" width="100" />
            <h2>kirjaudu sisään</h2>
            <Form id="login" onSubmit={handleLogin}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Form.Label>käyttäjätunnus</Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        type="text"
                        id="username"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Label>salasana</Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        type="password"
                        id="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button type="submit" id="login-button">kirjaudu</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

export default Login