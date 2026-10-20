// Dynamic interactive effects for Rodel's Portfolio
document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Console Greeting
    console.log("%c Welcome to Rodel Martinez's Portfolio! ", "background: #6366f1; color: #fff; font-size: 14px; font-weight: bold; padding: 5px 10px; border-radius: 4px;");

});
