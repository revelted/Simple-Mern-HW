/**
 * Instructions:
 * Run `node console.js` once you have a connection to the DB.
 *
 * NOTE: All the models will be nested inside an object called db
 * EXAMPLE: db.Questions
 */

const REPL = require('repl');
const db = require('./models');

const repl = REPL.start('> ');
repl.context.db = db;

repl.on('exit', function () {
  console.log('Exiting REPL');
  process.exit();
});
