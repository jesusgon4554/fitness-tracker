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

//connect to DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    useFindAndModify: false
  // }).then(()=> console.log("connected to Mongodb"))
  // .catch((err) => console.log(err)
  });


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jesusgon4554:Sprinkles*54@cluster0.uezxk.mongodb.net/Workout?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

  
//routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
