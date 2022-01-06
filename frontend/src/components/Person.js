import React, { useState, useRef } from 'react'
import Togglable from './Togglabble'
import { useParams } from 'react-router-dom'
import { Modal, Table, Button } from 'react-bootstrap'
import PhysicalForm from './PhysicalForm'
import LicenseForm from './LicenseForm'
import GroupForm from './GroupForm'

const Person = ({ people, personUpdate, groupList }) => {
  const [showPhysForm, setShowPhysForm] = useState(false)
  const [showLisForm, setShowLisForm] = useState(false)
  //const [showGroupForm, setShowGroupForm] = useState(false)
  
  const id = useParams().id
  let person = people.find(p => p.id === id)

  const physRef = useRef()
  const licRef = useRef()
  const groupRef = useRef()

  const handlePhysShow = () => setShowPhysForm(true)
  const handlePhysClose = () => setShowPhysForm(false)

  const handleLisShow = () => setShowLisForm(true)
  const handleLisClose = () => setShowLisForm(false)

  //const handleGroupShow = () => setShowGroupForm(true)
  //const handleGroupClose = () => setShowGroupForm(false)

  if (!person) {
    return null
  }

  return (
    <div>
      <h2>{person.surname} {person.firstname}</h2>
      <h3>{person.sosID}</h3>
      <p>henkilöstöryhmä: {person.group}</p>
      <Togglable buttonLabel='muuta henkilöstöryhmää' closeText='piilota' ref={groupRef}>
        <GroupForm person={person} personUpdate={personUpdate} groupList={groupList} />
      </Togglable>
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
            <PhysicalForm person={person} personUpdate={personUpdate} handlePhysClose={handlePhysClose} />
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
        <Button onClick={handleLisShow}>lisää lisenssi</Button>
        <Modal size="lg" show={showLisForm} onHide={handleLisClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title>Lisää henkilölle lisenssi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LicenseForm person={person} personUpdate={personUpdate} handleLisClose={handleLisClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePhysClose}>Peruuta</Button>
          </Modal.Footer>
        </Modal>
      </Togglable>
    </div>
  )
}

export default Person