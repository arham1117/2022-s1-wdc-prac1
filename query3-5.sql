SELECT given_name, family_name, mark  FROM Students INNER JOIN Enrolments  ON Students.student_id = Enrolments.student_id WHERE mark < 50;