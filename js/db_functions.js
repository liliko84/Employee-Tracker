// import consola package for console.log() styling
const consola = require('consola');
// import connection to make queries
const connection = require('../config/connection');

// create a function that returns a promise to handle sql query to get all employess
const getAllEmployees = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM employees', (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
  });
};   

const createEmployee = employeeDataObj => {
  return new Promise((resolve, reject) => {

       const postQuery = connection.query('INSERT INTO employee SET ?', employeeDataObj, (err, createEmployeeRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Employee successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};


const deleteEmployee = (Id) => {
  return new Promise((resolve, reject) => {
    

    const deleteQuery = connection.query(
      'DELETE FROM employee WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Employee successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that returns a promise to handle sql query to get all roles
const getAllRoles = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM role', (err, roleData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(roleData);
    });
    // console.log(getQuery.sql);
  });
};

// create a function that accepts a new role'
const createRole = roleDataObj => {
  return new Promise((resolve, reject) => {

    const postQuery = connection.query('INSERT INTO role SET ?', roleDataObj, (err, createRoleRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Role successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the Role's id and delete the role
const deleteRole = (Id) => {
  return new Promise((resolve, reject) => {
  

    const deleteQuery = connection.query(
      'DELETE FROM role WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
const updateRoleSalary = (Id, new_val) => {
  return new Promise((resolve, reject) => {
    
    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{ salary: new_val }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role Salary successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
const updateRoleDepartment = (Id, new_val) => {
  return new Promise((resolve, reject) => {
    
    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{ department_id: new_val }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role department successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};


//department

const getAllDepartments = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM Department', (err, DepartmentData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(DepartmentData);
    });
    // console.log(getQuery.sql);
  });
};

// function that accepts a new Department's information 
const createDepartment = DepartmentDataObj => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO Department SET ?', DepartmentDataObj, (err, createDepartmentRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Department successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

//function that accepts the Department's id and delete the Department
const deleteDepartment = (Id) => {
  return new Promise((resolve, reject) => {
    const deleteQuery = connection.query(
      'DELETE FROM Department WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Department successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

//function that accepts the Department's id and updates the Department
const updateDepartment = (Id, name) => {
  return new Promise((resolve, reject) => {
        const updateQuery = connection.query(
      'UPDATE Department SET ? WHERE ?',
      [{ name: name }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Department title successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};




/* const getAllManagers = () => {
  // "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(ManagerData);
    });
  });
};
 */

const getEmployeesByManager = (id) => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM employee WHERE id != manager_id and manager_id = ?', id, (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
  });
};

module.exports = {getAllEmployees, createEmployee, deleteEmployee, updateEmployeeRole, updateEmployeeManager, 
  getAllRoles, createRole, deleteRole, updateRoleSalary, updateRoleDepartment,
  getAllDepartments, createDepartment, deleteDepartment, updateDepartment,
  getEmployeesByManager, getDepartmentBudget,/*  getAllManagers */
};

