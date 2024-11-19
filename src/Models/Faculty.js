var mongoose = require('mongoose')

var facultySchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
})

module.exports = mongoose.model("Faculty", facultySchema)