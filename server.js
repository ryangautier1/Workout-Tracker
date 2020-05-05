const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "workoutdb";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

// routes