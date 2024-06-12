// Get the text of the h1 element
var text = document.getElementById('typewriter').textContent.trim();

// Empty the h1 element to prepare for the typing effect
document.getElementById('typewriter').textContent = '';

// Function to simulate typing effect
function typeEffect(i) {
    if (i < text.length) {
        // Add a character to the h1 element
        document.getElementById('typewriter').textContent += text.charAt(i);
        setTimeout(function() {
            typeEffect(i + 1);
        }, 100);
    }
}

// Call the typing effect function
typeEffect(0);