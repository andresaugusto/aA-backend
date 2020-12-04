const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === "production" 
    ? process.env.DB_URL 
    : "mongodb://localhost/aa-portfolio"

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, //ADDED JIC
    useCreateIndex: true //ADDED JIC
})
.then((instance) => 
console.log(`CONECTAO AL DB: ${instance.connections[0].name}`)
)
.catch((error) => 
console.log('Connection failed!', error)
)

module.exports = mongoose