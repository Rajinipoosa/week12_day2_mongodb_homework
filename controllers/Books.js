var express = require('express');
var app = express();
var bookRouter = express.Router();

var books = require('../client/src/models/books')();
var book = require('../client/src/models/book');
var Review = require('../client/src/models/review');
var BookQuery = require('../db/bookQuery.js');
var query = new BookQuery();


bookRouter.get('/:id', function(req, res){
  res.json(books[req.params.id]);
});


bookRouter.get('/', function(req, res) {
  query.all(function(books){
    res.json(books);
  })
});


bookRouter.put('/:id', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author
  });
  books[req.params.id] = book;
  res.json({data: books});
});


bookRouter.post('/', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author 
  });
  query.add(book,function(results){
    res.json(results);

  })

  
});


bookRouter.delete('/:id', function(req, res) {
  books.splice(req.params.id, 1);
  res.json({data: books});
});


bookRouter.post('/:id/reviews', function(req, res) {
  var book = books[req.params.id];
  var review1 = new Review({
    comment: "good",
    rating: 6,
    author: "J.k Rowling"
  });
  book.addReview(review1);
  res.json({data: books});
});


module.exports = bookRouter;
