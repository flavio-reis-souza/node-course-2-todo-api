var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  },
  location:{
    type: String
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=> {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// })

var otherTodo = new Todo({
  text: 'Feed the dog',
  completed: true,
  completedAt: 123,
  location:'Blumenau'
});

otherTodo.save().then((doc)=> {
  console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
  console.log('Unable to save todo')
}, (e) => {
  conseole.log('Unable to save', e);
})
mongoose.close();
