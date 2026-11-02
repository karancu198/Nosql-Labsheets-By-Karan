// ==========================================
// LAB SHEET - 01
// NOSQL DATABASE DESIGN - MONGODB
// ==========================================


// Q1. Create StudentDB database
const studentDB = db.getSiblingDB("StudentDB");
studentDB.createCollection("Students");
print("Q1: StudentDB created successfully");
print(studentDB.getName());


// Q2. Create Students, Faculty and Courses collections
studentDB.createCollection("Faculty");
studentDB.createCollection("Courses");
print("Q2: Collections created");
print(studentDB.getCollectionNames());


// Q3. Insert a single student document
studentDB.Students.insertOne({
    RollNo: 101,
    Name: "Amit",
    Department: "Computer Science",
    Semester: 5,
    CGPA: 8.5
});
print("Q3: Single student inserted");


// Q4. Insert multiple student documents
studentDB.Students.insertMany([
    {
        RollNo: 102,
        Name: "Rahul",
        Department: "IT",
        Semester: 5,
        CGPA: 8.2
    },
    {
        RollNo: 103,
        Name: "Priya",
        Department: "Computer Science",
        Semester: 3,
        CGPA: 9.1
    },
    {
        RollNo: 104,
        Name: "Neha",
        Department: "Electronics",
        Semester: 5,
        CGPA: 7.8
    },
    {
        RollNo: 105,
        Name: "Karan",
        Department: "IT",
        Semester: 3,
        CGPA: 8.0
    }
]);
print("Q4: Multiple students inserted");


// Q5. Retrieve all student documents
print("Q5: All students");
printjson(studentDB.Students.find().toArray());


// Q6. Retrieve student using Roll Number
print("Q6: Student with RollNo 102");
printjson(studentDB.Students.findOne({ RollNo: 102 }));


// Q7. Retrieve students by Department
print("Q7: Computer Science students");
printjson(
    studentDB.Students.find({
        Department: "Computer Science"
    }).toArray()
);


// Q8. Display selected fields using projection
print("Q8: Name and Department");
printjson(
    studentDB.Students.find(
        {},
        { _id: 0, Name: 1, Department: 1 }
    ).toArray()
);


// Q9. Update department of a specific student
studentDB.Students.updateOne(
    { RollNo: 101 },
    { $set: { Department: "IT" } }
);
print("Q9: Department updated");


// Q10. Update semester of students belonging to a department
studentDB.Students.updateMany(
    { Department: "IT" },
    { $set: { Semester: 6 } }
);
print("Q10: Semester updated");


// Q11. Replace an existing student document
studentDB.Students.replaceOne(
    { RollNo: 105 },
    {
        RollNo: 105,
        Name: "Karan Kumar",
        Department: "Computer Science",
        Semester: 6,
        CGPA: 8.7
    }
);
print("Q11: Student document replaced");


// Q12. Add Email field to all documents
studentDB.Students.updateMany(
    {},
    { $set: { Email: "student@example.com" } }
);
print("Q12: Email field added");


// Q13. Remove an existing field from all documents
studentDB.Students.updateMany(
    {},
    { $unset: { CGPA: "" } }
);
print("Q13: CGPA field removed");


// Q14. Delete a specific student using Roll Number
studentDB.Students.deleteOne({ RollNo: 104 });
print("Q14: Specific student deleted");


// Q15. Delete multiple students satisfying a condition
studentDB.Students.deleteMany({ Semester: 6 });
print("Q15: Multiple students deleted");


// Q16. Count total documents
print("Q16: Total students");
print(studentDB.Students.countDocuments());


// Q17. Rename Students collection to StudentDetails
studentDB.Students.renameCollection("StudentDetails");
print("Q17: Collection renamed");
print(studentDB.getCollectionNames());


// Q18. Create Departments collection and insert sample data
studentDB.createCollection("Departments");

studentDB.Departments.insertMany([
    { DeptID: 1, Department: "Computer Science", HOD: "Mr. Sharma" },
    { DeptID: 2, Department: "IT", HOD: "Mr. Verma" },
    { DeptID: 3, Department: "Electronics", HOD: "Mrs. Gupta" }
]);

print("Q18: Departments created");
printjson(studentDB.Departments.find().toArray());


// Q19. Drop Departments collection
studentDB.Departments.drop();
print("Q19: Departments collection dropped");
print(studentDB.getCollectionNames());


// Q20. Drop StudentDB database
studentDB.dropDatabase();
print("Q20: StudentDB database dropped");


// Q21. Recreate StudentDB and insert sample data
studentDB.createCollection("Students");

studentDB.Students.insertMany([
    {
        RollNo: 201,
        Name: "Ankit",
        Department: "Computer Science",
        Semester: 5,
        CGPA: 8.6
    },
    {
        RollNo: 202,
        Name: "Riya",
        Department: "IT",
        Semester: 5,
        CGPA: 9.0
    },
    {
        RollNo: 203,
        Name: "Mohit",
        Department: "Electronics",
        Semester: 3,
        CGPA: 7.9
    }
]);

print("Q21: StudentDB recreated with sample data");
printjson(studentDB.Students.find().toArray());


// Q22. Perform CRUD operations using MongoDB Compass
/*
1. Open MongoDB Compass and connect to localhost:27017.
2. Open StudentDB database.
3. Select Students collection.
4. CREATE: Click Add Data -> Insert Document.
5. READ: View documents in the collection.
6. UPDATE: Select a document and edit its fields.
7. DELETE: Select a document and click Delete.
8. Compare the results with MongoDB Shell.
*/


// Q23. Manage databases and collections using Shell and Compass
/*
MongoDB Shell:
- Create database: use StudentDB
- Create collection: db.createCollection("Students")
- List collections: show collections
- Drop collection: db.Students.drop()

MongoDB Compass:
- Create database using Create Database.
- Create collection using Create Collection.
- View and manage documents through the interface.
- Delete collections using the collection options.
*/


// Q24. Compare MongoDB CRUD with SQL
/*
CREATE / INSERT:

MongoDB:
db.Students.insertOne({RollNo: 101, Name: "Amit"});

SQL:
INSERT INTO Students VALUES (101, 'Amit');


READ / SELECT:

MongoDB:
db.Students.find({RollNo: 101});

SQL:
SELECT * FROM Students WHERE RollNo = 101;


UPDATE:

MongoDB:
db.Students.updateOne(
    {RollNo: 101},
    {$set: {Name: "Rahul"}}
);

SQL:
UPDATE Students SET Name = 'Rahul'
WHERE RollNo = 101;


DELETE:

MongoDB:
db.Students.deleteOne({RollNo: 101});

SQL:
DELETE FROM Students WHERE RollNo = 101;


Differences:
1. MongoDB stores data in documents; SQL stores data in tables.
2. MongoDB uses BSON; SQL uses rows and columns.
3. MongoDB supports flexible schemas.
4. SQL generally uses predefined schemas.
*/


// Q25. Laboratory Report
/*
Title: NoSQL Database Design using MongoDB

Objective:
To learn database creation, collection management
and CRUD operations using MongoDB.

Software:
1. MongoDB Community Edition
2. MongoDB Shell (mongosh)
3. MongoDB Compass

Operations Performed:
1. Database creation
2. Collection creation
3. Insert documents
4. Retrieve documents
5. Update documents
6. Delete documents
7. Count documents
8. Rename and drop collections
9. Drop and recreate database
10. CRUD using MongoDB Compass

Observation:
All basic MongoDB database and collection operations
were performed successfully.

Conclusion:
Learned MongoDB database design, document storage,
collection management and CRUD operations.
*/

// ==========================================
// END OF LAB SHEET - 01
// ==========================================
