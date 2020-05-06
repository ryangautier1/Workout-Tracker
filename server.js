const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes

//route for getting all workouts
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// route for getting workout by id
app.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then(data => {
      console.log(res.json(data));
      res.json(data);
    })
    .catch(err => {
      console.log("oops");
      res.json(err);
    });
});


app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: [req.body] } },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(data);
      }
    });
});

// route for posting new workout
app.post("/api/workouts", (req, res) => {
  db.Workout.create({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
});


// html routes
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}!`);
});
