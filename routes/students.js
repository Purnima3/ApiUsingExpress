const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/', async(req,res) => {
    try{
           const students = await Student.find()
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const students = await Student.findById(req.params.id)
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const students = new Student({
        name: req.body.name,
        UniversityRollNo: req.body.UniversityRollNo,
        course: req.body.course
    })

    try{
        const a1 =  await students.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const students = await Student.findById(req.params.id) 
        students.course = req.body.course
        const a1 = await students.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router