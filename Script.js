// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add active state to navbar links
  const navbarLinks = document.querySelectorAll('.nav-links a');
  
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
  