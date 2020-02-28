// set up questions for start prompt
const startQuestions = [
  {
    name: "EmployeeAction",
    message: 'What would you like to do?',
    type: 'list',
    choices: [{name:"review all employees"}, {name:"add a new employee"},{name:"update an employee"}]
  }
];


module.exports =  startQuestions;
