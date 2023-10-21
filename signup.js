const loginForm = document.getElementById('loginform');
const apiResultDiv = document.getElementById('apiResult');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch data from the API endpoint
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            // Display fetched data in the apiResultDiv
            apiResultDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
