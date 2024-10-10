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
        if (window.location.hostname === "127.0.0.1") {
            window.location.href = '/Member/CommitteeMinutes.html';
        } else {
            window.location.href = '/helstonarchery/member/committeeMinutes.html';
        }
    } else {
        messageElement.innerHTML = "Incorrect username or password.";
    }

});