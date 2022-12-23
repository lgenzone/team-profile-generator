// template iterals 
const htmlBlocks = function (teamMembers) {
    return `
    <div> ${teamMembers} </div>
    `
}

function appendManager (manager) {
    return `
    <h2>${manager.name}</h2>
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office #: ${manager.officeNumber}</p>
    `

}

function appendEngineer (employee) {
    return `
    <h2>${employee.name}</h2>
    <p>ID: ${employee.id}</p>
    <p>Email: ${employee.email}</p>
    <p>GitHub: ${employee.github}</p>
    `
}

function appendIntern (employee) {
    return `
    <h2>${employee.name}</h2>
    <p>ID: ${employee.id}</p>
    <p>Email: ${employee.email}</p>
    <p>School: ${employee.school}</p>
    `
}







function generateHTML(teamArray) {
    const employeeCard = [];
    for (let i = 0; i < teamArray.length; i++) {
        const role = teamArray[i].getRole();
        const member = teamArray[i]

        if (role === "Manager") employeeCard.push(appendManager(member))
        else if(role === "Engineer") employeeCard.push(appendEngineer(member))
        else if(role === "Intern") employeeCard.push(appendIntern(member))
    }

    return htmlBlocks(employeeCard.join(''));
};

module.exports = generateHTML;