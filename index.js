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
            message: "Enter your manager's name."
        }, {
            type: "input",
            name: "managerId",
            message: "Enter your manager's ID."
        }, {
            type: "input",
            name: "managerEmail",
            message: "Enter your manager's email"
        }, {
            type: "input",
            name: "managerOfficeNum",
            message: "Enter your manager's office number."
        }
    ]) 
    .then(managerData => {
        const manager = new Manager (managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNum)
        teamArray.push(manager);
        console.log(teamArray);
    }) 
}; 

managerPrompt();