// import consola package for console.log() styling
const consola = require('consola');
// import connection to make queries
const connection = require('../config/connection');

// create a function that returns a promise to handle sql query to get all employess
exports.getAllEmployees = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM employee', (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
  });
};

exports.createEmployee = employeeDataObj => {
  return new Promise((resolve, reject) => {

    const postQuery = connection.query('INSERT INTO employee SET ?', employeeDataObj, (err, createEmployeeRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({
        message: 'Employee successfully posted!'
      });
    });
    consola.info(postQuery.sql);
  });
};


exports.deleteEmployee = (Id) => {
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
        resolve({
          message: 'Employee successfully deleted!'
        });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that returns a promise to handle sql query to get all roles
exports.getAllRoles = () => {
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
exports.createRole = roleDataObj => {
  return new Promise((resolve, reject) => {

    const postQuery = connection.query('INSERT INTO role SET ?', roleDataObj, (err, createRoleRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({
        message: 'Role successfully posted!'
      });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the Role's id and delete the role
exports.deleteRole = (Id) => {
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
        resolve({
          message: 'Role successfully deleted!'
        });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
exports.updateRoleSalary = (Id, new_val) => {
  return new Promise((resolve, reject) => {

    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{
        salary: new_val
      }, {
        id: Id
      }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({
          message: 'Role Salary successfully Updated!'
        });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
exports.updateRoleDepartment = (Id, new_val) => {
  return new Promise((resolve, reject) => {

    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{
        department_id: new_val
      }, {
        id: Id
      }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({
          message: 'Role department successfully Updated!'
        });
      }
    );

    consola.info(updateQuery.sql);
  });
};


//department

exports.getAllDepartments = () => {
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
exports.createDepartment = DepartmentDataObj => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO Department SET ?', DepartmentDataObj, (err, createDepartmentRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({
        message: 'Department successfully posted!'
      });
    });
    consola.info(postQuery.sql);
  });
};

//function that accepts the Department's id and delete the Department
exports.deleteDepartment = (Id) => {
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
        resolve({
          message: 'Department successfully deleted!'
        });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

//function that accepts the Department's id and updates the Department
exports.updateDepartment = (Id, name) => {
  return new Promise((resolve, reject) => {
    const updateQuery = connection.query(
      'UPDATE Department SET ? WHERE ?',
      [{
        name: name
      }, {
        id: Id
      }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({
          message: 'Department title successfully Updated!'
        });
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

exports.getEmployeesByManager = (id) => {
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