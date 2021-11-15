const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const personSchema = mongoose.Schema({
  surname: {
    type: String,
    required: true,
    minlength: 2
  },
  firstname: {
    type: String,
    required: true,
    minlength: 2
  },
  sosID: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
    unique: true
  }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person