// Function to simulate typing effect for the main title
function typeMainTitle(i) {
    var text = document.getElementById('typewriter').textContent.trim();
    document.getElementById('typewriter').textContent = '';

    function typeEffect(i) {
        if (i < text.length) {
            document.getElementById('typewriter').textContent += text.charAt(i);
            setTimeout(function() {
                typeEffect(i + 1);
            }, 100);
        } else {
            // Show the subtitle once the main title typing animation completes
            document.getElementById('subtitle').style.visibility = 'visible';
            // Call the function to start subtitle typing
            typeSubtitle();
        }
    }

    typeEffect(0);
}

// Function to simulate typing effect for the subtitle
function typeSubtitle() {
    var text = document.getElementById('subtitle').textContent.trim();
    document.getElementById('subtitle').textContent = '';

    function typeEffect(i) {
        if (i < text.length) {
            document.getElementById('subtitle').textContent += text.charAt(i);
            setTimeout(function() {
                typeEffect(i + 1);
            }, 100);
        }
    }

    typeEffect(0);
}

// Call the function to start main title typing
typeMainTitle(0);