  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username and password loaded from server-side PHP and passed to JS
    var correctUsername = "<?php echo $correctUsername; ?>";
    var correctPassword = "<?php echo $correctPassword; ?>";
    console.log('got password');

    if (username === correctUsername && password === correctPassword) {
      document.getElementById("message").innerText = "Login successful!";
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    } else {
      document.getElementById("message").innerText = "Invalid credentials, please try again.";
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  });