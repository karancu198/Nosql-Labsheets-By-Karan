

db.blogs.insertMany([
 {title:"MongoDB",author:"Amit",category:"Tech",tags:["database","mongodb"],comments:["Good"] ,published:true},
 {title:"Python",author:"Riya",category:"Programming",tags:["python","coding"],comments:["Nice"],published:true},
 {title:"Java",author:"Rahul",category:"Tech",tags:["java","coding"],comments:[],published:false}
]);

db.blogs.find();
db.blogs.find({tags:"coding"});
db.blogs.find({category:"Tech"});
db.blogs.find({tags:"coding",category:"Tech"});
db.blogs.find({published:true});
