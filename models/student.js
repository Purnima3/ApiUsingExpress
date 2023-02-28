const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    UniversityRollNo: {
        type: String,
        required: true
    },
    course: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Student',studentSchema)