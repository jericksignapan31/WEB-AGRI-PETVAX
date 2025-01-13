


// Example admin credentials
const adminCredentials = { username: "admin", password: "admin123" }; // Replace with secure storage in production

// Handle the login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Store the role in localStorage
        localStorage.setItem('userRole', 'admin');
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        document.getElementById('errorMessage').textContent = "Invalid username or password.";
    }
});

// Function to handle logout
function logout() {
    localStorage.removeItem('userRole'); // Clear user role
    window.location.href = "index.html"; // Redirect to main page
}

// Check user role on the main page
if (document.title === "Agripetvax Main Page") {
    const userRole = localStorage.getItem('userRole');
    if (userRole === "admin") {
        document.getElementById('loginButton').style.display = "block"; // Show login button if admin
    }
}

// Check user role on dashboard page
if (document.title === "Admin Dashboard") {
    if (localStorage.getItem('userRole') !== "admin") {
        window.location.href = "index.html"; // Redirect if not admin
    }
}
