const mongoose = require("mongoose");
// const { collection } = require("./movieModels");
const Movie = require("./movieModels");
// const id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`${movie.title} added into our DB!`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
    console.log("Here's our list!");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne(movieObj);
    console.log(`Movie removed from our DB!`);
  } catch (error) {
    console.log(error);
  }
};
//CHECK FORM HERE!! YOU GOT THIS!!

exports.updateMovie = async (movieId, movieObj) => {
  try {
    // const movie = Movie.findById(movieId);
    console.log(await Movie.findByIdAndUpdate({ _id: movieId }, movieObj));
    console.log(`is the new name of our movie!`);
  } catch (error) {
    console.log(error);
  }
};
