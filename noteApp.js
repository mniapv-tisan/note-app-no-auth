const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

const notes = [];


// GET ALL OF USER NOTES
app.get("/notes",function(req,res){
    res.json({
        notes
    })

})

// POST YOUR NOTES
app.post("/notes",function(req,res){
    const userNote = req.body.note;
    notes.push(userNote);
    res.status(200).json({
        message:"Notes posted successfully"
    })
})

// connect the html file
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "noteApp.html"))
})


app.listen(3000);