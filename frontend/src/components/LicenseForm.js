import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const LicenseForm = ({ person, personUpdate, handleLisClose }) => {
  const [initialDate, setInitialDate] = useState('')
  const [content, setContent] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  const handleUpdate = (event) => {
    event.preventDefault()
    const license = {
      initialDate: initialDate,
      content: content,
      expirationDate: expirationDate,
      id: uuidv4()
    }
    console.log('person before: ', person)
    console.log('new license: ', license)
    console.log('old array: ', person.licenses)
    const licenses = person.licenses.concat(license)
    console.log('new array: ', licenses)
    const personToUpdate = {
      ...person,
      licenses: licenses
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setInitialDate('')
    setContent('')
    setExpirationDate('')
    handleLisClose()
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Form.Label>Lisenssi</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="content"
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Myönnetty</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="date"
                    id="initialDate"
                    value={initialDate}
                    onChange={({ target }) => setInitialDate(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Voimassaolo päättyy</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="date"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={({ target }) => setExpirationDate(target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" id="license-add-button">lisää</Button>
        </Form>
    </div>
  )
}

export default LicenseForm