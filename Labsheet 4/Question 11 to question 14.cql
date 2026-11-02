// ==========================================
// LAB SHEET 4 - Q11 TO Q14
// APACHE CASSANDRA
// ==========================================


// Q11. COLLEGE DATABASE AND STUDENTS TABLE

CREATE KEYSPACE CollegeDB
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1
};

USE CollegeDB;

CREATE TABLE Students (
    id int PRIMARY KEY,
    name text,
    course text,
    semester int,
    marks int
);

INSERT INTO Students VALUES (1, 'Amit', 'BCA', 2, 85);
INSERT INTO Students VALUES (2, 'Riya', 'BCA', 2, 90);
INSERT INTO Students VALUES (3, 'Rahul', 'MCA', 1, 78);
INSERT INTO Students VALUES (4, 'Neha', 'BCA', 3, 88);
INSERT INTO Students VALUES (5, 'Karan', 'MCA', 2, 80);

SELECT * FROM Students;


// Q12. EMPLOYEES CRUD OPERATIONS

CREATE TABLE Employees (
    id int PRIMARY KEY,
    name text,
    department text,
    salary double
);

INSERT INTO Employees
VALUES (101, 'Amit', 'IT', 30000);

INSERT INTO Employees
VALUES (102, 'Riya', 'HR', 35000);

SELECT * FROM Employees;

UPDATE Employees
SET salary = 40000
WHERE id = 101;

SELECT * FROM Employees;

DELETE FROM Employees
WHERE id = 102;

SELECT * FROM Employees;


// Q13. EVENT LOGGING APPLICATION

CREATE TABLE Events (
    user_id int,
    event_time timestamp,
    event_type text,
    description text,
    PRIMARY KEY (user_id, event_time)
) WITH CLUSTERING ORDER BY (event_time DESC);

INSERT INTO Events
VALUES (1, '2026-10-01 10:00:00', 'Login', 'User logged in');

INSERT INTO Events
VALUES (1, '2026-10-01 11:00:00', 'Logout', 'User logged out');

INSERT INTO Events
VALUES (2, '2026-10-01 12:00:00', 'Login', 'User logged in');

SELECT * FROM Events
WHERE user_id = 1;

SELECT * FROM Events
WHERE user_id = 1
AND event_time >= '2026-10-01 10:00:00'
AND event_time <= '2026-10-01 12:00:00';


// Q14. AVAILABILITY AND CONSISTENCY

CREATE KEYSPACE TestDB
WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
};

USE TestDB;

CREATE TABLE Students (
    id int PRIMARY KEY,
    name text,
    marks int
);

CONSISTENCY ONE;

INSERT INTO Students VALUES (1, 'Amit', 85);
SELECT * FROM Students;

CONSISTENCY QUORUM;

INSERT INTO Students VALUES (2, 'Riya', 90);
SELECT * FROM Students;

CONSISTENCY ALL;

INSERT INTO Students VALUES (3, 'Rahul', 80);
SELECT * FROM Students;


// ==========================================
//  LAB SHEET 4 - Q11 TO Q14
// ==========================================
