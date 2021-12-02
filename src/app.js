require("./db/connection");

const yargs = require("yargs");

const { addMovie, listMovies, deleteMovie } = require("./movie/movieMethods");

const app = async (args) => {
  switch (process.argv[2]) {
    case "add":
      addMovie({ title: args.title, actor: args.actor });
      break;
    case "list":
      listMovies();
      break;
    case "delete":
      deleteMovie({ title: args.title });
      break;
    default:
      console.log("Incorrect command");
      break;
  }
};

app(yargs.argv);
