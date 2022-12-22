// template iterals 
const htmlBlocks = function (teamMembers) {
    return `
    <div> ${teamMembers} </div>
    `
}

function appendManager (manager) {
    return `
    <h2> ${manager.name} </h2>
    <p> ${manager.id} </p>
    
    `
    // add other info inside back ticks 

}







function generateHTML(teamArray) {
    const employeeCard = [];
    for (let i = 0; i < teamArray.length; i++) {
        const role = teamArray[i].getRole();
        const member = teamArray[i]

        if (role === "Manager") employeeCard.push(appendManager(member))
        //else if(role === "Engineer") employeeCard.push(appendEngineer(member))
        //else if(role === "Intern") employeeCard.push(appendIntern(member))
    }

    return htmlBlocks(employeeCard.join(''));
};

module.exports = generateHTML;