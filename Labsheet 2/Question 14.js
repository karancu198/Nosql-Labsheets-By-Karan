use CollegeDB

db.Students.insertMany([
    {Student_ID:101, Name:"Amit", Course:"BCA", Marks:85},
    {Student_ID:102, Name:"Rahul", Course:"BBA", Marks:78},
    {Student_ID:103, Name:"Priya", Course:"BCA", Marks:92},
    {Student_ID:104, Name:"Neha", Course:"BCA", Marks:88},
    {Student_ID:105, Name:"Karan", Course:"BBA", Marks:75}
]);

// Map function
var mapFunction = function() {
    emit(this.Course, {
        count:1,
        total:this.Marks
    });
};

// Reduce function
var reduceFunction = function(key, values) {
    var result = {count:0, total:0};

    values.forEach(function(value) {
        result.count += value.count;
        result.total += value.total;
    });

    return result;
};

// Execute MapReduce
db.Students.mapReduce(
    mapFunction,
    reduceFunction,
    {out:"CourseSummary"}
);

// Display average marks
db.CourseSummary.find().forEach(function(doc) {
    print(
        doc._id,
        "Students:", doc.value.count,
        "Average:", doc.value.total / doc.value.count
    );
});

// Total students
print("Total Students:", db.Students.countDocuments());
