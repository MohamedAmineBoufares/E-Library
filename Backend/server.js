// import
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import mongoData from './mongoData.js'

// app config
const app = express()
const port = process.env.PORT || 9000


// mid
app.use(cors())
app.use(express.json())

// db config
const mongoURI = 'mongodb+srv://admin:Admin123@cluster0.ypate.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB Connected');
})

// api routes
app.get('/', (req, res) => res.status(200).send('Hello ! 🚀'))

app.post('/new/book', (req, res) => {
    const dbData = req.body

    mongoData.create(dbData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.post('/update/book', (req, res) => {
    mongoData.updateOne(
        { _id: req.query.id },
        { $set: req.body },
        (err, data) => {
            if (err) {
                console.log('Error updating book...')
                console.log(err)

                res.status(500).send(err)
            } else {
                res.status(201).send(data)
                console.log(data)
            }
        }
    )
})

app.get('/get/allBooks', (req, res) => {
  
    mongoData.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            
            res.status(200).send(data)
        }
    })
})

app.delete('/delete/book', (req, res) => {
    const id = req.query.id

    mongoData.findByIdAndDelete({ _id: id }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send('deleted')
        }
    })
})


// listening
app.listen(port, () => console.log(`listening on loclahost: ${port}`))