import React, { useState, useRef } from 'react'
import Togglable from './Togglabble'
import { useParams } from 'react-router-dom'
import { Modal, Table, Button } from 'react-bootstrap'
import PhysicalForm from './PhysicalForm'
import LicenseForm from './LicenseForm'
import GroupForm from './GroupForm'
import TaskForm from './TaskForm'
import TaskEndDate from './TaskEndDate'
import UnitForm from './UnitForm'
import UnitEndDate from './UnitEndDate'

const Person = ({ people, personUpdate, groupList }) => {
  const [showPhysForm, setShowPhysForm] = useState(false)
  const [showLisForm, setShowLisForm] = useState(false)
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [showUnitForm, setShowUnitForm] = useState(false)
  
  const id = useParams().id
  let person = people.find(p => p.id === id)

  const physRef = useRef()
  const licRef = useRef()
  const groupRef = useRef()
  const taskRef = useRef()
  const unitRef = useRef()

  const handlePhysShow = () => setShowPhysForm(true)
  const handlePhysClose = () => setShowPhysForm(false)

  const handleLisShow = () => setShowLisForm(true)
  const handleLisClose = () => setShowLisForm(false)

  const handleTaskShow = () => setShowTaskForm(true)
  const handleTaskClose = () => setShowTaskForm(false)

  const handleUnitShow = () => setShowUnitForm(true)
  const handleUnitClose = () => setShowUnitForm(false)

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
      <Togglable buttonLabel='yksiköt' closeText='piilota' ref={unitRef}>
        <Table striped hover>
          <thead>
            <tr>
              <td>yksikkö</td>
              <td>alkupäivämäärä</td>
              <td>loppupäivämäärä</td>
            </tr>
          </thead>
          <tbody>
            {person.units.map(u =>
              <tr key={u.initialDate}>
                <td>{u.unit}</td>
                <td>{u.initialDate}</td>
                <td><UnitEndDate date={u.endDate} person={person} unit={u} personUpdate={personUpdate} index={person.units.indexOf(u)} /></td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button onClick={handleUnitShow}>lisää tehtävä</Button>
        <Modal size="lg" show={showUnitForm} onHide={handleUnitClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title>Lisää henkilölle yksikkö</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UnitForm person={person} personUpdate={personUpdate} handleUnitClose={handleUnitClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUnitClose}>Peruuta</Button>
          </Modal.Footer>
        </Modal>
      </Togglable>
      <Togglable buttonLabel='tehtävät' closeText='piilota' ref={taskRef}>
        <Table striped hover>
          <thead>
            <tr>
              <td>tehtävä</td>
              <td>alkupäivämäärä</td>
              <td>loppupäivämäärä</td>
            </tr>
          </thead>
          <tbody>
            {person.tasks.map(t =>
              <tr key={t.initialDate}>
                <td>{t.task}</td>
                <td>{t.initialDate}</td>
                <td><TaskEndDate date={t.endDate} person={person} task={t} personUpdate={personUpdate} index={person.tasks.indexOf(t)} /></td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button onClick={handleTaskShow}>lisää tehtävä</Button>
        <Modal size="lg" show={showTaskForm} onHide={handleTaskClose} className="modal">
          <Modal.Header closeButton>
            <Modal.Title>Lisää henkilölle tehtävä</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TaskForm person={person} personUpdate={personUpdate} handleTaskClose={handleTaskClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleTaskClose}>Peruuta</Button>
          </Modal.Footer>
        </Modal>
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
            <Button variant="secondary" onClick={handleLisClose}>Peruuta</Button>
          </Modal.Footer>
        </Modal>
      </Togglable>
    </div>
  )
}

export default Person