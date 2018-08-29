var mongoose = require('mongoose');

mongoose.Promisse = global.Promisse;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
