#!/bin/bash

# ==========================================
# NO SQL DATABASE DESIGN - LAB SHEET 5
# QUESTION 1 TO QUESTION 10
# TECHNOLOGY: RIAK KV
# ==========================================


# Q1. STUDENT RECORDS

curl -X PUT http://localhost:8098/buckets/students/keys/1 \
-H "Content-Type: application/json" \
-d '{"name":"Amit","course":"BCA","marks":85}'

curl -X PUT http://localhost:8098/buckets/students/keys/2 \
-H "Content-Type: application/json" \
-d '{"name":"Riya","course":"BCA","marks":90}'

# Retrieve
curl http://localhost:8098/buckets/students/keys/1

# Update
curl -X PUT http://localhost:8098/buckets/students/keys/1 \
-H "Content-Type: application/json" \
-d '{"name":"Amit","course":"MCA","marks":90}'

# Delete
curl -X DELETE http://localhost:8098/buckets/students/keys/2


# Q2. USER SESSION MANAGEMENT

curl -X PUT http://localhost:8098/buckets/user_sessions/keys/S101 \
-H "Content-Type: application/json" \
-d '{"user_id":101,"login_time":"10:00","status":"Active"}'

curl -X PUT http://localhost:8098/buckets/user_sessions/keys/S102 \
-H "Content-Type: application/json" \
-d '{"user_id":102,"login_time":"11:00","status":"Inactive"}'

# Retrieve sessions
curl http://localhost:8098/buckets/user_sessions/keys/S101
curl http://localhost:8098/buckets/user_sessions/keys/S102


# Q3. USER PROFILES AND PREFERENCES

curl -X PUT http://localhost:8098/buckets/profiles/keys/1 \
-H "Content-Type: application/json" \
-d '{"name":"Amit","email":"amit@gmail.com","city":"Delhi","language":"English","theme":"Dark","notifications":true}'

# Retrieve profile
curl http://localhost:8098/buckets/profiles/keys/1

# Update preferences
curl -X PUT http://localhost:8098/buckets/profiles/keys/1 \
-H "Content-Type: application/json" \
-d '{"name":"Amit","email":"amit@gmail.com","city":"Delhi","language":"Hindi","theme":"Light","notifications":false}'

# Retrieve updated profile
curl http://localhost:8098/buckets/profiles/keys/1


# Q4. SHOPPING CART APPLICATION

# Add products
curl -X PUT http://localhost:8098/buckets/cart/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":1,"price":500},{"product":"Keyboard","qty":1,"price":1000}],"total":1500}'

# Retrieve cart
curl http://localhost:8098/buckets/cart/keys/user1

# Update quantity
curl -X PUT http://localhost:8098/buckets/cart/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":2,"price":500},{"product":"Keyboard","qty":1,"price":1000}],"total":2000}'

# Remove Keyboard
curl -X PUT http://localhost:8098/buckets/cart/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":2,"price":500}],"total":1000}'

# Retrieve updated cart
curl http://localhost:8098/buckets/cart/keys/user1


# Q5. STRUCTURE OF KEY-VALUE DATA

# Store string
curl -X PUT http://localhost:8098/buckets/demo/keys/name \
-H "Content-Type: text/plain" \
-d "Amit"

# Store JSON document
curl -X PUT http://localhost:8098/buckets/demo/keys/student \
-H "Content-Type: application/json" \
-d '{"name":"Amit","marks":85}'

# Store list
curl -X PUT http://localhost:8098/buckets/demo/keys/subjects \
-H "Content-Type: application/json" \
-d '["Java","Python","DBMS"]'

# Retrieve values
curl http://localhost:8098/buckets/demo/keys/name
curl http://localhost:8098/buckets/demo/keys/student
curl http://localhost:8098/buckets/demo/keys/subjects


# Q6. CONSISTENCY IN RIAK KV

# Write using quorum
curl -X PUT "http://localhost:8098/buckets/consistency/keys/1?w=quorum" \
-H "Content-Type: application/json" \
-d '{"name":"Amit","marks":85}'

# Read using quorum
curl "http://localhost:8098/buckets/consistency/keys/1?r=quorum"

# Write using all replicas
curl -X PUT "http://localhost:8098/buckets/consistency/keys/2?w=all" \
-H "Content-Type: application/json" \
-d '{"name":"Riya","marks":90}'

# Read using one replica
curl "http://localhost:8098/buckets/consistency/keys/2?r=one"


# Q7. SCALING IN RIAK KV

# Insert multiple student records
for i in {1..10}
do
  curl -X PUT http://localhost:8098/buckets/students/keys/$i \
  -H "Content-Type: application/json" \
  -d "{\"id\":$i,\"name\":\"Student$i\"}"
done

# Insert teacher records
for i in {1..10}
do
  curl -X PUT http://localhost:8098/buckets/teachers/keys/$i \
  -H "Content-Type: application/json" \
  -d "{\"id\":$i,\"name\":\"Teacher$i\"}"
done

# Retrieve sample records
curl http://localhost:8098/buckets/students/keys/1
curl http://localhost:8098/buckets/teachers/keys/1


# Q8. MULTI-OPERATION SHOPPING CART

# Create cart
curl -X PUT http://localhost:8098/buckets/carts/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":1,"price":500}],"total":500}'

# Add another product
curl -X PUT http://localhost:8098/buckets/carts/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":1,"price":500},{"product":"Keyboard","qty":1,"price":1000}],"total":1500}'

# Update quantity and total
curl -X PUT http://localhost:8098/buckets/carts/keys/user1 \
-H "Content-Type: application/json" \
-d '{"items":[{"product":"Mouse","qty":2,"price":500},{"product":"Keyboard","qty":1,"price":1000}],"total":2000}'

# Retrieve cart
curl http://localhost:8098/buckets/carts/keys/user1


# Q9. QUERY BY DATA

# Store user records
curl -X PUT http://localhost:8098/buckets/users/keys/1 \
-H "Content-Type: application/json" \
-d '{"name":"Amit","city":"Delhi","age":21,"interest":"Gaming"}'

curl -X PUT http://localhost:8098/buckets/users/keys/2 \
-H "Content-Type: application/json" \
-d '{"name":"Riya","city":"Mumbai","age":22,"interest":"Music"}'

curl -X PUT http://localhost:8098/buckets/users/keys/3 \
-H "Content-Type: application/json" \
-d '{"name":"Rahul","city":"Delhi","age":20,"interest":"Gaming"}'

# Retrieve user records
curl http://localhost:8098/buckets/users/keys/1
curl http://localhost:8098/buckets/users/keys/2
curl http://localhost:8098/buckets/users/keys/3

# Query by attributes can be performed
# using application-level filtering or Riak 2i.


# Q10. SET OPERATIONS

# Create user 1 set
curl -X PUT http://localhost:8098/buckets/sets/keys/user1 \
-H "Content-Type: application/json" \
-d '{"interests":["Gaming","Music","Sports"]}'

# Create user 2 set
curl -X PUT http://localhost:8098/buckets/sets/keys/user2 \
-H "Content-Type: application/json" \
-d '{"interests":["Music","Sports","Reading"]}'

# Retrieve sets
curl http://localhost:8098/buckets/sets/keys/user1
curl http://localhost:8098/buckets/sets/keys/user2

# Add element
curl -X PUT http://localhost:8098/buckets/sets/keys/user1 \
-H "Content-Type: application/json" \
-d '{"interests":["Gaming","Music","Sports","Reading"]}'

# Remove element
curl -X PUT http://localhost:8098/buckets/sets/keys/user1 \
-H "Content-Type: application/json" \
-d '{"interests":["Gaming","Sports","Reading"]}'

# Membership and common elements
# Check membership and intersection
# using application-level JSON processing.


# ==========================================
#  LAB SHEET 5 - Q1 TO Q10
# ==========================================
