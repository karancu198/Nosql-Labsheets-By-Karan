-- Create keyspace with replication factor 3
CREATE KEYSPACE CollegeDB
WITH replication = {
    'class':'NetworkTopologyStrategy',
    'datacenter1':3
};

USE CollegeDB;

CREATE TABLE Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Course text,
    Marks int
);

INSERT INTO Students
(Student_ID, Name, Course, Marks)
VALUES (101, 'Amit', 'BCA', 85);

INSERT INTO Students
(Student_ID, Name, Course, Marks)
VALUES (102, 'Rahul', 'BBA', 78);

SELECT * FROM Students;

CONSISTENCY QUORUM;

SELECT * FROM Students;
