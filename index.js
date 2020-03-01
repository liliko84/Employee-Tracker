const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
const { getAllEmployee, newEmployee, updateEmployee } = require('./js/db_functions');

// import arrays of questions for inquirer prompts
const  startQuestions = require('./js/questions');

// function to start auction, defined to be async
const startApp = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const { userAction } = await inquirer.prompt(startQuestions);

  // depending on the answer, do an action
  if (userAction === "Review all employees") {
    getAllEmployees();
  } else if (userAction === "Create a new employee") {
    postNewEmployee();
  } else if (userAction === "Update an employee"){
    postAnUpdate();
  } else if (userAction === "Delete an employee"){
    deleteEmployee();
   }else{
    connection.end();
  }
};


// function to create a new auction item, defined to be async
const getAllEmployees = async () => {

  console.log("getAllEmployees");
  const employees = await getAllEmployees();

  // print all of the items
  console.table(employees);


  return startApp();
};

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startApp();
});