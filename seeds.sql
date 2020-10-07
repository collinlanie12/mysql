---------DEPARTMENT-------------
INSERT INTO department (name)
VALUES("Sales");

INSERT INTO department (name)
VALUES("Developers");

INSERT INTO department (name)
VALUES("Design");

INSERT INTO department (name)
VALUES("Marketing");

INSERT INTO department (name)
VALUES("Human Resources");

---------ROLES-------------
INSERT INTO role (title, salary, department_id)
VALUES("Senior Developer", 250000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES("Junior Developer", 100000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES("Lead Sales", 200000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES("HR Rep", 70000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES("Lead Designer", 90000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES("Marketing Consultant", 150000.00, 4);

---------EMPLOYEES-------------
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Jason", "Todd", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Dick", "Grayson", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Damien", "Wayne", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Wonder", "Woman", 4, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Clark", "Kent", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Harley", "Quinn", 1, 2);