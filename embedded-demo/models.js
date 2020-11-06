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
  console.log('MongoDB database connection established successfully');
});

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: String,
  date: Date,
});

const BlogPostSchema = new Schema({
  title: String,
  date: Date,
  body: String,
  // embed the comments in the post.
  // check the square brackets
  comments: [CommentSchema],
});

const InstructorSchema = new Schema({
  name: String,
  jobTitle: String,
  emails: {
    work: String,
    personal: [String],
  },
  phoneNumbers: [String],
});

// Time to create our models!
const Instructor = mongoose.model('Instructor', InstructorSchema);
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { BlogPost, Comment, Instructor };
