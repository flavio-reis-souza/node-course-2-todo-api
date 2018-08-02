const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb').MongoClient;
// var obj = new ObjectID();

const assert = require('assert');
// console.log(obj);

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');
  const db = client.db(dbName);
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').insertOne({
  //   text: 'Something to do 2',
  //   completed: false
  // }, (err, result) =>{
  //   if(err){
  //      return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Henrique Reis de Souza',
  //   age: 14,
  //   location: 'Blumenau'
  // }, (err, result) =>{
  //   if(err){
  //      return console.log('Unable to insert user',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });

  client.close();
});
