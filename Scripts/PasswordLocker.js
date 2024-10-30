// PasswordLocker.js
// Might make opensource at some point
// Author: Jenson G
console.log('Starting Locker');

function checkLogin() {
    const cookies = document.cookie.split(';');
    let loggedIn = false;

    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('login=')) {
            const loginValue = trimmedCookie.split('=')[1];
            if (loginValue === 'member' || loginValue === 'beginner') {
                console.log('User logged in, Passing through');
                loggedIn = true;
                console.log('-----------------------------');
                renewCookie();
                break;
            }
        }
    }

    if (!loggedIn) {
        console.log('No Users logged in, Redirecting.');
        window.location.href = '/auth/LoginSelector.html';
    }
}

function renewCookie() {
    console.log('Renewing Cookie');
    const now = new Date();
    const expires = new Date(now.getTime() + 15 * 60 * 1000);
    document.cookie = `login=${getCurrentLoginValue()}; expires=${expires.toUTCString()}; path=/`;
    console.log('Successfully Renewed');
    console.log('-----------------------------');
    console.log('Exiting.');
}

function getCurrentLoginValue() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('login=')) {
            return trimmedCookie.split('=')[1];
        }
    }
    return '';
}

checkLogin();
