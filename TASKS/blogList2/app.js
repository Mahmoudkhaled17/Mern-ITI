const express = require('express')
const mongoose = require('mongoose')




const app = express()

// MongoDB Connection
const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl, { family: 4 })

app.use(express.json())




// ============ ROUTES ============

app.use("/api/blogs",require("./router/blog"))

app.use("/api/user",require("./router/user"))



module.exports = app