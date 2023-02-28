const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Student'

const app = express()

mongoose.connect(url, {wtimeoutMS:2500})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())

const studentrouter = require('./routes/students')
app.use('/students',studentrouter)

app.listen(9000, () => {
    console.log('Server started')
})