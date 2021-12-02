const { collection } = require("./movieModels");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`${movie.title} added into our DB!`);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne({ movieObj });
    console.log(`Movie removed from our DB!`);
  } catch (error) {
    console.log(error);
  }
};
