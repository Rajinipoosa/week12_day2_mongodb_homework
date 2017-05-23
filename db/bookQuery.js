var MongoClient = require('mongodb').MongoClient;

var BookQuery = function(){
  this.url = "mongodb://localhost:27017/ratings_site"
}
BookQuery.prototype = {
  add: function(bookToAdd, onQueryFinished){
   MongoClient.connect(this.url, function(err,db){
     if(db){
      var collection = db.collection('books');
             collection.insert(bookToAdd);
             collection.find().toArray(function(err,docs){
              console.log(docs);
              onQueryFinished(docs);
             });
           }
         });
},
all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err,db)
    {
       if(db){
        var collection = db.collection('books');
        collection.find().toArray(function (err,docs){
          onQueryFinished(docs);

        })
       }
    });
  }
}
module.exports = BookQuery;