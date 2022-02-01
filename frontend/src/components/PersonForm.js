import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PersonForm = ({ addPerson, user, groupList, people }) => {
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [sosID, setSosID] = useState('')
  const [group, setGroup] = useState('varusmies')

  let reservedId = people.find(p => p.sosID === sosID)

  let approved = false
  if (!reservedId && firstname.length > 1 && surname.length > 1 && sosID.length === 11) {
    approved = true
  }

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
                  placeholder="esim. Matti Matias"
                  value={firstname}
                  onChange={({ target }) => setFirstname(target.value)}
                />
              </td>
            </tr>
            {firstname.length < 2 &&<tr>
              <td>
              </td>
              <td className="wrongValueText">
                syötä henkilölle etunimi
              </td>
            </tr>}
            <tr>
              <td>
                <Form.Label>sukunimi</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  id="surname"
                  placeholder="esim. Mallikas"
                  value={surname}
                  onChange={({ target }) => setSurname(target.value)}
                />
              </td>
            </tr>
            {surname.length < 2 &&<tr>
              <td>
              </td>
              <td className="wrongValueText">
                syötä henkilölle sukunimi
              </td>
            </tr>}
            <tr>
              <td>
                <Form.Label>hetu</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  id="sosID"
                  placeholder="esim. 010101A1111"
                  value={sosID}
                  onChange={({ target }) => setSosID(target.value)}
                />
              </td>
            </tr>
            {sosID.length !== 11 &&<tr>
              <td>
              </td>
              <td className="wrongValueText">
                virheellinen hetu
              </td>
            </tr>}
            {reservedId &&<tr>
              <td>
              </td>
              <td className="wrongValueText">
                tällä hetulla löytyy jo henkilö järjestelmästä
              </td>
            </tr>}
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