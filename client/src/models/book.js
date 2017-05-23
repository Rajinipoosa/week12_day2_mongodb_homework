var Book = function(options) {
  this.title = options.title;
  this.authors = options.authors;
  this.reviews = options.reviews || [];
  
}

Book.prototype = {
  addReview: function(review) {
    this.reviews.push(review);
  }
}

module.exports = Book;
