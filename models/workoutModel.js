const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Exercise type is required"
    },

    name : {
      type: String,
      trim: true
    },

    duration: {
      type: Number
    },

    weight: {
      type: Number
    },
    
    distance: {
      type: Number
    },

    reps: {
      type: Number
    },

    sets: {
      type: Number
    },

    // {
    //   type: Schema.Types.ObjectId,
    //   ref: "Exercise"       
    // }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;