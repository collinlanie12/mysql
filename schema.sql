-- Drops the employee_db if it already exists --
DROP DATABASE IF EXISTS employee_db;
-- Create a database called employee_db --
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role(
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(6,2) NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY(department_id) REFERENCES department(id),
  PRIMARY KEY(id)
);

CREATE TABLE employee(
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NULL,
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES department(id),
  PRIMARY KEY(id)
);