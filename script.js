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

if(cvToggle && cvDropdown){

cvToggle.addEventListener('click', () => {

  cvDropdown.classList.toggle('active');

});

}

/* CLOSE WHEN CLICK OUTSIDE */

document.addEventListener('click', (e) => {

  if(cvDropdown && !cvDropdown.contains(e.target)){

    cvDropdown.classList.remove('active');

  }

});

/* ================= BACK TO TOP + SCROLL NAV ================= */

const backToTop =
document.querySelector('.back-to-top');

const scrollNavBtn =
document.getElementById('scrollNavBtn');

const scrollNavPanel =
document.getElementById('scrollNavPanel');

const headerEl =
document.querySelector('header');

window.addEventListener('scroll', () => {

  const experienceSection =
  document.getElementById('experience');

  const triggerPoint =
  experienceSection.offsetTop - 200;

  const isTriggered =
  window.scrollY >= triggerPoint;

  /* Back to top */
  if(isTriggered){
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  /* Scroll nav — desktop only */
  if(window.innerWidth > 850){

    if(isTriggered){

      headerEl.classList.add('nav-hidden');
      scrollNavBtn.classList.add('show');

    } else {

      headerEl.classList.remove('nav-hidden');
      scrollNavBtn.classList.remove('show');
      scrollNavPanel.classList.remove('active');

    }

  } else {

    /* Ensure header always visible on mobile */
    headerEl.classList.remove('nav-hidden');

  }

});

/* =========================================================
   SCROLL NAV BUTTON — toggle panel
========================================================= */

if(scrollNavBtn){

  scrollNavBtn.addEventListener('click', (e) => {

    e.stopPropagation();

    scrollNavPanel.classList.toggle('active');

  });

}

/* Close scroll nav panel when clicking outside */

document.addEventListener('click', (e) => {

  if(
    scrollNavPanel &&
    scrollNavPanel.classList.contains('active') &&
    !scrollNavPanel.contains(e.target) &&
    !scrollNavBtn.contains(e.target)
  ){

    scrollNavPanel.classList.remove('active');

  }

});

/* Close scroll nav panel when a nav link is clicked */

document.querySelectorAll('.scroll-nav-links a')
.forEach(link => {

  link.addEventListener('click', () => {

    scrollNavPanel.classList.remove('active');

  });

});

/* =========================================================
   SCROLL NAV — CV DROPDOWN (desktop style)
========================================================= */

const scrollCvDropdown =
document.getElementById('scrollCvDropdown');

const scrollCvBtn =
document.getElementById('scrollCvBtn');

if(scrollCvBtn && scrollCvDropdown){

  scrollCvBtn.addEventListener('click', (e) => {

    e.stopPropagation();

    scrollCvDropdown.classList.toggle('active');

  });

}

/* Close scroll CV dropdown when clicking outside */
document.addEventListener('click', (e) => {

  if(
    scrollCvDropdown &&
    !scrollCvDropdown.contains(e.target)
  ){

    scrollCvDropdown.classList.remove('active');

  }

});

/* =========================================================
   SCROLL NAV — THEME TOGGLE (desktop style)
========================================================= */

const scrollThemeToggle =
document.getElementById('scrollThemeToggle');

if(scrollThemeToggle){

  scrollThemeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){

      localStorage.setItem('theme','dark');

    } else {

      localStorage.setItem('theme','light');

    }

  });

}

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
   MOBILE MENU — CV DROPDOWN (desktop style)
========================================================= */

const mobileCvDropdown =
document.getElementById('mobileCvDropdown');

const mobileCvBtn =
document.getElementById('mobileCvBtn');

if(mobileCvBtn && mobileCvDropdown){

  mobileCvBtn.addEventListener('click', (e) => {

    e.stopPropagation();

    mobileCvDropdown.classList.toggle('active');

  });

}

/* Close when clicking outside */

document.addEventListener('click', (e) => {

  if(
    mobileCvDropdown &&
    !mobileCvDropdown.contains(e.target)
  ){

    mobileCvDropdown.classList.remove('active');

  }

});

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

      mobileHeroCvArrow
      .querySelector('img')
      .style.transform = 'rotate(0deg)';

    } else {

      mobileHeroCvArrow
      .querySelector('img')
      .style.transform = 'rotate(180deg)';

    }

  });

}
