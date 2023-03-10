// append manager card to HTML page
function appendManager(manager) {
    return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.name}</h2>
        </div>
        <div class="card-body"> 
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">GitHub: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `

}
// append engineer card to HTML page
function appendEngineer(employee) {
    return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${employee.name}</h2>
        </div>
        <div class="card-body"> 
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">GitHub: <a href="mailto:${employee.github}">${employee.github}</a></li>
            </ul>
        </div>
    </div>
    `
}

// append intern card to HTML page
function appendIntern(employee) {
    return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${employee.name}</h2>
        </div>
        <div class="card-body"> 
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
        </ul>
    
        </div>
    </div>
    `
}



function generateHTML(teamArray) {
    const employeeCard = [];
    // loops through each employee 
    for (let i = 0; i < teamArray.length; i++) {
        const role = teamArray[i].getRole();
        const member = teamArray[i]
        
        // push information for each employee to HTML
        if (role === "Manager") employeeCard.push(appendManager(member))
        else if (role === "Engineer") employeeCard.push(appendEngineer(member))
        else if (role === "Intern") employeeCard.push(appendIntern(member))
    }

   
    // return HTML template and style (bootstrap)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-success">
                    <h1 class="text-center text-white">Meet the Team!</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                ${employeeCard.join('')}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;

};


// export module
module.exports = generateHTML;







