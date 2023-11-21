const express = require("express");
const movieController = require("../controller/movie");

const router = express.Router();

// routes of different operations with movie booking.
router
  .post("/", movieController.createMovieBooking)
  .get("/", movieController.getAllMovieBookings)
  .patch("/:id", movieController.updateMovie)
  .delete("/:id", movieController.deleteMovie);

// exporting the router
module.exports = router;
