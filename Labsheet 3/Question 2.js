db.events.insertMany([
 {user:"Amit",event:"login",date:new Date()},
 {user:"Riya",event:"logout",date:new Date()},
 {user:"Amit",event:"failed-login",date:new Date()},
 {user:"Amit",event:"failed-login",date:new Date()},
 {user:"Rahul",event:"file-upload",date:new Date()},
 {user:"Riya",event:"password-change",date:new Date()}
]);

db.events.find({event:"failed-login"});

db.events.aggregate([
 {$match:{event:"failed-login"}},
 {$group:{_id:"$user",count:{$sum:1}}},
 {$match:{count:{$gt:1}}}
]);

db.events.aggregate([
 {$group:{_id:"$event",count:{$sum:1}}},
 {$sort:{count:-1}}
]);
