// auth.js - Handles authentication and session management

const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes
let sessionTimer;

// Function to sign up a new user
function signUp(username, password) {
    if (localStorage.getItem(username)) {
        alert("User already exists!");
        return false;
    }
    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Sign-up successful! You can now log in.");
    return true;
}

// Function to log in
function login(username, password) {
    const user = JSON.parse(localStorage.getItem(username));
    if (!user || user.password !== password) {
        alert("Invalid username or password!");
        return false;
    }
    sessionStorage.setItem("loggedInUser", username);
    resetSessionTimer();
    alert("Login successful!");
    return true;
}

// Function to log out
function logout() {
    sessionStorage.removeItem("loggedInUser");
    clearTimeout(sessionTimer);
    alert("Logged out successfully.");
    window.location.reload();
}

// Function to reset session timeout
function resetSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(() => {
        alert("Session expired. Logging out...");
        logout();
    }, SESSION_TIMEOUT);
}

// Check if user is logged in on page load
window.onload = function () {
    if (sessionStorage.getItem("loggedInUser")) {
        resetSessionTimer();
    }
};
