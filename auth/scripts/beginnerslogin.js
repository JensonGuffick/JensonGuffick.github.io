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
        // Set cookie
        const now = new Date();
        const expires = new Date(now.getTime() + 15 * 60 * 1000); // Last for 15 mins.
        document.cookie = `login=beginner; expires=${expires.toUTCString()}; path=/`;

        window.location.href = '/Beginner/Landing.html';
    } else {
        window.alert('Incorrect Credentials');
    }

});