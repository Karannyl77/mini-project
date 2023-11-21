const model = require("../model/movie-schema");
const movieBookingModel = model.movieBookingModel;

// Create
// Creating a new movie Booking
exports.createMovieBooking = async (req, res) => {
  try {
    // create the instance of the schema
    const newMovie = await new movieBookingModel(req.body);
    await newMovie.save();
    res.status(200).json({ msg: "Inserted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Insertion Error!" });
  }
};

// Read
// Getting all bookings
exports.getAllMovieBookings = async (req, res) => {
  try {
    const bookedMovies = await movieBookingModel.find();
    res.status(200).json(bookedMovies);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error in Getting the movies!" });
  }
};

// Update
// Updating the Details of an existing movie Booking
exports.updateMovie = async (req, res) => {
  // Getting the id throug the parameter
  const id = req.params.id;
  try {
    const result = await movieBookingModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true, useFindAndModify: false } // This option returns the modified document
    );
    res.status(200).send("Updated Successfully");
  } catch (error) {
    res.status(400).send(error.message);
    console.log(err);
  }
};

// Delete
// Deleting a booking
exports.deleteMovie = async (req, res) => {
  // Getting the id throug the parameter
  const id = req.params.id;
  try {
    const result = await movieBookingModel.deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).send({ msg: "Movie Ticket deleted successfully." });
    } else {
      res
        .status(204)
        .send({ msg: "Movie Ticket does not found or not deleted." });
    }
  } catch (err) {
    res.status(400).send("Error While Deleting the movie", err.message);
    console.log(err);
  }
};
