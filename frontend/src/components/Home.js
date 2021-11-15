import React from 'react'
import NavBar from './NavBar'
import ErrorMessage from './ErrorMessage'
import Notification from './Notification'

const Home = ({ handleLogout }) => {
  
  
  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <ErrorMessage />
      <Notification />
      Tervetuloa!
    </div>
  )
}

export default Home