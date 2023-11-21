const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// making a schema for storing the movies i mongodb database
const movieBookingSchema = new Schema({
  title: { type: String, requied: true },
  time_slot: { type: String, requied: true },
  seats: {
    A: { type: Number },
    B: { type: Number },
    C: { type: Number },
    D: { type: Number },
  }
});

// creating a movie model
exports.movieBookingModel = mongoose.model(
  "movieBookingModel",
  movieBookingSchema
);
