import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const UnitForm = ({ person, personUpdate, handleUnitClose }) => {
  const [initialDate, setInitialDate] = useState('')
  const [newUnit, setNewUnit] = useState('')

  const handleUpdate = (event) => {
    event.preventDefault()
    const unitToAdd = {
      initialDate: initialDate,
      unit: newUnit,
      id: uuidv4()
    }
    const units = person.units.concat(unitToAdd)
    console.log('new array: ', units)
    const personToUpdate = {
      ...person,
      units: units
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setInitialDate('')
    setNewUnit('')
    handleUnitClose()
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Form.Label>yksikkö</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="task"
                    value={newUnit}
                    onChange={({ target }) => setNewUnit(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>alkupäivämäärä</Form.Label>
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
            </tbody>
          </table>
          <Button type="submit" id="task-add-button">lisää</Button>
        </Form>
    </div>
  )
}

export default UnitForm