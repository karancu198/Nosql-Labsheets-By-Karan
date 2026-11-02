

db.inventory.insertMany([
 {product:"Laptop",stock:5,minStock:10,supplier:"Dell",restockDate:new Date()},
 {product:"Mouse",stock:50,minStock:10,supplier:"HP",restockDate:new Date()},
 {product:"Keyboard",stock:4,minStock:15,supplier:"Logitech",restockDate:new Date()},
 {product:"Monitor",stock:8,minStock:10,supplier:"Samsung",restockDate:new Date()}
]);

db.inventory.find({$expr:{$lte:["$stock","$minStock"]}});

db.inventory.updateOne(
 {product:"Laptop"},
 {$set:{stock:20,restockDate:new Date()}}
);

db.inventory.find();
