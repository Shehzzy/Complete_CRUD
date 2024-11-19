var express = require('express')
require('./connection/connection')
var facultyModel = require('./Models/Faculty')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
app.use(cors())
app.use(bodyParser.json())


app.post("/createFaculty", (req, res) => {
    facultyModel.create(req.body)
        .then(() => {
            res.send("Faculty created successfully")
        })
})

app.get("/getFaculties", (req, res) => {
    facultyModel.find().then((resp) => {
        res.send(resp)
    })
})


app.delete("/deleteFaculty/:id", (req, res) => {
    facultyModel.findByIdAndDelete(req.params.id).then(() => {
        res.send("Data deleted successfully")
    })
})

app.get("/specificFaculty/:id", (req, res) => {
    facultyModel.findById(req.params.id).then((fac) => {
        res.send(fac);
    });
})

app.put("/updateFaculty/:id", (req, res) => {
    facultyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedFaculty) => {
            if (!updatedFaculty) {
                return res.status(404).send("Faculty not found");
            }
            res.send({ message: "Record updated", updatedFaculty });
        })
        .catch((err) => {
            console.error("Error updating faculty:", err);
            res.status(500).send("Error updating faculty");
        });
});


app.listen(5000)