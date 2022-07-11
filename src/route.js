const {
  addBooks, getAllBooks, getDetailBooks, editBooks, deleteBooks,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBooks,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooks,
  },
];

module.exports = routes;
