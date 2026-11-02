

db.tracking.insertOne({
 orderId:101,
 customer:"Amit",
 status:"Placed",
 history:[{status:"Placed",date:new Date()}]
});

db.tracking.updateOne(
 {orderId:101},
 {$set:{status:"Confirmed"},
  $push:{history:{status:"Confirmed",date:new Date()}}}
);

db.tracking.updateOne(
 {orderId:101},
 {$set:{status:"Shipped"},
  $push:{history:{status:"Shipped",date:new Date()}}}
);

db.tracking.updateOne(
 {orderId:101},
 {$set:{status:"Delivered"},
  $push:{history:{status:"Delivered",date:new Date()}}}
);

db.tracking.find({orderId:101});
