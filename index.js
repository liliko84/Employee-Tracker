const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
const{ getAllEmployees, createEmployee, deleteEmployee, updateEmployeeRole, updateEmployeeManager,
  getAllRoles, createRole, deleteRole, updateRoleSalary, updateRoleDepartment,
  getAllDepartments, createDepartment, deleteDepartment, updateDepartment,
  getEmployeesByManager, getDepartmentBudget, getAllManagers
} = require('./js/db_functions');

// import arrays of questions for inquirer prompts
const  startQuestions = require('./js/questions');

// function to start auction, defined to be async
const startApp = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const { userAction } = await inquirer.prompt(startQuestions);

  // depending on the answer, do an action
  if (userAction.EmployeeAction === 'Review all Employees') {
    getAllEmps();
} else if (userAction.EmployeeAction === 'Create a new Employee') {
    postNewEmp();
} else if (userAction.EmployeeAction === 'Update an Employee') {
    //console.log("inside upd question");
    updateEmp();
} else if (userAction.EmployeeAction === 'Delete an Employee') {
    deleteEmp();
} else if (userAction.EmployeeAction === 'View Employees By Manager') {
    //console.log("inside upd question");
    getEmpByMgr();
} else if (userAction.EmployeeAction === 'Review Departments Budget') {
   getDeptBudget();
}else if (userAction.EmployeeAction === 'Review all Roles') {
    getAllRol();
} else if (userAction.EmployeeAction === 'Create a new Role') {
    postNewRol();
} else if (userAction.EmployeeAction === 'Update an Role') {
    //console.log("inside upd question");
    updateRol();
} else if (userAction.EmployeeAction === 'Delete an Role') {
    deleteRol();
}else if (userAction.EmployeeAction === 'Review all Departments') {
    getAllDept();
} else if (userAction.EmployeeAction === 'Create a new Department') {
    postNewDept();
} else if (userAction.EmployeeAction === 'Update an Department') {
   
    updateDept();
} else if (userAction.EmployeeAction === 'Delete an Department') {
    deleteDept();
} else if (userAction.EmployeeAction === 'Exit') {
  // console.log("inside exit");
  connection.end();
}
};
// function to create a new auction item, defined to be async
/* const getAllEmployees = async () => {

  console.log("getAllEmployees");
  const employees = await getAllEmployees();

  // print all of the items
  console.table(employees);


  return startApp();
};
 */
/* connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startApp();
}); */
const postNewDept = async () => {
  
    const { name } = await inquirer.prompt(createDepartmentQuestions);

    // create new Department
    const createDepartmentRes = await createDepartment({ name });

    console.log(createDepartmentRes);
    return startApp();
};

// function to delete an Department
const deleteDept = async () => {

    const Departments = await getAllDepartments();

    
    console.table(Departments);

    // enter Department id to be deleted
    const { id } = await inquirer.prompt(deleteDepartmentQuestions);

    await deleteDepartment(id);

    return startApp();
};

// // function to update an Department
const updateDept = async () => {

        const Departments = await getAllDepartments();

    // print all of the items
    console.table(Departments);

    // enter Department id to be deleted
    const { id, name} = await inquirer.prompt(updateDepartmentQuestions);

    const updateDepartmentRes = await updateDepartment(id, name);
    
    return startApp();
};



const getEmpByMgr = async () => {


    const Mgrs = await getAllManagers();

    console.table(Mgrs);


    const { id } = await inquirer.prompt(selectManagerQuestion);


    const employees = await getEmployeesByManager(id);

   
    console.table(employees);

    return startApp();
};

const getDeptBudget = async () => {

    const budget = await getDepartmentBudget();

    console.log("Department's budget is: ",);
    budget.forEach(element => console.log(element.name, " ", element.Budget));
    
    return startApp();
};
    
         

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});

