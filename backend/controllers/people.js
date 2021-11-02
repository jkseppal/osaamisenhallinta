const express = require('express')
const peopleRouter = express.Router()
const Person = require('../models/person')
const jwt = require('jsonwebtoken')

peopleRouter.get('/', async (request, response) => {
  if (request.token === undefined) {
    return response.status(401).json({ error: 'token missing' })
  }
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const people = await Person.find({})
  response.json(people.map(p => p.toJSON())) 
})

peopleRouter.post('/', async (request, response) => {
  const body = request.body
  if (request.token === undefined) {
    return response.status(401).json({ error: 'token missing' })
  }
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const person = new Person({
    ...body
  })
  if (body.surname === undefined) {
    response.status(400).end()
  } else if (body.firstname === undefined) {
    response.status(400).end()
  } else if (body.sosID === undefined) {
    response.status(400).end()
  } else {
    const savedPerson = await person.save()
    response.json(savedPerson.toJSON())
  }
})

module.exports = peopleRouter