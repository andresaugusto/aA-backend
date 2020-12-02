const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === 'production' 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/aa-portfolio'

mongoose.connect(mongoURI, {
    useFindAndModify: false, //ADDED JIC
    useCreateIndex: true, //ADDED JIC
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((instance) => 
console.log(`CONECTAO AL DB: ${instance.connections[0].name}`)
)
.catch((error) => 
console.log('Connection failed!', error)
)

module.exports = mongoose