import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Notification from './Notification'
import ErrorMessage from './ErrorMessage'
import NavBar from './NavBar'

const PersonForm = ({ addPerson, user, handleLogout }) => {
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [sosID, setSosID] = useState('')

  const handlePersonAdd = (event) => {
    event.preventDefault()
    console.log('henkilölomake lähetetty')
    addPerson({
      firstname: firstname,
      surname: surname,
      sosID: sosID
    })
    setFirstname('')
    setSurname('')
    setSosID('')
  }

  let approved = true

  const SubmitButton = () => {
    if (!approved) {
      return (
        <Button type="submit" disabled>lisää henkilö</Button>
      )
    }
    return (
      <Button type="submit">lisää henkilö</Button>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout}/>
      <Notification />
      <ErrorMessage />
      <h2>Lisää henkilö:</h2>
      <Form onSubmit={handlePersonAdd}>
        <table>
          <tbody>
            <tr>
              <td>
                <Form.Label>etunimi</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={({ target }) => setFirstname(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Label>sukunimi</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={({ target }) => setSurname(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Label>hetu</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  id="sosID"
                  value={sosID}
                  onChange={({ target }) => setSosID(target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <SubmitButton />
      </Form>
    </div>
  )
}

export default PersonForm