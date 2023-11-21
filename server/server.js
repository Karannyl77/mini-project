const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movie");
require("dotenv").config();
const app = express();

// connection with local mongodb server
// local mongodb url : mongodb://127.0.0.1:27017
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}
main().catch((err) => console.log(err));

// middlewares
app.use(express.json());
// enabeling cors for cross origin support.
app.use(cors());
// movie router
app.use("/api/booking", movieRouter);

// Handeling Routes of Cliant
app.use(express.static(path.resolve(__dirname, process.env.BUILD_DIR)));
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, process.env.BUILD_DIR, "index.html"));
});

// listening the server on port 8080.
app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port ${process.env.PORT}`);
});
