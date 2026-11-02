// Create 5 students
CREATE
(s1:Student {id:101, name:'Amit'}),
(s2:Student {id:102, name:'Rahul'}),
(s3:Student {id:103, name:'Priya'}),
(s4:Student {id:104, name:'Neha'}),
(s5:Student {id:105, name:'Karan'});

// Create 3 courses
CREATE
(c1:Course {name:'BCA'}),
(c2:Course {name:'BBA'}),
(c3:Course {name:'MCA'});

// Create relationships
MATCH (s:Student {id:101}),
(c:Course {name:'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {id:102}),
(c:Course {name:'BBA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {id:103}),
(c:Course {name:'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {id:104}),
(c:Course {name:'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {id:105}),
(c:Course {name:'BBA'})
CREATE (s)-[:ENROLLED_IN]->(c);

// Display students
MATCH (s:Student) RETURN s;

// Students in BCA
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'})
RETURN s;

// Courses of a student
MATCH (s:Student {id:101})-[:ENROLLED_IN]->(c)
RETURN c;

// Add relationship
MATCH (s:Student {id:101}),
(c:Course {name:'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

// Remove relationship
MATCH (s:Student {id:101})-[r:ENROLLED_IN]->
(c:Course {name:'MCA'})
DELETE r;
