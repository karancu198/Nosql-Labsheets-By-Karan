

db.products.insertMany([
 {name:"Dell Laptop",category:"Laptop",price:55000,ram:"16GB",storage:"512GB"},
 {name:"HP Laptop",category:"Laptop",price:60000,ram:"8GB",storage:"1TB"},
 {name:"Samsung",category:"Mobile",price:25000,camera:"50MP",battery:"5000mAh"},
 {name:"iPhone",category:"Mobile",price:70000,camera:"48MP"},
 {name:"Canon",category:"Camera",price:45000,megapixel:"24MP"}
]);

db.products.find({category:"Laptop",ram:"16GB"});
db.products.find({category:"Mobile",camera:"50MP"});
db.products.find({category:"Camera",megapixel:"24MP"});
db.products.find({price:{$lt:50000}});
