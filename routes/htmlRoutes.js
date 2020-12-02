const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express;

module.exports = () => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"))    
    });

    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "./public/exercise.html"))
    });
    
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "./public/stats.html"))
    })
}