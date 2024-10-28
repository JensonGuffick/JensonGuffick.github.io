const encodedUsername = "bHBiYmVnaW5uZXI=";
const encodedPassword = "c2hvb3Rmb3Jnb2xk";

const validUsername = atob(encodedUsername);
const validPassword = atob(encodedPassword);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputUsername = document.querySelector('input[id="username"]').value;
    const inputPassword = document.querySelector('input[id="password"]').value;
    const messageElement = document.getElementById('message');


    if (inputUsername === validUsername && inputPassword === validPassword) {
        window.location.href = '/helstonarchery/BeginnerRedirect.html';
    } else {
        messageElement.innerHTML = "Incorrect username or password.";
    }

});