import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const UnitEndDate = ({ date, person, personUpdate, unit, index }) => {
  const [newEndDate, setNewEndDate] = useState('')

  if (date) {
    return date
  }

  const handleUpdate = (event) => {
    event.preventDefault()
     const unitToUpdate = {
      ...unit,
      endDate: newEndDate
    }
    let newUnits = person.units
    newUnits[index] = unitToUpdate
    const personToUpdate = {
      ...person,
      units: newUnits
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <Form.Label>lisää päättymispäivä</Form.Label>
        <Form.Control
          type="date"
          value={newEndDate}
          onChange={({ target }) => setNewEndDate(target.value)}
        />
        <Button type="submit">lisää</Button>
      </Form>
    </div>
  )
}

export default UnitEndDate