To run this exercise from the `/mern-curriculum` project folder, do the following:

```bash
$ cd express-review

# installs all the packages in package.json like express and nodemon
$ yarn

# run the server
$ yarn server
```

You should see "Server is running on port: 5000" in the terminal.

Then open your web browser to http://localhost:5000 and observe what you see.

Your task: Inside of `app.js`, add a comment above each line of code saying what each line does.

  <details><summary> Hint #1:</summary>

[The Express documentation](http://expressjs.com/en/4x/api.html#app) is going to be your friend here. Check their navigation bar to the left.

  </details>

  <details><summary> Hint #2:</summary>

`process.env.PORT || 5000` means: "in production (Heroku, AWS, or some other web host) use the production port, otherwise use port 5000 because we're in the development environment."

  </details>

Console log the `req` (request) and the `res` (response) objects inside your server code's `app.get` method for the / path. (The / path is often called the "root" path.) The server should restart on saving, because we're using `nodemon`. What do you think the `req` and `res` is returning back? Write your thoughts in `app.js`, above your `console.log` statements.

**NOTE: Stop the server once you are done with this exercise by pressing Control+C.**
