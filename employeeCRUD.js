var mysql = require("mysql");
var inquirer = require("inquirer");
var figlet = require('figlet');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log(figlet.textSync('CZL DB!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    start();

});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "begin",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all employees",
                "View all departments",
                "View all roles",
                "Add employee",
                "Add Role",
                "Add department",
                "Update employee Role",
                "EXIT"]
        })
        .then((answer) => {
            // based on their answer, either call the bid or the post functions
            if (answer.begin === "View all employees") {
                viewAllEmployees();
            }
            else if (answer.begin === "View all departments") {
                viewAllDep();
            }
            else if (answer.begin === "View all roles") {
                viewAllroles();
            }
            else if (answer.begin === "Add employee") {
                addEmployee();
            }
            else if (answer.begin === "Remove employ") {
                //bidAuction();
                iewAllroles();

            }
            else if (answer.begin === "Update employee Role") {
                //bidAuction();
                iewAllroles();
            }
            else if (answer.begin === "Update employee role") {
                //bidAuction();
                iewAllroles();
            }
            else if (answer.begin === "EXIT") {
                connection.end();
            }

        });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewAllDep() {
    //var departments = [];
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        // Bonus!
        //res.forEach(element => departments.push(element.name));
        //console.table(res);
        //console.log(departments);
        //inqDep();
        start();
    });
    // Bonus to try later!
    // async function inqDep() {
    //     try {
    //         inquirer
    //             .prompt({
    //                 name: "department",
    //                 type: "list",
    //                 message: "What department would you like to look through?",
    //                 choices: departments
    //             })
    //             .then((answer) => {
    //                 // based on their answer, either call the bid or the post functions
    //                 connection.query(`SELECT first_name FROM employee WHERE department.name='${answer.department}'`, function (err, res) {
    //                     if (err) throw err;
    //                     console.table(res)
    //                     start();
    //                 });

    //             });
    //     } catch (err) {
    //         next(err);
    //     }
    // }
}

function viewAllroles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

async function addEmployee() {
    inquirer
        .prompt(
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of the employee?",
            }

        )
        .then((answer) => {
            console.log(answer);
            start();
        });
};

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}