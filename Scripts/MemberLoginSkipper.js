// LoginSkipper.js
// Might make opensource at some point
// Author: Jenson G

function checkMemberLogin() {
    const cookies = document.cookie.split(';');
    let isMember = false;

    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('login=')) {
            const loginValue = trimmedCookie.split('=')[1];
            if (loginValue === 'member') {
                isMember = true;
                break;
            }
        }
    }

    if (isMember) {
        window.location.href = '/Member/Bookings.html';
    }
}


checkMemberLogin();
