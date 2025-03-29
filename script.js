
// Create cursor elements
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const cursorTrail = document.createElement('div');
cursorTrail.classList.add('cursor-trail');
document.body.appendChild(cursorTrail);

// Create shadow trail
const shadows = [];
const numShadows = 5;

for (let i = 0; i < numShadows; i++) {
  const shadow = document.createElement('div');
  shadow.classList.add('cursor-shadow');
  document.body.appendChild(shadow);
  shadows.push({
    element: shadow,
    x: 0,
    y: 0
  });
}

// Update cursor position
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  
  cursorTrail.style.left = (mouseX - 10) + 'px';
  cursorTrail.style.top = (mouseY - 10) + 'px';
});

// Animate shadows
function animateShadows() {
  let prevX = mouseX;
  let prevY = mouseY;
  
  shadows.forEach((shadow, index) => {
    const lag = (index + 1) * 4;
    
    shadow.x += (prevX - shadow.x) / lag;
    shadow.y += (prevY - shadow.y) / lag;
    
    shadow.element.style.left = shadow.x + 'px';
    shadow.element.style.top = shadow.y + 'px';
    shadow.element.style.opacity = 1 - (index / numShadows);
    
    prevX = shadow.x;
    prevY = shadow.y;
  });
  
  requestAnimationFrame(animateShadows);
}

animateShadows();

// Add hover effect
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursorTrail.style.transform = 'scale(1.5)';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorTrail.style.transform = 'scale(1)';
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Nav background change on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 1)';
  }
});

// Initialize EmailJS
emailjs.init("1xT6Fxd6oaUo9Rioq");

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const statusElement = document.querySelector('.form-status');
  statusElement.textContent = 'Sending message...';

  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    profession: document.getElementById('profession').value,
    message: document.getElementById('message').value,
    reply_to: document.getElementById('email').value
  };

  emailjs.send('service_iafpcoz', 'template_vjbyy7e', templateParams)
    .then(function() {
      statusElement.textContent = 'Message sent successfully!';
      statusElement.style.color = 'green';
      event.target.reset();
    }, function(error) {
      statusElement.textContent = 'Failed to send message. Please try again.';
      statusElement.style.color = 'red';
      console.error('Error:', error);
    });
});
