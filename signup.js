const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (name.length < 3) {
        displayError('nameError', 'Name must be at least 3 characters long.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayError('emailError', 'Invalid email format.');
        return;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
        displayError('passwordError', 'Password must be at least 8 characters long and contain a special character and a capital letter.');
        return;
    }

    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Password and Confirm Password do not match.');
        return;
    }

    window.location.href = 'api.html';
});

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}
