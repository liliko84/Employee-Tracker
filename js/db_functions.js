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
    console.log(getQuery.sql);
  });
};

// create a function that accepts a new employee information and returns a promise to create a new employee with input data
const newEmployee = employeeData => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO employee SET ?', employeeData, (err, newEmployeeRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'New Employee was successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the item's id and new high bid price and returns a promise to update it
const updateEmployee = (employeeId) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE items SET highest_bid = <new high bid> WHERE id = <item's id>"
    const updateQuery = connection.query(
      'UPDATE employee SET ? WHERE ?',
    { id: employeeId },
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Umployee was successfully updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// export functions
module.exports = {
  getAllEmployees,
  newEmployee,
  updateEmployee
};
