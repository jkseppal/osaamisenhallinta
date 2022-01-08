import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TaskEndDate = ({ date, person, personUpdate, task, index }) => {
  const [newEndDate, setNewEndDate] = useState('')

  if (date) {
    return date
  }

  const handleUpdate = (event) => {
    event.preventDefault()
     const taskToUpdate = {
      ...task,
      endDate: newEndDate
    }
    let newTasks = person.tasks
    newTasks[index] = taskToUpdate
    const personToUpdate = {
      ...person,
      tasks: newTasks
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

export default TaskEndDate