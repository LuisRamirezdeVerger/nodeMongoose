require("./db/connection");

const yargs = require("yargs");

const {
  addMovie,
  listMovies,
  deleteMovie,
  updateMovie,
} = require("./movie/movieMethods");

const app = async (args) => {
  switch (process.argv[2]) {
    case "add":
      addMovie({ title: args.title, actor: args.actor, genre: args.genre });
      break;
    case "list":
      listMovies();
      break;
    case "delete":
      deleteMovie({ title: args.title });
      break;
    case "update":
      updateMovie(
        { title: args.title },
        { actor: args.actor },
        { genre: args.genre }
      );
      break;
    default:
      console.log("Incorrect command");
  }
};

app(yargs.argv);
