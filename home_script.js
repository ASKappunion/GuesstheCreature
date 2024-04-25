
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    // Add hover effect with JavaScript
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            button.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"; // Add box shadow on hover
        });

        button.addEventListener("mouseleave", function() {
            button.style.boxShadow = "none"; // Remove box shadow on mouse leave
        });
    });
});
function startGame() {
    window.location.href = "new_game.html"; 
}

function aboutGame() {
    window.location.href = "about.html"; 
}

function help() {
    window.location.href = "help.html"; 
}

