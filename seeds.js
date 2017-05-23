use ratings_site;

db.books.insert([
  { 
    title: "Harry potter and Sorcerer's Stone",
    author: ["J.k Rowling", "Mary Granpre"],
    
    reviews: [{
      comment: "IT'S HARRY FREAKIN POTTER OF COURSE I LOVE IT",
      rating: 4.44
     }]
  },
  { 
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"],
    
    reviews: [{
      comment: "Beautiful book",
      rating: 4.25
      
    }]
  },
  { 
    title: "Mockingjay",
    authors: ["Suzanne Collins"],
    
    reviews: [{
      comment: "Not a good ending",
      rating: 4.00
      
    }]
  }]
);