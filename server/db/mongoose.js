var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
// mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};
