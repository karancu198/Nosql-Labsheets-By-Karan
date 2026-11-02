

db.reviews.insertMany([
 {product:"Laptop",customer:"Amit",rating:5,review:"Excellent"},
 {product:"Laptop",customer:"Riya",rating:4,review:"Good"},
 {product:"Mobile",customer:"Rahul",rating:3,review:"Average"},
 {product:"Mobile",customer:"Amit",rating:5,review:"Great"}
]);

db.reviews.find();

db.reviews.aggregate([
 {$group:{
  _id:"$product",
  averageRating:{$avg:"$rating"},
  totalReviews:{$sum:1}
 }}
]);
