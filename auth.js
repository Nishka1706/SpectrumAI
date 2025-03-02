document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.getElementById("logout-btn");
    const userDisplay = document.getElementById("user-display");

    // Check if user is already logged in
    const user = sessionStorage.getItem("user");
    if (user) {
        if (userDisplay) userDisplay.innerText = `Welcome, ${user}!`;
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Dummy authentication (replace this with real auth logic later)
            if (username && password) {
                sessionStorage.setItem("user", username);
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to home
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            sessionStorage.removeItem("user");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }
});
