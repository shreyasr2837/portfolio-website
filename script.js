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