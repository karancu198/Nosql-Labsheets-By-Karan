

db.carts.insertOne({
 user:"Amit",
 items:[
  {product:"Mouse",price:500,qty:1},
  {product:"Keyboard",price:1000,qty:1}
 ]
});

db.carts.updateOne(
 {user:"Amit"},
 {$push:{items:{product:"Monitor",price:8000,qty:1}}}
);

db.carts.updateOne(
 {user:"Amit","items.product":"Mouse"},
 {$set:{"items.$.qty":3}}
);

db.carts.updateOne(
 {user:"Amit"},
 {$pull:{items:{product:"Keyboard"}}}
);

db.carts.aggregate([
 {$match:{user:"Amit"}},
 {$unwind:"$items"},
 {$group:{_id:"$user",total:{$sum:{$multiply:["$items.price","$items.qty"]}}}}
]);
