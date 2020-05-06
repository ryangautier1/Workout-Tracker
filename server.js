const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes

//route for all workouts
app.get("/api/workouts", (req,res) => {
  db.workouts.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  })
});

// route for workout by id
app.get("/api/workouts/:id", (req,res) => {
  db.workouts.find({_id: mongojs.ObjectId(req.params.id)}, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  })
});

app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}!`);
});
