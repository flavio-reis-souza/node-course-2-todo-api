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

  //Update By id
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId("5b63579037cb170f1ae9c3bf")
  // }, {
  //   $set:{
  //     completed:true
  //   }
  // }, {
  //     returnOriginal:false
  // }).then((result) => {
  //     console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("5b635ab428f5200fc6c3206e")
  }, {
    $set:{
      name:'Flavio Reis de Souza'
    },
    $inc: {
      age:-1
    }
  }, {
      returnOriginal:false
  }).then((result) => {
      console.log(result);
  })

  client.close();
});
