const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  const body = request.body
  if (body.password.length < 7) {
    return response.status(400).json({ error: 'password must have at least 7 characters' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    ...body,
    passwordHash
  })

  const savedUser = await user.save()
  response.json(savedUser)
})

module.exports = usersRouter