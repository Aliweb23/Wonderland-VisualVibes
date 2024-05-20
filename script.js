// Portfolio Filtering
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.dataset.filter;
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.dataset.category === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Portfolio Modal
const portfolioModal = document.querySelector('.portfolio-modal');
const portfolioModalClose = document.querySelector('.portfolio-modal-close');
const portfolioModalImg = document.querySelector('.portfolio-modal-img');
const portfolioModalTitle = document.querySelector('.portfolio-modal-title');
const portfolioModalDesc = document.querySelector('.portfolio-modal-desc');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    portfolioModal.style.display = 'block';
    portfolioModalImg.src = item.querySelector('img').src;
    portfolioModalTitle.textContent = item.dataset.title;
    portfolioModalDesc.textContent = item.dataset.description;
  });
});

portfolioModalClose.addEventListener('click', () => {
  portfolioModal.style.display = 'none';
});

// Navbar Toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Skills Progress Bars
const skillsBars = document.querySelectorAll('.skills-bar');

skillsBars.forEach(bar => {
  const value = bar.dataset.value;
  const progress = bar.querySelector('.progress');

  progress.style.width = `${value}%`;
});

// Testimonials Slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.testimonials-pagination',
    clickable: true,
  },
});

// Contact Form
const contactForm = document.querySelector('.contact-form');
const contactName = document.querySelector('.contact-name');
const contactEmail = document.querySelector('.contact-email');
const contactMessage = document.querySelector('.contact-message');
const contactSubmit = document.querySelector('.contact-submit');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    alert('Please fill in all fields.');
    return;
  }

  const formData = new FormData(contactForm);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/contact');
  xhr.send(formData);

  contactName.value = '';
  contactEmail.value = '';
  contactMessage.value = '';

  alert('Message sent successfully.');
});