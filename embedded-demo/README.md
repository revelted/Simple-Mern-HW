## Installation

1. `cd` into this directory
2. `yarn`
3. `cp .env.sample .env`
4. Fill in the `ATLAS_URI` value inside `.env` with the MongoDB Atlas connection you used for the wynoverflow exercises you're doing this week.
5. Type in `node console.js` to start our command line REPL.

## Objective

1. Create a schema that includes embedded documents (subdocuments)
2. Build documents that contain subdocuments
3. Be able to update subdocuments on an existing document.

## Instructions

IMPORTANT NOTE: JUST FOR THIS CONSOLE DEMO, the Instructor model is nested inside an object called db, so instead of just getting Instructor normally, you'll need to type in db.Instructor.

Take a few minutes to familiarize yourself with your surroundings and navigate the file structure of this app, especially `models.js`. Take a look at our Instructor schema - what looks different from the schemas we've been looking at yesterday? That `phoneNumbers` field has square brackets on it. Arrays have square brackets. Hrm.

### Part 1

For this scenario, let's pretend we need to build an Instructor schema for Wyncode that contains contact information.

1. Try typing in `db.Instructor` in the console.
2. Type `cece = new db.Instructor({name: 'Cece', title: 'Head Instructor'})`. (Replace Cece with any instructor.)
3. Before we take a look at our model, what fields do you think will and won't be there. Type `cece` in the console.
4. Type `cece.emails.work = 'cece@wyncode.co'`
5. Type `cece` again. That's fine, I guess, but we need to add Cece's personal emails. Plural.
6. Type `cece.emails.personal = 'cece@aol.com'`, then type `cece` to see how the object changed.
7. Let's try adding a different email: `cece.emails.personal = 'cece@neopets.com'`. Before you type in `cece`, do you think there will be one email stored? Or two? Type `cece` to see if your correct!
8. Spoiler alert: the second email address wasn't added, it was replaced. Now we have to add the aol address again, along with the existing address. But how can we do that?
   - HINT: Those square brackets look like arrays -- and they behave like arrays too. What method do we use to add an item to an array?
   - Try `cece.emails.personal.push('cece@aol.com')`. The console should return `2`. Type `cece` again. Is that what you expected?
9. We need to add some phone numbers to the `phoneNumbers` field. Add the phone numbers `954-832-5555` and `954-289-5555` to the `phoneNumbers` field the same way you added an additional email in #8.
10. This all feels... strangely familiar to stuff we worked in Week 3. How is this different than tinkering around with a plain ol' JavaScript object? How is it similar?
11. We're not done yet! We need to save hits model to the database. How can we do that again?
    - HINT: Think back to [yesterday's saving documents demo](https://github.com/wyncode/mern-curriculum/tree/main/saving-mongoose-documents) - Part 1, step #6.
12. If you want to be confident you successfuly ran `.save()` on the object, you can check in Compass. You can also type in `db.Instructor.find().then(resp => console.log(resp))`.
13. But to nail the point home that the instructor is in the database and we're not using the JavaScript variable named `cece`, press Control+D to exit the repl.

### Part 2

We're now pretty confident that Cece is in the database. But oh no, Cece is demanding that all her personal emails be replaced with `cece@cece.cc`! _Oh, Cece._ It looks like we'll have to find her document in MongoDB, make an edit to that model, and then `.save()` again.

Let's load up the console again by typing `node console.js` and try the following:

1. Let's find Cece's document in the database: `db.Instructor.findOne({name: 'Cece'}).then(resp => cece2 = resp)`
   - TIME OUT! Let's talk out what just happened. We've been using `.find`, but this one is `.findOne()`. What's the difference? Try Googling!
   - That `resp => cece2 = resp` looks... weird. But keep in mind that if an arrow function only has one line, it will automatically `return` the value. So this is the same as writing a function declaration of `function(resp) { cece2 = resp; return cece2; }`.
2. Type `cece2` in the console. Is that what you expected?
3. Now to replace those personal emails. Go ahead and replace the personal email field with the new value.
   - HINT: Try `cece2.emails.personal = 'cece@cece.cc'`. As always, `cece` in the console will show the new value.
4. Save the modified object: `cece2.save().then(resp => console.log(resp)).catch(e => e)`
   - Do you think it saved a second copy or updated the first copy? Check for yourself. (See Part 1, #12.) Was your hunch correct?

**NOTE:** MongoDB documents have a size limit of 16MB. This means you can use subdocuments (or embedded documents) if they are small in number. Even if Cece had 20 personal email addresses, MongoDB could handle that, no problem. If we had to save 300 comments though, that can't work; we'd have to think of a different way to do this.

The way we'll do that will be referencing. That'll come up soon.

### Talk this out with your small group

- What CRUD action did we perform in Part 2? How could you adapt that to a REST API if you needed to make one?
- So it turns out we can use arrays and objects inside our schemas! They'll call this various things in a Mongoose context: _sub-documents_ is one, _embedded documents_ are another.
- Assuming people in your breakout groups are in different final projects, do you see any parts of your final project schema where subdocuments could prove useful? If you're not coming up with any ideas, talk it out with your breakout group; maybe they have some ideas!
