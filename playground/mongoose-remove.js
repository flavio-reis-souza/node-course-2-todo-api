const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');
var id = "5b684180c76ad2095f8a8a69";

if(!ObjectID.isValid(id)){
  return console.log('Id not valid');
}

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findByIdAndRemove('5b86f664f093cd0bdd46234c').then((todo) => {
//   console.log(todo);
// });

// Todo.findOneAndRemove('5b86f66bf093cd0bdd46234e').then((todo) => {
//   console.log(todo);
// });
