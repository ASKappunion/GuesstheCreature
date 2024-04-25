document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("welcome-message");

    // Hide the welcome message after 3 seconds
    setTimeout(function() {
        welcomeMessage.style.display = "none";
        // Redirect to the photo selection page (index.html)
        window.location.href = "home.html";
    }, 3000);
});

