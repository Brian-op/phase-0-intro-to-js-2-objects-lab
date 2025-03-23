// Write your solution in this file!
const employee ={
    name:'Morio',
    streetAddress: "Jaba Baze"
};
function updateEmployeeWithKeyAndValue(employee,name, streetAddress){
    return {...employee, [name]: streetAddress}
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key]=value;
    return employee;
};
function deleteFromEmployeeByKey(employee,key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    delete employee[key]
    return employee;

};