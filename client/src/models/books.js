var Book = require('./book');
var Review = require('./review');

var Books = function() {

  var review1 = new Review({
    comment: "IT'S HARRY FREAKIN POTTER OF COURSE I LOVE IT",
    rating: 4.44
         
  });

  var review2 = new Review({
      comment: "Beautiful book",
      rating: 4.25
      
    });
  var review3 = new Review({
     comment: "Not a good ending",
     rating: 4.00
          
        
  })

  var book1 = new Book({
    title: "Harry potter and Sorcerer's Stone",
    author: ["J.k Rowling", "Mary Granpre"]
    
  });

  var book2 = new Book({
    title: "Mockingjay",
        authors: ["Suzanne Collins"]
        
});
  var book3 = new Book({

    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"]
  })

  book1.addReview(review1);
  book2.addReview(review2);
   book3.addReview(review3);
  return [book1, book2,book3];
}

module.exports = Books;
