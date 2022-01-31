import React, { useState } from 'react'
import { Table, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const People = ({ people }) => {
  const [firstFilter, setFirstFilter] = useState('')
  const [surFilter, setSurFilter] = useState('')
  const [hetuFilter, setHetuFilter] = useState('')
  //const [showResults, setShowResults] = useState(false)

  let peopleByFirst = people.filter(p => p.firstname.toLowerCase().includes(firstFilter.toLowerCase()))

  let peopleBySur = peopleByFirst.filter(p => p.surname.toLowerCase().includes(surFilter.toLowerCase()))

  let peopleToShow = peopleBySur.filter(p => p.sosID.toLowerCase().includes(hetuFilter.toLowerCase()))

  /*if (peopleToShow.length < 6) {
    setShowResults(true)
  }*/

  /*if (peopleToShow.length >= 6) {
    setShowResults(false)
  }*/

  const handleFirstFilterChange = (event) => {
    setFirstFilter(event.target.value)
  }

  const handleSurFilterChange = (event) => {
    setSurFilter(event.target.value)
  }

  const handleHetuFilterChange = (event) => {
    setHetuFilter(event.target.value)
  }

  return (
    <div>
      <h2>Järjestelmästä löytyvät henkilöt:</h2>
      <table>
        <tbody>
          <tr>
            <td>Suodata tuloksia:</td>
          </tr>
          <tr>
            <td>Sukunimi:</td>
            <td>Etunimi:</td>
            <td>Hetu:</td>
          </tr>
          <tr>
            <td>
              <Form.Control
                size="sm"
                placeholder="hae..."
                type="text"
                value={surFilter}
                onChange={handleSurFilterChange}
              />
            </td>
            <td>
              <Form.Control
                size="sm"
                placeholder="hae..."
                type="text"
                value={firstFilter}
                onChange={handleFirstFilterChange}
              />
            </td>
            <td>
              <Form.Control
                size="sm"
                placeholder="hae..."
                type="text"
                value={hetuFilter}
                onChange={handleHetuFilterChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {peopleToShow.length < 6 && <Table striped hover>
        <thead>
          <tr>
            <td>Sukunimi</td>
            <td>Etunimi</td>
            <td>Hetu</td>
          </tr>
        </thead>
        <tbody>
          {peopleToShow.map(p =>
            <tr key={p.id}>
              <td>
                <Link to={`/people/${p.id}`}>{p.surname}</Link>
              </td>
              <td>
                <Link to={`/people/${p.id}`}>{p.firstname}</Link>
              </td>
              <td>
                <Link to={`/people/${p.id}`}>{p.sosID}</Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>}
      {peopleToShow.length >= 6 && <div>
        liikaa tuloksia, rajaa hakua
      </div>}
    </div>
  )
}

export default People