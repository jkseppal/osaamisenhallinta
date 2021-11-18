import React, { useState, useRef } from 'react'
import Togglable from './Togglabble'
import { useParams } from 'react-router-dom'
import { Modal, Table, Button } from 'react-bootstrap'
import PhysicalForm from './PhysicalForm'

const Person = ({ people, personUpdate }) => {
  const [showPhysForm, setShowPhysForm] = useState(false)
  
  const id = useParams().id
  const person = people.find(p => p.id === id)

  const physRef = useRef()
  const licRef = useRef()

  const handlePhysShow = () => setShowPhysForm(true)
  const handlePhysClose = () => setShowPhysForm(false)

  if (!person) {
    return null
  }

  return (
    <div>
      <h2>{person.surname} {person.firstname}</h2>
      <h3>{person.sosID}</h3>
      <Togglable buttonLabel='fyysinen toimintakyky' closeText='piilota' ref={physRef}>
        <Table striped hover>
          <thead>
            <tr>
              <td>päivämäärä</td>
              <td>pituus (cm)</td>
              <td>paino (kg)</td>
              <td>etunojapunnerrukset</td>
              <td>leuanvedot</td>
              <td>12 min juoksu (m)</td>
            </tr>
          </thead>
          <tbody>
            {person.physicals.map(p =>
              <tr key={p.date}>
                <td>{p.date}</td>
                <td>{p.height}</td>
                <td>{p.weight}</td>
                <td>{p.pushUps}</td>
                <td>{p.pullUps}</td>
                <td>{p.cooper}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button onClick={handlePhysShow}>lisää suoritus</Button>
        <Modal size="lg" show={showPhysForm} onHide={handlePhysClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title>Lisää tiedot fyysisestä toimintakyvystä</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PhysicalForm person={person} personUpdate={personUpdate} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePhysClose}>Peruuta</Button>
          </Modal.Footer>
        </Modal>
      </Togglable>
      <Togglable buttonLabel='lisenssit' closeText='piilota' ref={licRef}>
        <Table striped hover>
          <thead>
            <tr>
              <td>lisenssi</td>
              <td>myönnetty</td>
              <td>voimassaolo päättyy</td>
            </tr>
          </thead>
          <tbody>
            {person.licenses.map(l =>
              <tr key={l.content}>
                <td>{l.content}</td>
                <td>{l.initialDate}</td>
                <td>{l.expirationDate}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Togglable>
    </div>
  )
}

export default Person