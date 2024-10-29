// LoginSkipper.js
// Might make opensource at some point
// Author: Jenson G

function checkLogin() {
    const cookies = document.cookie.split(';');
    let isBeginner = false;

    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('login=')) {
            const loginValue = trimmedCookie.split('=')[1];
            if (loginValue === 'beginner') {
                isBeginner = true;
                break;
            }
        }
    }

    if (isBeginner) {
        window.location.href = '/Beginner/Landing.html';
    }
}

checkLogin();
