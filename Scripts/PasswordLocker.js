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
                break;
            }
        }
    }

    if (!loggedIn) {
        console.log('No Users logged in, Redirecting.');
        window.location.href = '/auth/memberslogin.html';
    }
}

checkLogin();
