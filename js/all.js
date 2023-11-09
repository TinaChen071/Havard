// Swiper
$(document).ready(function () {
    
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   // auto play
    autoplay: {
    delay: 3000,
    },

    // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  });
  
});


// ToTop BTN
const backToTopBtn = document.getElementById('backToTopBtn');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ToTop BTN 換顏色
function updateButtonColor() {
if (window.scrollY > 5000) {
  backToTopBtn.classList.remove('bg-blue-300', 'text-white');
  backToTopBtn.classList.add('bg-white/50', 'text-white');
} else {
  backToTopBtn.classList.remove('bg-white/50', 'text-white');
  backToTopBtn.classList.add('bg-blue-300', 'text-white');
}
}

updateButtonColor();
window.addEventListener('scroll', updateButtonColor);

// 顯示狀態
function toggleButtonVisibility() {
if (window.scrollY > 200) {
  backToTopBtn.classList.remove('hidden');
  backToTopBtn.classList.add('opacity-100','transition', 'duration-300');
} else {
  backToTopBtn.classList.remove('opacity-100');
}
}

toggleButtonVisibility();
window.addEventListener('scroll', toggleButtonVisibility);

// Nav
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const mq = window.matchMedia("(min-width: 1024px)");

function scrollNav() {
if (mq.matches) {
  if (window.scrollY > 200) {
    nav.classList.remove('py-3');
    nav.classList.add('py-0', 'transition-all', 'duration-300');
    logo.classList.add('scale-75', 'transition-all', 'duration-300');
  } else {
    nav.classList.remove('py-0');
    nav.classList.add('py-3', 'transition-all', 'duration-300');
    logo.classList.remove('scale-75');
  }
} else {
  nav.classList.add('py-3');
}
}

scrollNav();
window.addEventListener('scroll', scrollNav);

// Draw Flower
$(document).ready(function() {
var flower = $("#flower")[0]; // Get the DOM element
var length = flower.getTotalLength();

flower.style.strokeDasharray = length;
flower.style.strokeDashoffset = length;

$(window).scroll(myFunction);

function myFunction() {
  var scrollpercent = (($(window).scrollTop() / ($(document).height() - $(window).height())));
  
  var draw = length * scrollpercent*2;

  flower.style.strokeDashoffset = length - draw;
}
});

// location.reload();