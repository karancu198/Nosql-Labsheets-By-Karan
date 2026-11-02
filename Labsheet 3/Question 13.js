

db.learning.insertMany([
 {student:"Amit",course:"MongoDB",instructor:"John",modules:5,completed:3,status:"In Progress"},
 {student:"Riya",course:"Python",instructor:"Smith",modules:6,completed:6,status:"Completed"},
 {student:"Rahul",course:"Java",instructor:"David",modules:8,completed:4,status:"In Progress"}
]);

db.learning.find({course:"MongoDB"});
db.learning.find({status:"Completed"});

db.learning.aggregate([
 {$project:{
  student:1,
  course:1,
  progress:{$multiply:[{$divide:["$completed","$modules"]},100]}
 }}
]);

db.learning.find({student:"Amit"});
