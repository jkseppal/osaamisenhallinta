import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PersonForm = ({ addPerson, user, groupList }) => {
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [sosID, setSosID] = useState('')
  const [group, setGroup] = useState('varusmies')

  const handlePersonAdd = (event) => {
    event.preventDefault()
    console.log('henkilölomake lähetetty')
    addPerson({
      firstname: firstname,
      surname: surname,
      sosID: sosID,
      group: group,
      licenses: [],
      physicals: []
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
            <tr>
              <td>
                <Form.Label>henkilöstöryhmä</Form.Label>
              </td>
              <td>
                <Form.Control
                  as="select"
                  id="group"
                  value={group}
                  onChange={({ target }) => setGroup(target.value)}
                >
                  {groupList.map(g => (
                    <option key={g}>{g}</option>
                  ))}
                </Form.Control>
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