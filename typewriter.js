// // Function to simulate typing effect for the main title
// function typeMainTitle(i) {
//     var text = document.getElementById('typewriter').textContent.trim();
//     document.getElementById('typewriter').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('typewriter').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         } else {
//             // Show the subtitle once the main title typing animation completes
//             document.getElementById('subtitle').style.visibility = 'visible';
//             // Call the function to start subtitle typing
//             typeSubtitle();
//         }
//     }

//     typeEffect(0);
// }

// // Function to simulate typing effect for the subtitle
// function typeSubtitle() {
//     var text = document.getElementById('subtitle').textContent.trim();
//     document.getElementById('subtitle').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('subtitle').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         }
//     }

//     typeEffect(0);
// }

// // Call the function to start main title typing
// typeMainTitle(0);

// // Efecto botón de scroll
// document.getElementById('scrollButton').addEventListener('click', function() {
//     // Scroll to the target section
//     document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
//   });

// Function to simulate typing effect for the main title
// function typeMainTitle() {
//     var text = document.getElementById('typewriter').textContent.trim();
//     document.getElementById('typewriter').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('typewriter').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         } else {
//             // Show the subtitle once the main title typing animation completes
//             document.getElementById('subtitle').style.visibility = 'visible';
//             // Call the function to start subtitle typing
//             typeSubtitle();
//         }
//     }

//     typeEffect(0);
// }

// // Function to simulate typing effect for the subtitle
// function typeSubtitle() {
//     var text = document.getElementById('subtitle').textContent.trim();
//     document.getElementById('subtitle').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('subtitle').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         }
//     }

//     typeEffect(0);
// }

// // Call the function to start main title typing
// typeMainTitle();

// // Efecto botón de scroll
// document.getElementById('scrollButton').addEventListener('click', function() {
//     // Scroll to the target section
//     document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });

//     // Show images in the image container
//     const images = document.querySelectorAll('.image-container .image');
//     let delay = 0;
//     images.forEach((image, index) => {
//         setTimeout(() => {
//             image.classList.add('visible');
//         }, delay);
//         delay += 300; // Adjust delay between images appearing
//     });
// });

// Function to simulate typing effect for the main title
// function typeMainTitle() {
//     var text = document.getElementById('typewriter').textContent.trim();
//     document.getElementById('typewriter').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('typewriter').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         } else {
//             // Show the subtitle once the main title typing animation completes
//             document.getElementById('subtitle').style.visibility = 'visible';
//             // Call the function to start subtitle typing
//             typeSubtitle();
//         }
//     }

//     typeEffect(0);
// }

// // Function to simulate typing effect for the subtitle
// function typeSubtitle() {
//     var text = document.getElementById('subtitle').textContent.trim();
//     document.getElementById('subtitle').textContent = '';

//     function typeEffect(i) {
//         if (i < text.length) {
//             document.getElementById('subtitle').textContent += text.charAt(i);
//             setTimeout(function() {
//                 typeEffect(i + 1);
//             }, 100);
//         }
//     }

//     typeEffect(0);
// }

// // Call the function to start main title typing
// typeMainTitle();

// // Efecto botón de scroll
// document.getElementById('scrollButton').addEventListener('click', function() {
//     // Scroll to the target section
//     document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });

//     // Show the prompt image
//     const promptImage = document.getElementById('promptImage');
//     promptImage.style.visibility = 'visible';

//     // After 10 seconds, start showing the other images
//     setTimeout(() => {
//         const images = document.querySelectorAll('.image-container .image');
//         let delay = 0;
//         images.forEach((image, index) => {
//             setTimeout(() => {
//                 image.classList.add('visible');
//             }, delay);
//             delay += 300; // Adjust delay between images appearing
//         });
//     }, 10000); // 10 seconds delay
// });
// Function to simulate typing effect for the main title
function typeMainTitle() {
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

// Function to simulate typing effect for the new text
function typeNewText() {
    var text = document.getElementById('textoPrompt').textContent.trim();
    document.getElementById('textoPrompt').textContent = '';

    function typeEffect(i) {
        if (i < text.length) {
            document.getElementById('textoPrompt').textContent += text.charAt(i);
            setTimeout(function() {
                typeEffect(i + 1);
            }, 100);
        }
    }

    typeEffect(0);
}

// Call the function to start main title typing
typeMainTitle();

// Efecto botón de scroll
document.getElementById('scrollButton').addEventListener('click', function() {
    // Scroll to the target section
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });

    // Show the prompt image
    const promptImage = document.getElementById('promptImage');
    promptImage.style.visibility = 'visible';

    // Show the new text with typewriter effect after prompt image is visible
    setTimeout(() => {
        document.getElementById('textoPrompt').style.visibility = 'visible';
        typeNewText();

        // After 10 seconds from showing the prompt image, start showing the other images
        setTimeout(() => {
            const images = document.querySelectorAll('.image-container .image');
            let delay = 0;
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('visible');
                }, delay);
                delay += 500; // Adjust delay between images appearing
            });
        }, 4000); // 10 seconds delay

    }, 1000); // Adjust the delay as needed to show new text
});