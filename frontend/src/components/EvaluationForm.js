import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const EvaluationForm = ({ person, personUpdate, handleEvaluationClose }) => {
  const [date, setDate] = useState('')
  const [shooting, setShooting] = useState(0)
  const [basics, setBasics] = useState(0)
  const [leadership, setLeadership] = useState(0)
  const [leadershipByPeers, setLeadershipByPeers] = useState(0)
  const [physical, setPhysical] = useState(0)
  const [ownRequest, setOwnRequest] = useState(0)

  const handleUpdate = (event) => {
    event.preventDefault()
    const evaluation = {
      date: date,
      shooting: shooting,
      basics: basics,
      leadership: leadership,
      leadershipByPeers: leadershipByPeers,
      physical: physical,
      ownRequest: ownRequest,
      id: uuidv4()
    }
    const evaluations = person.evaluations.concat(evaluation)
    const personToUpdate = {
      ...person,
      evaluations: evaluations
    }
    console.log('person to be updated: ', personToUpdate)
    personUpdate(person.id, personToUpdate)
    setDate('')
    setShooting(0)
    setBasics(0)
    setLeadership(0)
    setLeadershipByPeers(0)
    setPhysical(0)
    setOwnRequest(0)
    handleEvaluationClose()
  }

  let zeroToTwo = []
  for (let i = 0; i < 3; i++) {
    zeroToTwo.push(i)
  }

  let zeroToThree = []
  for (let i = 0; i < 4; i++) {
    zeroToThree.push(i)
  }

  let zeroToFour = []
  for (let i = 0; i < 5; i++) {
    zeroToFour.push(i)
  }

  let zeroToFive = []
  for (let i = 0; i < 6; i++) {
    zeroToFive.push(i)
  }

  const handleShootingChange = (event) => {
    setShooting(event.target.value)
  }

  const handleBasicsChange = (event) => {
    setBasics(event.target.value)
  }

  const handleLeadershipChange = (event) => {
    setLeadership(event.target.value)
  }

  const handleLBPChange = (event) => {
    setLeadershipByPeers(event.target.value)
  }

  const handlePhysicalChange = (event) => {
    setPhysical(event.target.value)
  }

  const handleOwnRequestChange = (event) => {
    setOwnRequest(event.target.value)
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
                    type="date"
                    id="date"
                    value={date}
                    onChange={({ target }) => setDate(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Ampumataito</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={shooting}
                    onChange={handleShootingChange}
                  >
                    {zeroToFour.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Sotilaan perustaidot</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={basics}
                    onChange={handleBasicsChange}
                  >
                    {zeroToThree.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Sopivuus johtajaksi henkilökunnan arvioimana</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={leadership}
                    onChange={handleLeadershipChange}
                  >
                    {zeroToFive.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Vertaisarvio</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={leadershipByPeers}
                    onChange={handleLBPChange}
                  >
                    {zeroToTwo.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Fyysinen toimintakyky</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={physical}
                    onChange={handlePhysicalChange}
                  >
                    {zeroToThree.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>Halukkuus johtajakoulutukseen</Form.Label>
                </td>
                <td>
                  <Form.Control
                    className="select"
                    size="sm"
                    as="select"
                    value={ownRequest}
                    onChange={handleOwnRequestChange}
                  >
                    {zeroToFour.map(z => (
                      <option key={z}>{z}</option>
                    ))}
                  </Form.Control>
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="submit" id="evaluation-add-button">lisää</Button>
        </Form>
    </div>
  )
}

export default EvaluationForm