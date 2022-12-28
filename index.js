//import file system, inquirer, and path
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// import modules for each role
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// import HTML template
const generateHTML = require("./src/template");

// creates empty array for team members
const teamArray = [];

// returns questions relating to manager role 
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
    // pushes manager data to team array
    .then(managerData => {
        const manager = new Manager (managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNum)
        teamArray.push(manager);
        console.log(teamArray);
    }) 
}; 

// returns questions relating to engineer or intern role 
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
            // returns this questions only if 'Engineer' is selected
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
            // returns this questions only if 'Intern' is selected
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

     // pushes engineer and/or intern data to team array
    .then(employeeData => {
        if (employeeData.employee === "Engineer") {
            const newEmployee = new Engineer(employeeData.employeeName, employeeData.employeeId, employeeData.employeeEmail, employeeData.github)
            teamArray.push(newEmployee);
        } else if (employeeData.employee === "Intern") {
            const newEmployee = new Intern(employeeData.employeeName, employeeData.employeeId, employeeData.employeeEmail, employeeData.school) 
            teamArray.push(newEmployee);
        }
        // if 'Yes' is selected, return employee questions 
        if (employeeData.confirmAddNew === "Yes") 
        return employeePrompt();
         // if 'No' is selected, return team array 
        else if (employeeData.confirmAddNew === "No")
        return teamArray;
        console.log(teamArray);
    }) 
    
};

const writeFile = data => {
    console.log(data);
    // write HTML 
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Page has been created.");
    });
}


managerPrompt()
.then(employeePrompt)
.then(teamArray => generateHTML(teamArray))
.then(pageHTML => writeFile(pageHTML));

