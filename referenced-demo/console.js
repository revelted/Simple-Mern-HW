/**
 * Instructions:
 * Run `node console.js` once you have a connection to the DB.
 * You should NOT run `yarn server` concurrently
 *
 * NOTE: All the models will be nested inside an object called db
 * EXAMPLE: db.BlogPosts, db.Comments
 */

const REPL = require('repl');
const db = require('./models');

const repl = REPL.start('> ');
repl.context.db = db;

repl.on('exit', function () {
  console.log('Ciao');
  process.exit();
});
