
var env = process.env.NODE_ENV || 'development';
if (env === 'development'){
  process.env.PORT = 3000;
  //process.env.MONGODB_URI = 'mongodb://curso-node:!Mari8746@ds157509.mlab.com:57509/todos' || 'mongodb://localhost:27017/TodoApp';
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';

} else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//  process.env.MONGODB_URI = 'mongodb://curso-node:!Mari8746@ds137812.mlab.com:37812/todosbck' || 'mongodb://localhost:27017/TodoAppTest';
}
