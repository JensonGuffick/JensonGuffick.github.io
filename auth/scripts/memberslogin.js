const encodedUsername = "bHBibWVtYmVy";
const encodedPassword = "VHdvRml2ZVR3bw==";

const validUsername = atob(encodedUsername);
const validPassword = atob(encodedPassword);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputUsername = document.querySelector('input[id="username"]').value.toLowerCase();
    const inputPassword = document.querySelector('input[id="password"]').value;
    const messageElement = document.getElementById('message');


    if (inputUsername === validUsername && inputPassword === validPassword) {
        window.location.href = '/Member/CommitteeMinutes.html';
    } else {
        window.alert('Incorrect Credentials');
    }

});