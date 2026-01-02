// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', ()=>{
  nav.classList.toggle('open');
});

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      // close nav on mobile
      if(nav.classList.contains('open')) nav.classList.remove('open');
    }
  })
});