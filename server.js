const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
// databazaga ulandi 

connectDB()

app.get('/', (req, res) => {
    res.send('salom dunyo')
})



const PORT = process.env.PORT || 4000

app.listen(PORT, console.log("server ishga tushdi"))