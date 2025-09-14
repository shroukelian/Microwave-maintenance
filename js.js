const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.faq-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
        }
        
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});