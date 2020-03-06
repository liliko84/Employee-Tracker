const inquirer = require('inquirer');
require('console.table');
const connection = require('./config/connection')

// import functions to work with database
const js = require('./js/db_functions');

// import arrays of questions for inquirer prompts
const q = require('./js/questions');


// function to start auction, defined to be async
const startApp = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const {
    EmployeeAction
  } = await inquirer.prompt(q.startQuestions);

  // depending on the answer, do an action
  if (EmployeeAction === 'Review all Employees') {
    getAllEmployees();
  } else if (EmployeeAction === 'Create a new Employee') {
    postNewEmp();
  } else if (EmployeeAction === 'Update an Employee') {
    //console.log("inside upd question");
    updateEmp();
  } else if (EmployeeAction === 'Delete an Employee') {
    deleteEmp();
  } else if (EmployeeAction === 'View Employees By Manager') {
    //console.log("inside upd question");
    getEmpByMgr();
  } else if (EmployeeAction === 'Review Departments Budget') {
    getDeptBudget();
  } else if (EmployeeAction === 'Review all Roles') {
    getAllRol();
  } else if (EmployeeAction === 'Create a new Role') {
    postNewRol();
  } else if (EmployeeAction === 'Update an Role') {
    //console.log("inside upd question");
    updateRol();
  } else if (EmployeeAction === 'Delete an Role') {
    deleteRol();
  } else if (EmployeeAction === 'Review all Departments') {
    getAllDept();
  } else if (EmployeeAction === 'Create a new Department') {
    postNewDept();
  } else if (EmployeeAction === 'Update an Department') {
    updateDept();
  } else if (EmployeeAction === 'Delete an Department') {
    deleteDept();
  } else if (EmployeeAction === 'Exit') {
    // console.log("inside exit");
    connection.end();
  }
};
// function to create a new auction item, defined to be async
const getAllEmployees = async () => {

  console.log("getAllEmployees");
  const employees = await js.getAllEmployees();

  // print all of the items
  console.table(employees);


  return startApp();
};

const postNewEmp = async () => {
  const answers = await inquirer.prompt(q.createEmployeeQuestions)

  const result = await js.createEmployee(answers)
  console.log(result)

  return startApp();
}
/* connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startApp();
}); */
const postNewDept = async () => {

  const answers = await inquirer.prompt(q.createDepartmentQuestions);

  // create new Department
  const createDepartmentRes = await js.createDepartment(answers);

  console.log(createDepartmentRes);
  return startApp();
};

const getAllDept = async () => {
  const answers = await inquirer.prompt(q.getAllDepartments);
  const getAllDepartments = await js.getAllDepartments()
  console.log("BUILD GET DEPARTMENT FUNCTION")

  return startApp();
}

// function to delete an Department
const deleteDept = async () => {

  const Departments = await js.getAllDepartments();


  console.table(Departments);

  // enter Department id to be deleted
  const {
    id
  } = await inquirer.prompt(deleteDepartmentQuestions);

  await js.deleteDepartment(id);

  return startApp();
};

// // function to update an Department
const updateDept = async () => {

  const Departments = await js.getAllDepartments();

  // print all of the items
  console.table(Departments);

  // enter Department id to be deleted
  const {
    id,
    name
  } = await inquirer.prompt(updateDepartmentQuestions);

  const updateDepartmentRes = await js.updateDepartment(id, name);

  return startApp();
};

const getEmpByMgr = async () => {


  const Mgrs = await js.getAllManagers();

  console.table(Mgrs);


   const {
    id
  } = await inquirer.prompt(selectManagerQuestion);


  const employees = await js.getEmployeesByManager(id);


  console.table(employees); 

  return startApp();
};

const getDeptBudget = async () => {

  const budget = await js.getDepartmentBudget();

  console.log("Department's budget is: ", );
  budget.forEach(element => console.log(element.name, " ", element.Budget));

  return startApp();
};

startApp();