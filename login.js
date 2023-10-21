const loginForm = document.getElementById('loginform');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password input values
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username is valid
    if (username.length < 5) {
        displayErrorMessage(usernameInput, 'Please enter at least 5 characters.');
        return;
    }

    // Check if the password is valid
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
        displayErrorMessage(passwordInput, 'Password must be at least 8 characters long with at least one special character and one capital letter.');
        return;
    }

    // ... (rest of your code remains unchanged) ...
});

function displayErrorMessage(inputElement, message) {
    const errorDiv = inputElement.nextElementSibling; // Get the next sibling element (assumes error message element is placed next to input element)
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
}

// Clear error messages when input changes
usernameInput.addEventListener('input', function() {
    clearErrorMessage(usernameInput);
});

passwordInput.addEventListener('input', function() {
    clearErrorMessage(passwordInput);
});

function clearErrorMessage(inputElement) {
    const errorDiv = inputElement.nextElementSibling;
    errorDiv.textContent = ''; // Clear the error message
}

