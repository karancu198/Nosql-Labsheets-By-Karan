use CollegeDB

db.Students.insertMany([
    {Student_ID:101, Name:"Amit", Course:"BCA", Semester:5, Marks:85},
    {Student_ID:102, Name:"Rahul", Course:"BBA", Semester:3, Marks:78},
    {Student_ID:103, Name:"Priya", Course:"BCA", Semester:5, Marks:92},
    {Student_ID:104, Name:"Neha", Course:"BCA", Semester:3, Marks:88},
    {Student_ID:105, Name:"Karan", Course:"BBA", Semester:5, Marks:75}
]);

// Display all
db.Students.find();

// Filter by course
db.Students.find({Course:"BCA"});

// Update marks
db.Students.updateOne(
    {Student_ID:101},
    {$set:{Marks:90}}
);

// Delete student
db.Students.deleteOne({Student_ID:105});

// Count documents
db.Students.countDocuments();
