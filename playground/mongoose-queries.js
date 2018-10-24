const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5bcfde6064c0ed16906621d1';

// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// }).catch((e) => {
//   console.log(e)
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => {
//   console.log(e)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// });

Todo.findById('5bcfa3d641a78f278086d1e8').then((user) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('User by id', user);
}).catch((e) => {
  console.log(e);
});