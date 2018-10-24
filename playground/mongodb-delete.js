// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({ name: 'Jason He' });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bce72947eeb1873ea013914') }).then((result) => {
    console.log(JSON.stringify(result), undefined, 2);
  });

  client.close();
});