//import file system
const fs = require("fs");
//import inquirer 
const inquirer = require("inquirer");

const path = require("path");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require("./src/template");

const teamArray = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter manager's name:"
        }, {
            type: "input",
            name: "managerId",
            message: "Enter manager's ID:"
        }, {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's email:"
        }, {
            type: "input",
            name: "managerOfficeNum",
            message: "Enter manager's office number:"
        }
    ]) 
    .then(managerData => {
        const manager = new Manager (managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNum)
        teamArray.push(manager);
        console.log(teamArray);
    }) 
}; 

const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which type of employee would you like to add?:",
            choices: [
                "Engineer",
                "Intern"
            ]
        }, {
            type: "input",
            name: "employeeName",
            message: "Enter employee's name:"
        }, {
            type: "input",
            name: "employeeId",
            message: "Enter employee's ID:"
        },{
            type: "input",
            name: "employeeEmail",
            message: "Enter employee's email address:"
        },{
            type: "input",
            name: "github",
            message: "If Engineer, enter Githib username.",
            when: ({employee}) => {
                if (employee === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }

        }, {
            type: "input",
            name: "school",
            message: "Enter the name of the school the intern attended:",
            when: ({employee}) => {
                if (employee === "Intern") {
                    return true;
                } else {
                    return false;
                }
            }

        }, {
            type: "list",
            name: "confirmAddNew",
            message: "Would you like to add another employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])

    .then(employeeData => {
        if (employeeData.employee === "Engineer") {
            const newEmployee = new Engineer(employeeData.employeeName, employeeData.employeeId, employeeData.employeeEmail, employeeData.github)
            teamArray.push(newEmployee);
        } else if (employeeData.employee === "Intern") {
            const newEmployee = new Intern(employeeData.employeeName, employeeData.employeeId, employeeData.employeeEmail, employeeData.school) 
            teamArray.push(newEmployee);
        }

        if (employeeData.confirmAddNew === "Yes") 
        return employeePrompt();
        else if (employeeData.confirmAddNew === "No")
        return teamArray;
        console.log(teamArray);
    }) 
    
};

const writeFile = data => {
    console.log(data);
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("page is being created");
    });
}


managerPrompt()
.then(employeePrompt)
.then(teamArray => generateHTML(teamArray))
.then(pageHTML => writeFile(pageHTML));

