// Create database
use LocalDB

// Create collection and insert
db.Students.insertMany([
    {id:1, name:"Amit", marks:85},
    {id:2, name:"Rahul", marks:78},
    {id:3, name:"Priya", marks:92}
]);

// Read
db.Students.find();

// Update
db.Students.updateOne(
    {id:1},
    {$set:{marks:90}}
);

// Delete
db.Students.deleteOne({id:2});

// Verify
db.Students.find();
