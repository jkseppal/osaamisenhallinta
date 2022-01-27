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
  },
  group: {
    type: String
  },
  units: [
    {
      unit: {
        type: String
      },
      initialDate: {
        type: String
      },
      endDate: {
        type: String
      },
      id: {
        type: String
      }
    }
  ],
  tasks: [
    {
      task: {
        type: String
      },
      initialDate: {
        type: String
      },
      endDate: {
        type: String
      },
      id: {
        type: String
      }
    }
  ],
  licenses: [
    {
      initialDate: {
        type: String,
      },
      content: {
        type: String,
      },
      expirationDate: {
        type: String,
      },
      id: {
        type: String
      }
    }
  ],
  physicals: [
    {
      date: {
        type: String,
      },
      height: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      pullUps: {
        type: Number,
      },
      pushUps: {
        type: Number,
      },
      cooper: {
        type: Number,
      },
      id: {
        type: String
      }
    }
  ],
  evaluations: [
    {
      date: {
        type: String
      },
      shooting: {
        type: Number
      },
      basics: {
        type: Number
      },
      leadership: {
        type: Number
      },
      leadershipByPeers: {
        type: Number
      },
      physical: {
        type: Number
      },
      ownRequest: {
        type: Number
      },
      id: {
        type: String
      }
    }
  ]
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