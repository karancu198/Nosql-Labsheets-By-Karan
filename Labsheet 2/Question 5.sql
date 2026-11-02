CREATE KEYSPACE CollegeDB
WITH replication = {
    'class':'SimpleStrategy',
    'replication_factor':1
};

USE CollegeDB;

CREATE TABLE Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Course text,
    Marks int
);

INSERT INTO Students VALUES (101,'Amit','BCA',85);
INSERT INTO Students VALUES (102,'Rahul','BBA',78);
INSERT INTO Students VALUES (103,'Priya','BCA',92);
INSERT INTO Students VALUES (104,'Neha','BCA',88);
INSERT INTO Students VALUES (105,'Karan','BBA',75);

SELECT * FROM Students;

// Course query requires an index or ALLOW FILTERING
SELECT * FROM Students
WHERE Course='BCA' ALLOW FILTERING;

UPDATE Students SET Marks=95
WHERE Student_ID=101;

DELETE FROM Students WHERE Student_ID=105;
