## Installation

1. `cd` into this directory
2. `yarn`
3. `cp .env.sample .env`
4. Fill in the `ATLAS_URI` value inside `.env` with the MongoDB Atlas connection you used for the wynoverflow-c39 exercise.
5. We've created a REPL style console you can use by typing `node console.js`.
6. If you need to find a previous command you typed in from the repl, try up arrow or control up arrow, depending on your system.

## Instructions

IMPORTANT NOTE: JUST FOR THIS CONSOLE DEMO, the Question model is nested inside an object called db, so instead of just getting `Question` normally, you'll need to type in `db.Question`.

### Part 1

1. Try typing in `db.Question` in the console.
2. Try typing in `q = new db.Question`. What do you see?
3. Attempt to save the document by typing in `q.save().then(resp => console.log(resp)).catch(e => e)` What do you think happened?
   - HINT: If you need a hint, try typing in `q.validateSync()` in the repl and look for any hints in the error messages.
4. Now try adding the following: `q.question = 'What is the meaning of life?'` (Or whatever question you want).
5. Type `q` in the console. Anything look different?
6. Type `q.save().then(resp => console.log(resp)).catch(e => e)`. Same thing you typed in #3. What's different now?
7. Type `q` in the console again. Anything look different from #5? What do you think happened?
8. To see all the documents in your database, type: `db.Question.find().then(resp => console.log(resp))`

### Part 2

1. Now try typing in `q2 = new db.Question({question: 'Where am I?', upVotes: 10})`
2. Try typing in `q2.validateSync()` and see what's returned. Is that different from when we tried the same command in #3? If so, how?
3. We'll type the same command to save as previous, but with a different variable: `q2.save().then(resp => console.log(resp)).catch(e => e)`
4. To see all the documents in your database, type: `db.Question.find().then(resp => console.log(resp))`

### Talk this out with your small group

- What's the differences you see when we typed in `new` versus using the `.save()` method on the model?
- What were the different ways we could construct a document?
- What do you think `validateSync()` does? (Google it if you're still not 100% sure)
- What do you think we had to type those long parts including `.then` and `.catch` just to check on and write our database records? (HINT: try creating a new document and just use `.save()` without the `.then()`. What's different?)
- What questions do you have for us?
