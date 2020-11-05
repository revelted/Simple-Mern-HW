require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// accesses the .connection method within the Mongoose library
// to make a connection to your database
const connection = mongoose.connection;

connection.once('open', () => {
  console.log(
    'MongoDB database connection established successfully. Press ENTER to begin'
  );
});

const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    upVotes: { type: Number, default: 0, min: 0 },
    downVotes: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

// Time to create our models!
const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Question };
