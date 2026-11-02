// Enable sharding
sh.enableSharding("CollegeDB");

// Create collection
use CollegeDB

db.Students.insertMany(
    Array.from({length:25}, (_,i)=>({
        Student_ID:i+1,
        Name:"Student"+(i+1),
        Marks:70+i
    }))
);

// Enable sharding on collection
sh.shardCollection(
    "CollegeDB.Students",
    {Student_ID:"hashed"}
);

// Verify
sh.status();
db.Students.getShardVersion();
