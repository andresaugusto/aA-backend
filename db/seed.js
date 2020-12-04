//require Project model
const Project =require('../models/project')

//require data
const seedData = require('./seeds.json')




//delete existing documents in the projects collection and add all new seed data
Project.deleteMany()
    .then(() => Project.insertMany(seedData))
    //log successful results
    .then(console.log)
    .catch(console.error)
    //disconnect from DB regardless of process outcome
    .finally(process.exit);