const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'ddkce_details',
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }

    console.log('Connected to the database');
});


