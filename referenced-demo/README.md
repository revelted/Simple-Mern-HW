## Installation

1. `cd` into this directory
2. `yarn`
3. `cp .env.sample .env`
4. Fill in the `ATLAS_URI` value inside `.env` with the MongoDB Atlas connection you used for the wynoverflow exercises you're doing this week.
5. Type in `node console.js` to start our command line REPL.

## Objective

1. Create a schema that includes referenced data of another model. We can use the generic terms "parent schema" and "child schema."
2. Build documents that contain those references
3. Be able to flesh out documents from the child schema into our parent schema using `.populate()` and `.exec()`.

## Instructions

IMPORTANT NOTE: JUST FOR THIS CONSOLE DEMO, the BlogPost and Comment model is nested inside an object called db, so instead of just getting either model normally, you'll need to type in db.BlogPost and db.Comment.

Take a few minutes to familiarize yourself with your surroundings and navigate the file structure of this app, especially `models.js`. Check out lines 27-30 of models.js. Yikes, what the heck is that?

For this scenario, we are building a blog post with comments. Unlike in our embedded-demo lab with Instructors and phone numbers, we may want to get comments by itself, without accessing the blog post. All documents have a size limit of 16MB, so this can also give us the capacity of adding more comments without having throwing any errors.

### Part 1

Let's build a blog post from our model.

1. Try typing in `db.BlogPost` and `db.Comment` in the console to verify our models are in the console.
2. Type in `post1 = new db.BlogPost()`, then type in `post1` to see what happened. What do this do again?
3. Let's add in the `title`, `date` and `body` fields:
   - `post1.title = 'My lunch'` (or any blog title you like, so long as it's a valid string.)
   - `post1.date = new Date()` (what does `new Date()` do?)
   - `post1.body = 'I had a cheese sandwich for lunch today and it was delicious.'` (Or whatever, you get the point.)
4. View `post1`. So far so good, right? Nothing particularly new.

### Part 2

Now, let's add some comments.

1. Create a document called `comment1` from the `db.Comment` model. What are the two fields inside that Comment model? Add some content inside.
   - I can add something like `comment1.date = '2020-01-01'` in the console, and when I view `comment1` it'll be stored as a date object rather than a string. (It's purple on my terminal; your mileage will vary.)
   - HINT: `comment1 = new db.Comment({comment: 'first!', date: new Date()})` is one way to do things.
2. Try typing in `comment1` in the console. If you have `_id`, `date` and `comment` fields, you're on the right track.
3. Save it to your DB: `comment1.save().then(resp => console.log(resp))`

### Part 3

You could have hundreds of posts and thousands of comments! How would you know which one is related to which? Right now we don't have any way to associate `comment1` with `post1`.

1. Last example, you used `.push()` to add to an array, even if that array was part of the model. Do the same thing, adding `post1` to the `comments` field of `post1`. Like always, console out `post1` to see if it did the trick.
   - HINT: `post1.comments.push(comment1)` in the console.
2. Type `post1.save().then(resp => console.log(resp))` to save it to MongoDB.
3. Try adding a couple more comments to your post by repeating the instructions in Part 2, then saving to the database. You'll want to use new variables like `comment2`, `comment3`, etc.

### Part 4

Our goal now is to get all of the comment fields - not just `_id` out.

1. If you have Compass, take a look at the document in your `blogposts` collection, and particular the `comments` field.
   - Alternatively you can type the following in your console: `db.BlogPost.find({}).then(resp => console.log(resp))`
2. That's returning an array, so let's use a variation called `findOne` to get one document and store it in a variable called `dbpost`: `db.BlogPost.findOne({}).then(resp => dbpost = resp)`
3. View `dbpost` and `dbpost.comments` in the console. What do you see there? what do you think that is? It doesn't have our comments or dates, but it does return an `_id`, and we can work with that.
4. `db.BlogPost.findOne({}).populate('comments').exec((err,post) => console.log(post.comments))`. Type this one carefully. Once you type it out, what do you think this one does?

   - This is our craziest one to date. Let's look at it in a prettier format:

   ```js
   db.BlogPost.findOne({})
     .populate('comments')
     .exec((err, post) => console.log(post.comments));
   ```

### Talk this out with your small group

- Yikes! The way that we make these associate seem pretty intense. Which one do you like more personally? Why do you think the one you didn't like as much could be important?
- There are two new things we didn't talk about: `.populate` and `.exec`. Do some googling and see if you can explain what each of those two things do, _without reading off the page you found on Google._
- Assuming people in your breakout groups are in different final projects, do you see any parts of your final project schema where subdocuments could prove useful? If you're not coming up with any ideas, talk it out with your breakout group; maybe they have some ideas!

### Stretch goal

Exit the console, run `yarn server`. Take a look at `app.js`, and follow the instructions.
