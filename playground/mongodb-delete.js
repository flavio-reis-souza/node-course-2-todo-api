//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
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

  // Every which attends the criteria
  // db.collection('Todos').deleteMany({text : 'Something to do 2'}).then((result) => {
  //   console.log(result);
  // });

  // First which attends the criteria
  // db.collection('Todos').deleteOne({text : 'Something to do 2'}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Todos').findOneAndDelete({text : 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //By id
  db.collection('Users').findOneAndDelete({
    _id: new ObjectId("5b635d9118d990102021462a")
  }).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
  })

  client.close();
});
