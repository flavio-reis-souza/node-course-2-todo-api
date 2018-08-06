const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');
var id = "5b684180c76ad2095f8a8a69";
if(!ObjectID.isValid(id)){
  return console.log('Id not valid');
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//    console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not Found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
