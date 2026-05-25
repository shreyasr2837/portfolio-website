const toggle = document.getElementById('themeToggle');

if(localStorage.getItem('theme') === 'dark'){

  document.body.classList.add('dark-mode');

}

toggle.addEventListener('click',()=>{

  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')){

    localStorage.setItem('theme','dark');

  } else {

    localStorage.setItem('theme','light');

  }

});

/* ================= PROJECT CAROUSEL ================= */

const carousel =
document.getElementById('projectsCarousel');

const nextBtn =
document.getElementById('nextProject');

const prevBtn =
document.getElementById('prevProject');

const scrollAmount = 450;

/* NEXT */

if(nextBtn){

  nextBtn.addEventListener('click', () => {

    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

  });

}

/* PREVIOUS */

if(prevBtn){

  prevBtn.addEventListener('click', () => {

    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });

  });

}

/* AUTO SCROLL */

if(carousel){

setInterval(() => {

  const maxScroll =
    carousel.scrollWidth - carousel.clientWidth;

  if(carousel.scrollLeft >= maxScroll - 10){

    carousel.scrollTo({
      left:0,
      behavior:'smooth'
    });

  } else {

    carousel.scrollBy({
      left:scrollAmount,
      behavior:'smooth'
    });

  }

}, 5000);

}

/* ================= CV DROPDOWN ================= */

const cvToggle =
document.getElementById('cvToggle');

const cvDropdown =
document.querySelector('.cv-dropdown');

cvToggle.addEventListener('click', () => {

  cvDropdown.classList.toggle('active');

});

/* CLOSE WHEN CLICK OUTSIDE */

document.addEventListener('click', (e) => {

  if(!cvDropdown.contains(e.target)){

    cvDropdown.classList.remove('active');

  }

});

/* ================= BACK TO TOP ================= */

const backToTop =
document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {

  const experienceSection =
  document.getElementById('experience');

  const triggerPoint =
  experienceSection.offsetTop - 200;

  if(window.scrollY >= triggerPoint){

    backToTop.classList.add('show');

  } else {

    backToTop.classList.remove('show');

  }

});

/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
document.getElementById('mobileMenuBtn');

const mobileMenu =
document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click',()=>{

  mobileMenu.classList.toggle('active');

});

/* ================= CLOSE MENU WHEN CLICKED ================= */

document.querySelectorAll('.mobile-menu a')
.forEach(link => {

  link.addEventListener('click',()=>{

    mobileMenu.classList.remove('active');

  });

});

/* =========================================================
   MOBILE DARK MODE TOGGLE
========================================================= */

const mobileThemeToggle =
document.getElementById('mobileThemeToggle');

mobileThemeToggle.addEventListener('click',()=>{

  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')){

    localStorage.setItem('theme','dark');

  } else {

    localStorage.setItem('theme','light');

  }

});

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
document.getElementById('contactForm');

const formMessage =
document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const formData =
  new FormData(contactForm);

  try{

    const response =
    await fetch(
      'https://formspree.io/f/mwvzrejp',

      {
        method:'POST',
        body:formData,
        headers:{
          'Accept':'application/json'
        }
      }
    );

    if(response.ok){

      formMessage.textContent =
      'Message sent!';

      formMessage.classList.add('show');

      contactForm.reset();

      setTimeout(()=>{

        formMessage.classList.remove('show');

        formMessage.textContent = '';

      },4000);

    } else {

      formMessage.textContent =
      'Something went wrong.';

      formMessage.classList.add('show');

    }

  } catch(error){

    formMessage.textContent =
    'Error sending message.';

    formMessage.classList.add('show');

  }

});

/* =========================================================
   MOBILE CV DROPDOWN
========================================================= */

const mobileCvBtn =
document.getElementById('mobileCvBtn');

const mobileCvMenu =
document.getElementById('mobileCvMenu');

const mobileCvArrow =
document.getElementById('mobileCvArrow');

if(mobileCvBtn){

  mobileCvBtn.addEventListener('click',()=>{

    mobileCvMenu.classList.toggle('active');

    if(
      mobileCvMenu.classList.contains('active')
    ){

      mobileCvArrow.textContent = '⌃';

    } else {

      mobileCvArrow.textContent = '⌄';

    }

  });

}

/* =========================================================
   MOBILE HERO CV DROPDOWN
========================================================= */

const mobileHeroCvBtn =
document.getElementById('mobileHeroCvBtn');

const mobileHeroCvMenu =
document.getElementById('mobileHeroCvMenu');

const mobileHeroCvArrow =
document.getElementById('mobileHeroCvArrow');

if(mobileHeroCvBtn){

  mobileHeroCvBtn.addEventListener('click',()=>{

    mobileHeroCvMenu.classList.toggle('active');

    if(
      mobileHeroCvMenu.classList.contains('active')
    ){

      mobileHeroCvArrow.textContent = '⌃';

    } else {

      mobileHeroCvArrow.textContent = '⌄';

    }

  });

}