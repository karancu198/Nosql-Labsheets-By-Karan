

db.orders.insertMany([
 {customer:"Amit",products:[{name:"Mouse",price:500,qty:2},{name:"Keyboard",price:1000,qty:1}]},
 {customer:"Riya",products:[{name:"Laptop",price:50000,qty:1}]},
 {customer:"Rahul",products:[{name:"Mobile",price:20000,qty:2}]}
]);

db.orders.find({customer:"Amit"});

db.orders.aggregate([
 {$unwind:"$products"},
 {$group:{_id:"$customer",total:{$sum:{$multiply:["$products.price","$products.qty"]}}}}
]);

db.orders.find({customer:"Riya"});
