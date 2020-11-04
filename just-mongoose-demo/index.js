require('dotenv').config();
const mongoose = require('mongoose');
/**
 * This particular schema comes from MongoDB Atlas' documentation.
 * The URL is here: https://docs.atlas.mongodb.com/sample-data/sample-mflix/
 */
// We do not want to put the ATLAS URI we want on
// GitHub! Be sure to remind your instructor for the connection string
// for this exercise.
const URI = process.env.ATLAS_URI;
const Schema = mongoose.Schema;
const movieSchema = new Schema({}, { strict: true });

// We'll make a model out of the movie schema above.
const Movie = mongoose.model('Movie', movieSchema);

// I treat the second parameter is boilerplate.
// They'll tell us to add it in logs if we don't.
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
// Open the connection to Mongoose. Give us a heads up when it's open.
connection.once('open', () => {
  console.log('MongoDB connected!');
});

/**
 * The following statement queries all records in the Movie
 * model, with a limit of 5. It will then return a promise.
 */
// Movie.find()
//   .limit(2)
//   .then((data) => {
//     // Once that promise is resolved, it will console.log the results...
//     console.log(data);
//     // ...then close the Mongoose connection.
//     connection.close();
//   });

// Or you can do it with a JS callback:
// Movie.find({}, (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result);
//     // See what happens when you do not comment out the next line.
//     // press control+C to break out of the node index.js script.
//     connection.close();
//   }
// }).limit(2);

// Or even async/await, provided you do it correctly
// async function findTwoMovies() {
//   try {
//     const result = await Movie.find().limit(2);
//     console.log(result);
//     connection.close();
//   } catch (e) {
//     console.error(e);
//   }
// }
// findTwoMovies();
