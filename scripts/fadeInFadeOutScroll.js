console.log('JavaScript is working!');

function fadeInOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in class when the section enters the viewport
            entry.target.classList.add('fade-in');
        } else {
            // Remove fade-in class when the section exits the viewport (for fade-out)
            entry.target.classList.remove('fade-in');
        }
    });
}

const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.1
});

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});