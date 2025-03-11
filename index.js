// index.js

// Step 1: Create the employee object

// index.js

// Step 1: Create the employee object
const employee = {
  name: "sam",
  streetAddress: "11 Broadway"
};

// Step 2: Define the functions

// Function 1: Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function 2: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function 3: Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function 4: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}