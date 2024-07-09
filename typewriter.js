// Función para simular el efecto de typing 

// Título
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
// Subtítulo
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

// Texto del cuadro de "Prompt"
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

// Quote del Papa
function typeRespuesta() {
    var text = document.getElementById('quote').textContent.trim();
    document.getElementById('quote').textContent = '';

    function typeEffect(i) {
        if (i < text.length) {
            document.getElementById('quote').textContent += text.charAt(i);
            setTimeout(function() {
                typeEffect(i + 1);
            }, 100);
        }
    }

    typeEffect(0);
}








typeMainTitle();

// Desabilita el scroll al inicio (hasta que el usuario haga click en el botón)
document.body.classList.add('no-scroll');
document.documentElement.classList.add('no-scroll');

// Efecto botón de scroll
document.getElementById('scrollButton').addEventListener('click', function() {
    // Habilita el scroll
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    
    // Scroll a la target sección
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });

    // Show the prompt image
    const promptImage = document.getElementById('promptImage');
    promptImage.style.visibility = 'visible';

    // Muestra el texto dentro de la caja de prompt luego de que aparezca la caja
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
                delay += 300; // Adjust delay between images appearing
            });
        }, 4000); // 4 seconds delay

    }, 1000); // Adjust the delay as needed to show new text
});

// Optional: Add logic here if you want to force the scroll position back to top
window.addEventListener('scroll', function() {
    if (document.body.classList.contains('no-scroll')) {
        window.scrollTo(0, 0);
    }
});


