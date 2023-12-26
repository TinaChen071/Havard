// 回到服務項目 button
// Check for the anchor when the page loads
window.addEventListener('DOMContentLoaded', function () {
  var targetAnchor = window.location.hash.substring(1);

  // If the anchor is "backToSegment2", switch to segment-2 and mark the corresponding tab as active
  if (targetAnchor === 'backToSegment2') {
    changeTab(2);
    markTabActive(2);
  }
});

// Your existing JavaScript functions for changing tabs
function changeTab(tabNumber) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(`segment-${tabNumber}`).classList.remove('hidden');
  history.pushState({ tab: tabNumber }, '', `?tab=${tabNumber}`);
}

function markTabActive(tabNumber) {
  document.getElementById(`segment-item-1`).classList.remove('active' );
  document.getElementById(`segment-1`).classList.add('hidden' );
  document.getElementById(`segment-item-1`).classList.remove('active' );
  document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
  document.getElementById(`segment-item-${tabNumber}`).classList.add('active' );
}

// Your existing event listener for changes in the browser history
window.addEventListener('popstate', function (event) {
  if (event.state && event.state.tab) {
    changeTab(event.state.tab);
    markTabActive(event.state.tab);
  } else {
    // If no state is present, default to Tab 1 and hide its corresponding content
    changeTab(1);
    markTabActive(1);
  }
});

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

// Copy link
document.getElementById('copyLinkButton').addEventListener('click', function() {
  const linkToCopy = document.createElement('textarea');
  linkToCopy.value = window.location.href;

  // Append the textarea to the document
  document.body.appendChild(linkToCopy);

  // Select the text within the textarea
  linkToCopy.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the textarea (cleanup)
  document.body.removeChild(linkToCopy);

  // Show the custom alert
  openCustomAlert();

  // Automatically hide the alert after 2 seconds
  setTimeout(closeCustomAlert, 2000); // 2000 milliseconds = 2 seconds
});

function openCustomAlert() {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.opacity = '1';
  customAlert.style.display = 'block'; // Display the alert
}

function closeCustomAlert() {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.opacity = '0';

  // Hide the alert after the transition
  setTimeout(function() {
    customAlert.style.display = 'none';
  }, 300); // Wait for the 300ms transition duration
}

// 
document.addEventListener('DOMContentLoaded', function () {
  var accordion = document.getElementById('hs-basic-with-title-and-arrow-stretched-heading');
  // var toggleButton = accordion.querySelector('.hs-accordion-toggle');
  var accordionContent = accordion.querySelector('.hs-accordion-content');

  // Toggle the accordion when the button is clicked
  // toggleButton.addEventListener('click', function () {
  //   accordionContent.classList.toggle('hidden');
  // });

  // Close the accordion when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!accordion.contains(event.target)) {
      accordionContent.classList.add('hidden');
    }
  });
});


// location.reload();
