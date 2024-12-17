// JavaScript for ticketSYMS Dashboard Interactivity

// Navigate to different sections
function navigateTo(section) {
    alert(`Navigating to: ${section}`);
    // Replace with actual navigation logic
    console.log(`Redirecting to: ${section}`);
}

// Handle Logout
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        // Add logout functionality
        alert('Logged out successfully!');
        window.location.href = 'login.html'; // Replace with the login page
    }
});

// Handle Account Deactivation
const deactivateBtn = document.getElementById('deactivate-btn');
deactivateBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
        alert('Account deactivated!');
        // Add backend logic for account deactivation
    }
});
