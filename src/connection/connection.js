var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/db_office").then(()=> {
    console.log("Database connected")
})