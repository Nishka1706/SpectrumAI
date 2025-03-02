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
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Save user data in session storage (temporary for now)
            const user = { name, email, password };
            sessionStorage.setItem("user", JSON.stringify(user));

            alert("Account created successfully! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});

