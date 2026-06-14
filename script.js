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
document.getElementById('navCvDropdown');

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

let projectData = {};

fetch('assets/projects/project-data.json')
  .then(res => res.json())
  .then(data => {
    projectData = data;
  })
  .catch(err => console.error('Could not load project data:', err));

const modal       = document.getElementById('projectModal');
const modalOverlay= document.getElementById('modalOverlay');
const modalStage  = document.getElementById('modalStage');
const modalDots   = document.getElementById('modalDots');
const modalCounter= document.getElementById('modalCounter');
const modalPdf    = document.getElementById('modalPdf');

const VIDEO_EXT = ['mp4', 'webm', 'ogg', 'ogv', 'mov', 'm4v'];

function isVideo(src){
  const clean = (src || '').split('?')[0].split('#')[0];
  const ext = clean.split('.').pop().toLowerCase();
  return VIDEO_EXT.includes(ext);
}

let currentMedia = [];
let currentIndex = 0;

document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const project = link.dataset.project;
    if(project) openProject(project);
  });
});

function openProject(id){

  const project = projectData[id];
  if(!project) return;

  document.getElementById('modalTitle').textContent = project.title || '';

  const tagEl = document.getElementById('modalTag');
  if(tagEl){
    tagEl.textContent = project.tag || '';
    tagEl.style.display = project.tag ? '' : 'none';
  }

  // Support both the new "media" array and the legacy "images" array
  currentMedia = project.media || project.images || [];
  currentIndex = 0;

  renderMedia(currentIndex);
  buildDots();

  populateList('whatList', project.what);
  populateList('howList',  project.how);
  populateList('whyList',  project.why);

  if(project.pdf){
    modalPdf.href = project.pdf;
    modalPdf.style.display = '';
  } else {
    modalPdf.removeAttribute('href');
    modalPdf.style.display = 'none';
  }

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function pauseStageVideo(){
  const vid = modalStage.querySelector('video');
  if(vid){
    vid.pause();
  }
}

function renderMedia(index){

  pauseStageVideo();
  modalStage.innerHTML = '';

  const src = currentMedia[index];
  if(!src){
    return;
  }

  if(isVideo(src)){
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.className = 'modal-video';
    modalStage.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.alt = document.getElementById('modalTitle').textContent;
    img.className = 'modal-image';
    modalStage.appendChild(img);
  }

  updateMediaBar();
}

function updateMediaBar(){

  const total = currentMedia.length;

  if(modalCounter){
    modalCounter.textContent = total ? (currentIndex + 1) + ' / ' + total : '';
  }

  const single = total <= 1;
  document.getElementById('prevImage').style.display = single ? 'none' : '';
  document.getElementById('nextImage').style.display = single ? 'none' : '';
  if(modalDots) modalDots.style.display = single ? 'none' : '';

  if(modalDots){
    modalDots.querySelectorAll('.modal-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
}

function buildDots(){
  if(!modalDots) return;
  modalDots.innerHTML = '';
  currentMedia.forEach((src, i) => {
    const dot = document.createElement('button');
    dot.className = 'modal-dot';
    dot.setAttribute('aria-label', 'Go to item ' + (i + 1));
    if(isVideo(src)) dot.classList.add('is-video');
    dot.addEventListener('click', () => goTo(i));
    modalDots.appendChild(dot);
  });
}

function goTo(index){
  if(!currentMedia.length) return;
  currentIndex = (index + currentMedia.length) % currentMedia.length;
  renderMedia(currentIndex);
}

function populateList(id, data){
  const list = document.getElementById(id);
  if(!list) return;
  list.innerHTML = '';
  (data || []).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

document.getElementById('nextImage').addEventListener('click', () => goTo(currentIndex + 1));
document.getElementById('prevImage').addEventListener('click', () => goTo(currentIndex - 1));

function closeModal(){
  pauseStageVideo();
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
if(modalOverlay) modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if(!modal.classList.contains('show')) return;
  if(e.key === 'Escape')      closeModal();
  if(e.key === 'ArrowRight')  goTo(currentIndex + 1);
  if(e.key === 'ArrowLeft')   goTo(currentIndex - 1);
});

/* ===== Swipe navigation for modal media (mobile) ===== */
(function () {
  const stage = document.getElementById('modalStage');
  if (!stage) return;

  let startX = 0, startY = 0, tracking = false;

  stage.addEventListener('touchstart', (e) => {
    // Let the video's own controls handle their own touches
    if (e.target.closest('video')) { tracking = false; return; }
    if (currentMedia.length <= 1) { tracking = false; return; }
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
    tracking = true;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    // Only treat it as a swipe if it's mostly horizontal and far enough
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      goTo(currentIndex + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });
})();