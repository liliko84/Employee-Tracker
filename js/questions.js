const startQuestions = [
  {
    name: 'EmployeeAction',
    message: 'What would you like to do?',
    type: 'list',
    choices: [{ name: 'Review all Employees' }, { name: 'Create a new Employee' }, { name: 'Update an Employee' }, { name: 'Delete an Employee' },
    { name: 'View Employees By Manager' },
    { name: 'Review all Roles' }, { name: 'Create a new Role' }, { name: 'Update an Role' }, { name: 'Delete an Role' },
    { name: 'Review all Departments' }, { name: 'Create a new Department' }, { name: 'Update an Department' }, { name: 'Delete an Department' },
    { name: 'Exit' }]
  }
];

const createEmployeeQuestions = [
  {
    name: 'first_name',
    message: 'What is the first name of the Employee?',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'last_name',
    message: 'What is the first name of the Employee?',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'role_id',
    message: 'What is the Role ID?',
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'manager_id',
    message: 'What is the Manager ID?',
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];


// questions to delete an employee
const deleteEmployeeQuestions = [
  {
    name: 'id',
    message: "Which employee do you want to delete (enter employee's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions to update an employee
const updateEmployeeQuestions = [
  {
    name: 'id',
    message: "Which employee do you want to update (enter employee's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'updateAction',
    message: 'What would you like to update',
    type: 'list',
    choices: [{ name: 'Employee Role ID' }, { name: 'Employee Manager ID' }, { name: 'Exit' }]
  },
  {
    name: 'new_id',
    message: "Enter the new id?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions for creating an role prompt
const createRoleQuestions = [
  {
    name: 'title',
    message: 'What is the title of the Role?',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'salary',
    message: 'What is the Salary of the Role?',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'department_id',
    message: 'What is the Department ID?',
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions to delete an role
const deleteRoleQuestions = [
  {
    name: 'id',
    message: "Which role do you want to delete (enter role's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions to update an role
const updateRoleQuestions = [
  {
    name: 'id',
    message: "Which role do you want to update (enter role's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'updateAction',
    message: 'What would you like to update',
    type: 'list',
    choices: [{ name: 'Role salary' }, { name: 'Role Department ID' }, { name: 'Exit' }]
  },
  {
    name: 'new_val',
    message: "Enter the new value?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

//questions for creating an Department prompt
const createDepartmentQuestions = [
  {
    name: 'name',
    message: 'What is the name of the Department?',
    type: 'input',

    validate: inputVal => (inputVal ? true : false)
  }
];

// questions to delete an Department
const deleteDepartmentQuestions = [
  {
    name: 'id',
    message: "Which Department do you want to delete (enter Department's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions to update an Department
const updateDepartmentQuestions = [
  {
    name: 'id',
    message: "Which Department do you want to update (enter Department's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'name',
    message: 'Enter new name for the Department?',
    type: 'input',
    validate: inputVal => (inputVal ? true : false)
  }
];

// questions to delete an employee
const selectManagerQuestion = [
  {
    name: 'id',
    message: "Select Manager to see Employees (enter employee's id)?",
    type: 'input',
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

module.exports = {
  startQuestions, createEmployeeQuestions, deleteEmployeeQuestions, updateEmployeeQuestions,
  createRoleQuestions, deleteRoleQuestions, updateRoleQuestions,
  createDepartmentQuestions, deleteDepartmentQuestions, updateDepartmentQuestions,
  selectManagerQuestion
}; 

