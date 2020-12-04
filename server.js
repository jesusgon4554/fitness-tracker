//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//routes

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//connect to DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Workoutdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(()=> console.log("connected to Mongodb"))
  .catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
