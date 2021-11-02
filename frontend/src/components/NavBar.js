import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ handleLogout }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavBarLink path='/home' text='etusivu' />
          <NavBarLink path='/add-person' text='lisää henkilö' />
          <NavBarLink path='/people' text='henkilöt' />
          <Button variant="outline-secondary" onClick={handleLogout}>kirjaudu ulos</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const NavBarLink = (props) => {
  return (
    <Nav.Link href="#" as="span">
      <Link to={props.path}>{props.text}</Link>
    </Nav.Link>
  )
}

export default NavBar