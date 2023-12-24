var mysql = require('mysql');
//CREATE CONNECTION LINE 3-13
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ddkc_details"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//FORM INFO LOGIN [LINE 17-37]
const userData = {
    username: row.name,
    password: row.password
};
results.forEach((row) => {
    console.log('Name:', row.name);
    console.log('Password:', row.password);
});
function validateLogin() {
    // Get values entered by the user
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if entered credentials match the simulated user data
    if (enteredUsername === userData.username && enteredPassword === userData.password) {

    } else {
        alert('Invalid username or password. Please try again.');
    }

}
// Get values
