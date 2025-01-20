function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }


// Enhanced script.js for responsive behavior and additional functionality

// Smooth Scroll Functionality
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal Popup for Booking Courses
const courseModal = document.getElementById('courseModal');
const closeModal = document.querySelector('.close');
const bookButtons = document.querySelectorAll('.book-course');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.closest('.course-card').getAttribute('data-course');
        document.getElementById('modalCourse').value = courseName;
        courseModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    courseModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === courseModal) {
        courseModal.style.display = 'none';
    }
});

// Form Validation
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('modalName').value.trim();
    const email = document.getElementById('modalEmail').value.trim();
    const course = document.getElementById('modalCourse').value;

    if (name && email && course) {
        alert(`Thank you, ${name}! You have successfully booked ${course}.`);
        courseModal.style.display = 'none';
        bookingForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

const animatedElements = document.querySelectorAll('.feature, .course-card, .testimonial');
animatedElements.forEach(element => observer.observe(element));

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('visible');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('visible');
}

setInterval(showNextTestimonial, 5000);

// Responsive Video Embeds
function adjustVideoSize() {
    const videos = document.querySelectorAll('iframe, video');
    videos.forEach(video => {
        video.style.width = '100%';
        video.style.height = video.offsetWidth * 0.5625 + 'px';
    });
}

window.addEventListener('resize', adjustVideoSize);
window.addEventListener('load', adjustVideoSize);



document.getElementById('scrollButton').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });