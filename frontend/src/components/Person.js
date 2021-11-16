import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Person = ({ people, user }) => {
  const id = useParams().id
  const person = people.find(p => p.id === id)

  if (!person) {
    return null
  }

  return (
    <div>
      <h2>{person.surname} {person.firstname}</h2>
      <h3>{person.sosID}</h3>
    </div>
  )
}

export default Person