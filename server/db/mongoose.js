var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
