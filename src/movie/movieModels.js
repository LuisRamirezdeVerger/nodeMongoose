const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  actor: {
    type: String,
  },
  //Other key for the challenge
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
