var Books = require('../models/books');

var UI = function() {
  var books = new Books();
  this.render(books);
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(li, review) {
    this.appendText(li, review.comment, 'Comment: ');
    this.appendText(li, review.rating, 'Rating: ');
    this.appendText(li, review.author, 'Author: ');
  },

  render: function(books) {
    var container = document.getElementById('books');

    for (var book of books) {
      var li = document.createElement('li');
      this.appendText(li, book.title, 'Book: ');
      
      
      for (var review of book.reviews){
        this.createReview(li, review);
      }

      container.appendChild(li);
    }
  }
}

module.exports = UI;
