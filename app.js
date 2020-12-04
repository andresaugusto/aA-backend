//IMPORTS

//import express
const express = require('express')

//ability to create routes
const app = express()

//connection to DB
const mongoose = require('mongoose')

//parsing information into JSON
const bodyParser = require('body-parser')

//allow frontend app access
const cors = require('cors')

//hide DB connection credentials
require('dotenv/config')



//MIDDLEWARE

app.use(cors())

// app.use(bodyParser.json()) /* if express version < 4.16 ? */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//CONTROLLERS(ROUTES)

app.get('/', (req, res) => {
    res.send('dis da homepage')
});

const projectsController = require('./controllers/projects')
app.use('/projects', projectsController)



// CONNECT TO DB -> MOVED TO 'connection.js'
// // mongoose.connect(
// //     process.env.mongoURI,
// //     { useNewUrlParser: true, useUnifiedTopology: true },
// //     () => console.log('CONECTAO AL DB BB')
// // )



//SPECIFY PORT (IF NOT, 3000 WILL BE DEFAULTED)

app.set('port', process.env.PORT || 8000)



//create ability to listen to the server

// app.listen(8000) /*DEFAULT*/
app.listen(app.get('port'), () => {
    console.log(`🔥🔥 PORT: ${app.get('port')} 🔥🔥`)
})

