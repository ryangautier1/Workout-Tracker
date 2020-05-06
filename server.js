const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "workoutdb";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

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
})