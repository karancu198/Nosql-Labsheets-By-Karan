use CollegeDB

db.Orders.insertMany([
    {
        OrderID:1,
        Customer:{Name:"Amit", City:"Delhi"},
        Products:[{Name:"Laptop", Quantity:1, Price:50000}],
        Total:50000
    },
    {
        OrderID:2,
        Customer:{Name:"Rahul", City:"Mumbai"},
        Products:[{Name:"Phone", Quantity:2, Price:15000}],
        Total:30000
    },
    {
        OrderID:3,
        Customer:{Name:"Priya", City:"Delhi"},
        Products:[{Name:"Tablet", Quantity:1, Price:20000}],
        Total:20000
    },
    {
        OrderID:4,
        Customer:{Name:"Neha", City:"Pune"},
        Products:[{Name:"Laptop", Quantity:1, Price:45000}],
        Total:45000
    },
    {
        OrderID:5,
        Customer:{Name:"Karan", City:"Delhi"},
        Products:[{Name:"Phone", Quantity:1, Price:12000}],
        Total:12000
    }
]);

// Find customer orders
db.Orders.find({"Customer.Name":"Amit"});

// Update product quantity
db.Orders.updateOne(
    {OrderID:2},
    {$set:{"Products.0.Quantity":3, Total:45000}}
);

// Total order amount
db.Orders.aggregate([
    {$group:{_id:null, TotalAmount:{$sum:"$Total"}}}
]);

// Orders above 20000
db.Orders.find({Total:{$gt:20000}});
