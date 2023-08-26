// animation for number
const animatedNumbers = document.querySelectorAll('.animate-number');
const observerOptions = {
    threshold: 0.2, // Adjust as needed
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const number = parseInt(target.getAttribute('data-number'));
            setTimeout(() => {
                animateNumber(target, number);
                observer.unobserve(target);
            }, 50); // 0.05-second (50 milliseconds) delay before animation starts
        }
    });
}, observerOptions);

animatedNumbers.forEach(number => {
    observer.observe(number);
});

function animateNumber(target, endValue) {
    const duration = 1000; // Animation duration in milliseconds
    const startValue = 0;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            const animatedValue = Math.floor(progress * (endValue - startValue));
            target.textContent = `+${startValue + animatedValue}`;
            requestAnimationFrame(updateNumber);
        } else {
            target.textContent = `+${endValue}`;
        }
    }

    requestAnimationFrame(updateNumber);
    target.classList.add('number-visible');
}



// for hero section animation
    const scrollAnimationElements = document.querySelectorAll('.scroll-animation-l, .scroll-animation-r');
    const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('scroll-animation-visible');
                    scrollObserver.unobserve(entry.target);
                }, 90); // 0.09-second delay (90 milliseconds)
            }
        });
    });
    scrollAnimationElements.forEach(element => {
        scrollObserver.observe(element);
    });


// Fade and zoom animation on scroll
const fadeZoomAnimationElements = document.querySelectorAll('.fade-zoom-animation');
const fadeZoomObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-zoom-animation-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -20% 0px' });

fadeZoomAnimationElements.forEach(element => {
    fadeZoomObserver.observe(element);
});


// for alert
document.addEventListener("DOMContentLoaded", function() {
    const cookieOverlay = document.getElementById("cookieOverlay");
    const cookiePopup = document.getElementById("cookiePopup");
    const closeBtn = cookiePopup.querySelector(".close");
    const submitBtn = document.getElementById("submitBtn");
    const detailsBtn = document.getElementById("detailsBtn");

    function showOverlay() {
        cookieOverlay.style.display = "block";
    }

    function hideOverlay() {
        cookieOverlay.style.display = "none";
    }

    function closePopup() {
        cookiePopup.style.display = "none";
        hideOverlay();
        // Enable right-click after the alert is dismissed
        document.removeEventListener("contextmenu", preventRightClick);
    }

    function preventRightClick(event) {
        event.preventDefault();
    }

    closeBtn.addEventListener("click", closePopup);

    submitBtn.addEventListener("click", function() {
        // Handle the 'Submit Now' button action here
        // For example, you can set a cookie to remember user consent
        closePopup();
    });

    detailsBtn.addEventListener("click", function() {
        // Handle the 'Show Details' button action here
        // For example, you can open a modal or another page with detailed information
    });

    // Show overlay, cookie popup, and disable right-click initially
    showOverlay();
    cookiePopup.style.display = "block";
    document.addEventListener("contextmenu", preventRightClick);
});
