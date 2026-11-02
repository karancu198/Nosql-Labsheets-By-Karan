// Connect to one node using mongosh
rs.initiate({
    _id:"rs0",
    members:[
        {_id:0, host:"localhost:27017"},
        {_id:1, host:"localhost:27018"},
        {_id:2, host:"localhost:27019"}
    ]
});

// Check replica set
rs.status();

// Insert on primary
use CollegeDB
db.Students.insertOne({
    Student_ID:101,
    Name:"Amit",
    Marks:85
});

// Check primary and secondary
rs.isMaster();
