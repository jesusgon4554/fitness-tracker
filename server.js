//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port
const PORT = process.env.PORT || 3000;

const Workout = require("./models/workoutModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//routes

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Workoutdb", { useNewUrlParser: true, useFindAndModify: false });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
