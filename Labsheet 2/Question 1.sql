-- MySQL
CREATE DATABASE CollegeDB;
USE CollegeDB;

CREATE TABLE Students (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Course VARCHAR(30),
    Marks INT
);

INSERT INTO Students VALUES
(101, 'Amit', 'BCA', 85),
(102, 'Rahul', 'BBA', 78),
(103, 'Priya', 'BCA', 92);

SELECT * FROM Students;
