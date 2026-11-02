use LabSheet3

db.students.insertMany([
 {id:1,name:"Amit",courses:["BCA","DBMS"],attendance:85,skills:["Java","MongoDB"],activities:["Quiz","Assignment"]},
 {id:2,name:"Riya",courses:["BCA"],attendance:65,skills:["Python"],activities:["Quiz"]},
 {id:3,name:"Rahul",courses:["MCA","DBMS"],attendance:90,skills:["Java","Python"],activities:["Project"]}
]);

db.students.find();
db.students.find({attendance:{$gte:75}});
db.students.find({activities:"Quiz"});
db.students.find({skills:"Java"});
db.students.find({courses:"BCA"});
