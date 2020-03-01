USE employee_tracker_db;

INSERT INTO employee
  (id, fist_name, last_name,role_id,manager_id)
VALUES
  (1, "Lili","Gugushvili",1,1),
  (2,"Levan","Gugushvili",2,2),
  (3,"Steven","Smith",3,5),
  (4,"Adelina","Tanqeiro",7,9),
  (5,"George","Bloom",4,8)

INSERT INTO department (name) 
VALUES
 ("Sales", "Human Resoursec", "Finance")

INSERT INTO role 
(title, salary, department_id) ,
VALUES
 ("Sales Lead, 45000, 1","Human Resoursec Lead, 95000, 1","Finance Lead, 50000")
