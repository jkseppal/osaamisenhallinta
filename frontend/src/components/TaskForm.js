import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const TaskForm = ({ person, personUpdate, handleTaskClose }) => {
  const [initialDate, setInitialDate] = useState('')
  const [newTask, setNewTask] = useState('')

  const handleUpdate = (event) => {
    event.preventDefault()
    const taskToAdd = {
      initialDate: initialDate,
      task: newTask,
    }
    const tasks = person.tasks.concat(taskToAdd)
    console.log('new array: ', tasks)
    const personToUpdate = {
      ...person,
      tasks: tasks
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setInitialDate('')
    setNewTask('')
    handleTaskClose()
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Form.Label>tehtävä</Form.Label>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    id="task"
                    value={newTask}
                    onChange={({ target }) => setNewTask(target.value)}
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

export default TaskForm