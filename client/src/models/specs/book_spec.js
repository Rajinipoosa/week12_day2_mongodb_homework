var Book = require('../book');
var assert = require('assert');

describe('Book', function() {
  var film;

  beforeEach(function() {
    book = new Book({
      title: 'Harry Potter',
      author: ['J.k Rowling']
    });
  });

  it('should have title Harry Potter', function() {
    assert.equal(book.title, 'Harry Potter');
  });
});
