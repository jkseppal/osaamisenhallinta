import React from 'react'
import NavBar from './NavBar'

const Home = ({ handleLogout }) => {
  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      Tervetuloa!
    </div>
  )
}

export default Home