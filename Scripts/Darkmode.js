document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.Header');
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");
    const darkModeCookie = getCookie("dark-mode");

    // Function to get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Set initial colors based on cookie
    if (darkModeCookie === "true") {
        body.classList.add("dark-mode");
        header.classList.add("dark-mode");
    } else {
        body.classList.add("light-mode");
        header.classList.add("light-mode");
    }
    document.body.style.display = "block";
    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode", isDarkMode);
        header.classList.toggle("light-mode", !isDarkMode);
        document.cookie = `dark-mode=${isDarkMode}; path=/;`;
    }

    // Attach event listener
    toggleButton.addEventListener("click", toggleDarkMode);
});
