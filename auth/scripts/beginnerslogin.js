const encodedUsername = "bHBiYmVnaW5uZXI=";
const encodedPassword = "U2hvb3RGb3JHb2xk";

const validUsername = atob(encodedUsername);
const validPassword = atob(encodedPassword);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputUsername = document.querySelector('input[id="username"]').value;
    const inputPassword = document.querySelector('input[id="password"]').value;
    const messageElement = document.getElementById('message');


    if (inputUsername === validUsername && inputPassword === validPassword) {
        window.location.href = '../index.html';
    } else {
        messageElement.innerHTML = "Incorrect username or password.";
    }

});