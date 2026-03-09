
document.addEventListener('DOMContentLoaded', () => {

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// LANGUAGE SWITCHER
const faBtn=document.getElementById('fa-btn');
const enBtn=document.getElementById('en-btn');
const langElements=document.querySelectorAll('.lang');
let currentLang='fa';
updateLanguage();

faBtn.addEventListener('click',()=>{currentLang='fa';updateLanguage();});
enBtn.addEventListener('click',()=>{currentLang='en';updateLanguage();});
function updateLanguage(){
  langElements.forEach(el=>{
    const newText=el.dataset[currentLang];
    if(newText) el.textContent=newText;
  });
  document.documentElement.dir = currentLang==='fa'?'rtl':'ltr';
}



// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", ()=>{
navLinks.classList.toggle("active");
});



// LIGHTBOX
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.querySelector('.lightbox-img');
const closeBtn=document.querySelector('.lightbox .close');
const prevBtn=document.querySelector('.lightbox .prev');
const nextBtn=document.querySelector('.lightbox .next');
const caption=document.querySelector('.lightbox .caption');
const galleryItems=document.querySelectorAll('.gallery-item');
let currentIndex=0;

galleryItems.forEach((item,index)=>{
  item.addEventListener('click', e=>{
    e.preventDefault();
    currentIndex=index;
    openLightbox(item.href,item.querySelector('img').alt);
  });
});

function openLightbox(src,alt=''){
  lightbox.classList.add('active');
  lightboxImg.src=src;
  caption.textContent=alt;
}

// LIGHTBOX ARROWS
prevBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex-1+galleryItems.length)%galleryItems.length;
  openLightbox(galleryItems[currentIndex].href,galleryItems[currentIndex].querySelector('img').alt);
});
nextBtn.addEventListener('click',()=>{
  currentIndex=(currentIndex+1)%galleryItems.length;
  openLightbox(galleryItems[currentIndex].href,galleryItems[currentIndex].querySelector('img').alt);
});

// CLOSE LIGHTBOX
closeBtn.addEventListener('click',()=>lightbox.classList.remove('active'));
lightbox.addEventListener('click', e=>{
  if(e.target!==lightboxImg && e.target!==prevBtn && e.target!==nextBtn){
    lightbox.classList.remove('active');
  }
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', ()=>{
  const navbar=document.querySelector('.navbar');
  if(window.scrollY>50){navbar.style.background='#222';}
  else{navbar.style.background='rgba(34,34,34,0.85)';}
});

});



