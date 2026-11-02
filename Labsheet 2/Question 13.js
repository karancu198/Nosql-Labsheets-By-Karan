// Enable sharding
sh.enableSharding("CollegeDB");

// Create sample records
use CollegeDB

db.Students.insertMany(
    Array.from({length:30}, (_,i)=>({
        Student_ID:i+1,
        Name:"Student"+(i+1),
        Marks:60+i
    }))
);

// Shard the collection
sh.shardCollection(
    "CollegeDB.Students",
    {Student_ID:"hashed"}
);

// Check distribution and cluster
sh.status();
db.Students.getShardVersion();
