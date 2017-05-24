var Books = require('../models/books');

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
        
          
        
          var authorsInput = document.createElement('input');
          authorsInput.setAttribute("name", "authors");
          form.appendChild(authorsInput);
        
          //append a button to submit the form
          var button = document.createElement('button');
          button.type = 'submit';
          button.innerText = 'Add Book';
          form.appendChild(button);
        
          //add event handler to the onSubmit event of the form
          form.onsubmit = function(e){
            e.preventDefault();
            var newBook = {
              title: e.target.title.value,
              
              authors: e.target.authors.value.split(',')
            }
        
            var books = new Books(); 

             books.add(newBook, function(data){
                 this.render(data);
               }.bind(this));
             }.bind(this)
        
          div.appendChild(form);
          body.insertBefore( div, body.firstChild );
        }
  }


module.exports = UI;
