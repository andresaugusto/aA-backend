const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const {
    handleValidateId,
    handleRecordExists
} = require('../middleware/custom-errors')




// GET ALL PROJECTS

//ASYNC/AWAIT
router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.find();
        // let projectsLastFirst = projects.reverse()
        // res.json(projectsLastFirst);
        res.json(projects);
    }catch(err){
        next(err)
    }
})

//SYNCHRONOUS
// router.get('/', (req, res, next) => {
//     Project.find()
//         .then(project => res.json(project))
//         .catch(next)
// })




// GET PROJECT BY ID

//ASYNC/AWAIT
router.get('/:id', handleValidateId, async (req, res, next) => {
    try{
        const project = await Project.findById(req.params.id)
        res.json(project)
    }catch(err){
        next(err)
    }
})

//SYNCHRONOUS
// router.get('/:id', handleValidateId, (req, res, next) => {
//     // console.log(req)
//     Project.findById(req.params.id)
//         .then(project => { res.json(project) })
//         .catch(next)
// })




// CREATE NEW PROJECT

//ASYNC/AWAIT
router.post('/', async (req, res, next) => {
    try{
        const project = Project.create(req.body)
        res.json(project)
    }catch(err){
        next(err)
    }
})

//SYNCHRONOUS
// router.post('/', (req, res, next) => {
//     Project.create(req.body)
//         .then((project) => { res.json(project) })
//         .catch(next)
// })




// DELETE PROJECT BY ID

//ASYNC/AWAIT
router.delete('/:id', handleValidateId, async (req, res, next) => {
    try{
        const project = await Project.findOneAndDelete({
            _id: req.params.id
        })
        handleRecordExists
        res.json(project)
    }catch(err){
        next(err)
    }
})

//SYNCHRONOUS
// router.delete('/:id', handleValidateId, (req, res, next) => {
//     Project.findOneAndDelete({
//       _id: req.params.id
//     })
//       .then(handleRecordExists)
//       .then((project) => res.json(project))
//       .catch(next)
//   })




// EDIT PROJECT BY ID

//ASYNC/AWAIT
router.put('/:id', handleValidateId, async (req, res, next) => {
    try{
        const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        handleRecordExists
        res.json(project)
    }catch(err){
        next(err)
    }
})
            
//SYNCHRONOUS
// router.put('/:id', handleValidateId, (req, res, next) => {
//     Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
//       new: true
//     })
//       .then(handleRecordExists)
//       .then((project) => res.json(project))
//       .catch(next)
//   })
            

module.exports = router