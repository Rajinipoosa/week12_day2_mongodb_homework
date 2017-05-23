/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function() {
	  new UI();
	}
	
	window.addEventListener('load', app);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Books = __webpack_require__(2);
	
	var UI = function() {
	  var books = new Books();
	  books.all(function(books){
	     this.render(books);  
	    }.bind(this));
	
	    this.createForm();
	
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
	    
	  },
	
	  render: function(books) {
	    var container = document.getElementById('books');
	       container.innerHTML = "";
	    for (var book of books) {
	      var li = document.createElement('li');
	      this.appendText(li, book.title, 'Book: ');
	      this.appendText(li, book.author, 'Author: ');
	      
	      for (var review of book.reviews){
	        this.createReview(li, review);
	      }
	
	      container.appendChild(li);
	    }
	  },
	    createForm: function(){  //ADDED
	          //create the form and a div
	          var div = document.createElement('div');
	          var form = document.createElement('form');
	          var body = document.querySelector('body');
	        
	          //append input boxes to the form
	          var titleInput = document.createElement('input');
	          titleInput.setAttribute("name", "title");
	          form.appendChild(titleInput);
	        
	          
	        
	          var authorInput = document.createElement('input');
	          authorInput.setAttribute("name", "author");
	          form.appendChild(authorInput);
	        
	          //append a button to submit the form
	          var button = document.createElement('button');
	          button.type = 'submit';
	          button.innerText = 'Add Book';
	          form.appendChild(button);
	        
	          //add event handler to the onSubmit event of the form
	          form.onsubmit = function(e){
	            e.preventDefault();
	            var newFilm = {
	              title: e.target.title.value,
	              
	              author: e.target.author.value.split(',')
	            }
	        
	            var books = new Books(); 
	            books.add(newBook, function(data){
	              console.log(data);
	            });
	        
	          }
	        
	          div.appendChild(form);
	          body.insertBefore( div, body.firstChild );
	        }
	  }
	
	
	module.exports = UI;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Book = __webpack_require__(3);
	var Review = __webpack_require__(4);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Review = function(options) {
	  this.comment = options.comment;
	  this.rating = options.rating;
	  this.author = options.author;
	}
	
	module.exports = Review;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map