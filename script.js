// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active nav link
            document.querySelectorAll('a.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 76,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (isElementInViewport(bar)) {
            bar.style.width = width + '%';
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', animateSkillBars);
// Initial call to check skills on page load
animateSkillBars();

// Download CV functionality
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = 'Rekha_Bhatt.pdf'; // Replace with actual CV path
    link.download = 'Rekha_Bhatt.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
   
});

// Second download button
document.getElementById('downloadCV2').addEventListener('click', function(e) {
    e.preventDefault();
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = 'Rekha_Bhatt.pdf'; // Replace with actual CV path
    link.download = 'Rekha_Bhatt.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});