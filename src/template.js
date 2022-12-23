// template iterals 
const htmlBlocks = function (teamMembers) {
    return `
    <div> ${teamMembers} </div>
    `
}

function appendManager (manager) {
    return `
    <h2>${manager.name}</h2>
    <ul>
        <li><span class="title">ID: </span>${manager.id}</li>
        <li><span class="title">Email: </span>${manager.email}</li>
        <li><span class="title">Office #: </span>${manager.officeNumber}</li>
    </ul>
    `

}

function appendEngineer (employee) {
    return `
    <h2>${employee.name}</h2>
    <ul>
        <li><span class="title">ID: </span>${employee.id}</li>
        <li><span class="title">Email: </span>${employee.email}</li>
        <li><span class="title">GitHub: </span>${employee.github}</li>
    </ul>
    `
}

function appendIntern (employee) {
    return `
    <h2>${employee.name}</h2>
    <ul>
        <li><span class="title">ID: </span>${employee.id}</li>
        <li><span class="title">Email: </span>${employee.email}</li>
        <li><span class="title">School: </span>${employee.school}</li>
    </ul>
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