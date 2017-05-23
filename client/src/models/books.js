var Book = require('./book');
var Review = require('./review');

var Books = function() {

  
}
Books.prototype= {
  makeRequest: function(url, callback){
   var request = new XMLHttpRequest();
   request.open('GET',url);
   request.addEventListener("load",function (){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);
   });
   request.send();
 },
 makePostRequest: function(url, callback, payload){
     var request = new XMLHttpRequest();
     request.open('POST',url);
     request.setRequestHeader('Content-Type', 'application/json');
     request.addEventListener('load',function(){
       if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);

     })
       request.send(payload);
 },
all: function(callback){

  this.makeRequest('http://localhost:3000/api/books',
     
    function(results){
    console.log(results);
    var books = this.populateBooks(results);
    callback(results);
  }.bind(this));
},
populateBooks: function(results){
  var books = results.map(function(resultObject){
    return new Book(resultObject)
  })
   return books;

},
add: function(newBook,callback){
  var bookData = JSON.stringify(newBook);
  console.log(bookData);
  this.makePostRequest('http://localhost:3000/api/books',callback,bookData);
  
}

};
module.exports = Books;
