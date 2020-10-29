const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

/**
 * Technically, this is all we need to have to
 * run a functioning web server. Of course, it
 * doesn't DO anything meaningful. Adding some
 * routes will change this!
 */

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
