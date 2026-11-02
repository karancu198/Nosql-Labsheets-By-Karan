

db.notifications.insertMany([
 {user:"Amit",message:"New message",type:"message",read:false},
 {user:"Riya",message:"Order shipped",type:"order",read:false},
 {user:"Amit",message:"System alert",type:"alert",read:true},
 {user:"Rahul",message:"New update",type:"system",read:false}
]);

db.notifications.find({user:"Amit",read:false});

db.notifications.updateOne(
 {_id:db.notifications.findOne({user:"Amit",read:false})._id},
 {$set:{read:true}}
);

db.notifications.find({user:"Amit"});
