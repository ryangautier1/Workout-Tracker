const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },

  totalDuration: {
    type: Number,
    default: 0
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

// WorkoutSchema.methods.getDuration = function() {
//   var total = 0;
//   this.exercises.forEach(exercise => {
//     total += exercise.duration;
//   });
//   this.totalDuration = total;
//   return this.totalDuration;
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;