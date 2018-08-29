var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://curso-node:!Mari8746@ds157509.mlab.com:57509/todos' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
