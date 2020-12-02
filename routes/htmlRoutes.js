const router = require("express")
const Workout = require("../workoutModel.js")

app.get("/", function (req, res){
    res.sendFile("index.html");
})