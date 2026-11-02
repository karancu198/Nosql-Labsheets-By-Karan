

db.news.insertMany([
 {title:"Technology News",author:"Amit",location:"Delhi",category:"Tech",tags:["AI","Technology"],source:"News A"},
 {title:"Sports Update",author:"Riya",location:"Mumbai",category:"Sports",tags:["Cricket"],source:"News B"},
 {title:"Business News",category:"Business",tags:["Market"],images:["news.jpg"]},
 {title:"Local News",author:"Rahul",location:"Noida",category:"Local",source:"News C"}
]);

db.news.find({category:"Tech"});
db.news.find({tags:"Cricket"});
db.news.find({location:"Delhi"});
db.news.find({author:{$exists:true}});
db.news.find({images:{$exists:true}});
db.news.find({$or:[{category:"Sports"},{category:"Business"}]});
