// Modal functionality
const orderBtns = document.querySelectorAll('.order-btn');
const modal = document.getElementById('paymentModal');
const closeModalBtn = document.getElementById('closeModal');
const paymentForm = document.getElementById('paymentForm');
const pizzaTypeInput = document.getElementById('pizzaType');
const orderSuccess = document.getElementById('orderSuccess');

orderBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const pizza = this.getAttribute('data-pizza');
    pizzaTypeInput.value = pizza;
    modal.classList.add('show');
    orderSuccess.textContent = '';
    paymentForm.reset();
    pizzaTypeInput.value = pizza; // reset after form.reset
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

paymentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  orderSuccess.textContent = 'Thank you! Your pizza order has been placed successfully! 🍕';
  paymentForm.reset();
  pizzaTypeInput.value = '';
  setTimeout(() => {
    modal.classList.remove('show');
    orderSuccess.textContent = '';
  }, 2500);
});

// Prevent contact form default submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactForm.reset();
    alert('Thank you for contacting us! We will get back to you soon.');
  });
}

// Shop Now Modal Functionality
const shopNowBtn = document.getElementById('shopNowBtn');
const shopModal = document.getElementById('shopModal');
const closeShopModal = document.getElementById('closeShopModal');
const shopForm = document.getElementById('shopForm');
const shopSuccess = document.getElementById('shopSuccess');

if (shopNowBtn && shopModal && closeShopModal && shopForm && shopSuccess) {
  shopNowBtn.addEventListener('click', () => {
    shopModal.classList.add('show');
    shopSuccess.textContent = '';
    shopForm.reset();
  });
  closeShopModal.addEventListener('click', () => {
    shopModal.classList.remove('show');
  });
  window.addEventListener('click', (e) => {
    if (e.target === shopModal) {
      shopModal.classList.remove('show');
    }
  });
  shopForm.addEventListener('submit', function(e) {
    e.preventDefault();
    shopSuccess.textContent = 'Thank you! Your pizza order has been placed successfully! 🍕';
    shopForm.reset();
    setTimeout(() => {
      shopModal.classList.remove('show');
      shopSuccess.textContent = '';
    }, 2500);
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < windowHeight - 60 && sectionBottom > 60) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll); 