

db.visits.insertMany([
 {page:"Home",user:1,device:"Mobile",browser:"Chrome",location:"Delhi",time:new Date()},
 {page:"Home",user:2,device:"Desktop",browser:"Firefox",location:"Delhi",time:new Date()},
 {page:"About",user:1,device:"Mobile",browser:"Chrome",location:"Noida",time:new Date()},
 {page:"Products",user:3,device:"Tablet",browser:"Chrome",location:"Delhi",time:new Date()},
 {page:"Home",user:4,device:"Mobile",browser:"Chrome",location:"Meerut",time:new Date()}
]);

db.visits.aggregate([
 {$group:{_id:"$page",visits:{$sum:1}}},
 {$sort:{visits:-1}}
]);

db.visits.aggregate([
 {$group:{_id:"$device",count:{$sum:1}}},
 {$sort:{count:-1}}
]);
