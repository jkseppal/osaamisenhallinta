import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const PhysicalForm = ({ person, personUpdate, handlePhysClose }) => {
  const [date, setDate] = useState('')
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [pushUps, setPushUps] = useState(0)
  const [pullUps, setPullUps] = useState(0)
  const [cooper, setCooper] = useState(0)

  const handleUpdate = (event) => {
    event.preventDefault()
    const physical = {
      date: date,
      height: height,
      weight:weight,
      pushUps: pushUps,
      pullUps: pullUps,
      cooper: cooper
    }
    console.log('person before: ', person)
    console.log('new physical: ', physical)
    console.log('old array: ', person.physicals)
    const physicals = person.physicals.concat(physical)
    console.log('new array: ', physicals)
    const personToUpdate = {
      ...person,
      physicals: physicals
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setDate('')
    setHeight(0)
    setWeight(0)
    setPushUps(0)
    setPullUps(0)
    setCooper(0)
    handlePhysClose()
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Form.Label>Päivämäärä</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="date"
                    value={date}
                    onChange={({ target }) => setDate(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Pituus</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="height"
                    value={height}
                    onChange={({ target }) => setHeight(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Paino</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="weight"
                    value={weight}
                    onChange={({ target }) => setWeight(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Etunojapunnerrukset</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="pushUps"
                    value={pushUps}
                    onChange={({ target }) => setPushUps(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Leuanvedot</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="pullUps"
                    value={pullUps}
                    onChange={({ target }) => setPullUps(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>12 min juoksu</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="cooper"
                    value={cooper}
                    onChange={({ target }) => setCooper(target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" id="login-button">lisää</Button>
        </Form>
    </div>
  )
}

export default PhysicalForm