const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())


if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = encodeURIComponent(process.argv[2])


const url = `mongodb+srv://mahmoudkhaled1772001:${password}@cluster0.zrxpqva.mongodb.net/phonebookApp`
mongoose.connect(url)


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3
  },
  number: {
    type: String,
    validate: {
      validator: function(v) {
        // التحقق من أن الـ format صحيح
        return /^\d{2,3}-\d+$/.test(v)
        // ^\d{2,3}-\d+$
        // = 2-3 أرقام + شرطة + أرقام
      },
      message: 'phone number must be valid'
    }
  }
})

const Person = mongoose.model('Person', personSchema)



app.get('/api/persons', (req, res) => {
  Person.find({}) 
    .then(persons => res.json(persons))
})

app.post('/api/persons', (req, res) => {

    console.log("saving the new data")
  const person = new Person({
    name: req.body.name,
    number: req.body.number,
  })

  console.log(`${req.body.name} and ${req.body.number}`)
  
  person.save()  
    .then(savedPerson => res.json(savedPerson))
})


app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id', (req, res, next) => {
  if (!req.body.name || !req.body.number) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  Person.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, number: req.body.number },
    { new: true, runValidators: true }
  )
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})



app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).json({ error: 'person not found' })
      }
    })
    .catch(error => next(error))
})


app.get('/info', (req, res, next) => {
  Person.find({})
    .then(persons => {
      const date = new Date()
      const info = `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
      res.send(info)
    })
    .catch(error => next(error))
})


const errorHandler = (error, request, response, next) => {
  console.error('Error:', error.message)
  
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'invalid id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  
  response.status(500).json({ error: 'internal server error' })
}

app.use(errorHandler) 



 const PORT = 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })