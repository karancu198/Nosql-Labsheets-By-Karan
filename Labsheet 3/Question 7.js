

db.articles.insertMany([
 {title:"MongoDB Basics",author:"Amit",category:"Tech",tags:["database"],status:"published"},
 {title:"Python Guide",author:"Riya",category:"Coding",tags:["python"],status:"draft"},
 {title:"Java Tutorial",author:"Rahul",category:"Coding",tags:["java"],status:"published"}
]);

db.articles.find({status:"published"});
db.articles.find({status:"draft"});
db.articles.find({category:"Coding"});
db.articles.find({tags:"python"});
db.articles.find({author:"Amit",status:"published"});
