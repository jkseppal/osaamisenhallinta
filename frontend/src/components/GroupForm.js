import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const GroupForm = ({ person, personUpdate, groupList }) => {
  const [newGroup, setNewGroup] = useState(person.group)

  const handleUpdate = (event) => {
    event.preventDefault()
    const personToUpdate = {
      ...person,
      group: newGroup
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setNewGroup(person.group)
  }

  return (
    <div>
      <Form onSubmit={handleUpdate}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Form.Label>uusi henkilöstöryhmä</Form.Label>
                </td>
                <td>
                  <Form.Control
                    as="select"
                    id="group"
                    value={newGroup}
                    onChange={({ target }) => setNewGroup(target.value)}
                  >
                    {groupList.map(g => (
                      <option key={g}>{g}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" id="group-update-button">päivitä</Button>
        </Form>
    </div>
  )
}

export default GroupForm