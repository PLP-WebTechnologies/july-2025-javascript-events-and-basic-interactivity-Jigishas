// DOM elements
const themeToggle = document.getElementById('themeToggle');
const questionForm = document.getElementById('questionForm');
const successMessage = document.getElementById('successMessage');

// Toggle FAQ answers
function setupFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const index = question.getAttribute('data-index');
            const answer = document.getElementById(`answer-${index}`);
            const icon = question.querySelector('.faq-icon');
            
            // Toggle the open class
            answer.classList.toggle('open');
            icon.classList.toggle('rotate');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherIndex = otherQuestion.getAttribute('data-index');
                    const otherAnswer = document.getElementById(`answer-${otherIndex}`);
                    const otherIcon = otherQuestion.querySelector('.faq-icon');
                    
                    otherAnswer.classList.remove('open');
                    otherIcon.classList.remove('rotate');
                }
            });
        });
    });
}

// Toggle dark/light mode
function setupThemeToggle() {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Change icon based on mode
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('icon-moon');
            icon.classList.add('icon-sun');
        } else {
            icon.classList.remove('icon-sun');
            icon.classList.add('icon-moon');
        }
    });
}

// Form validation
function setupFormValidation() {
    questionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Validate question type
        const typeInput = document.getElementById('questionType');
        const typeError = document.getElementById('typeError');
        if (typeInput.value === '') {
            typeError.style.display = 'block';
            isValid = false;
        } else {
            typeError.style.display = 'none';
        }
        
        // Validate message
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
            successMessage.style.display = 'block';
            questionForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Initialize the page
function init() {
    setupFAQToggle();
    setupThemeToggle();
    setupFormValidation();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
