const { Patient, Doctor } = require('./models');

const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

/**
 * PART 3:
 * Once you have successfully invoke .save on BOTH
 * your blog post and comment (and embedded the ID)
 * then try to list the contents of a post.
 */
Blogpost.find({}, function (err, post) {
  console.log(post);
});

/**
 * PART 4:
 * Write some JavaScript to list all the comments
 * for a post.
 */
BlogPost.findOne({})
  .populate('comments')
  .exec((err, post) => console.log(post.comments));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
