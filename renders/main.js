
const userData = {
    username: 'demoUser',
    password: 'demoPassword'
};
 function validateLogin() {
        // Get values entered by the user
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Check if entered credentials match the simulated user data
        if (enteredUsername === userData.username && enteredPassword === userData.password) {
            alert('Login successful!'); // Replace this with your actual login logic
        } else {
            alert('Invalid username or password. Please try again.');
        }

}
// Get values
