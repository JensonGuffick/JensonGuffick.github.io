document.getElementById("loginForm").addEventListener("submit", function (e) {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const validUsername = "lpbmember";
  const validPassword = "TwoFiveTwo";

  if (username === validUsername && password === validPassword) {
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").textContent = "Invalid login. Please try again.";
  }
});
