// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      // loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      // autoplay: {
      // delay: 3000,
      // },

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
// Function to change button color when scrolling
function updateButtonColor() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove('bg-white/80', 'text-custom__primary');
    backToTopBtn.classList.add('bg-custom__primary/90', 'text-white'); // Replace with desired color classes
  } else {
    backToTopBtn.classList.remove('bg-custom__primary/90', 'text-white');
    backToTopBtn.classList.add('bg-white/80', 'text-custom__primary'); // Replace with initial color classes
  }
}

// Call the function on page load and when the user scrolls
updateButtonColor();
window.addEventListener('scroll', updateButtonColor);


// 顯示狀態
// Function to show/hide the button with a transition effect based on scroll position
function toggleButtonVisibility() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove('hidden');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.remove('opacity-100');
    // backToTopBtn.classList.add('hidden');
  }
}

// Call the function on page load and when the user scrolls
toggleButtonVisibility();
window.addEventListener('scroll', toggleButtonVisibility);




// 密碼顯示 BTN
function password(x) {
  x.classList.toggle("fa-eye");
}

// 重整 BTN
function refresh(x) {
  $("#refresh").addClass("rotate-360 transition duration-150 ease-in-out");
}

// 功能選單 BTN
function function__dropdown() {
  const x = document.getElementById("function__content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// 表單排序 BTN
function sort(x) {
  x.classList.toggle("fa-sort-up");
}

// Table-scroll tab 
$('.arrow-right').on('click', function () {
  document.getElementById('pills-tab').scrollLeft += 140;
});

$('.arrow-left').on('click', function () {
  document.getElementById('pills-tab').scrollLeft -= 140;
});


// 表單其他按鈕(點擊狀態)
// const myInput = document.getElementById('myInput');
// const parentDiv = document.getElementById('parentDiv');
// const language__BTN = document.getElementById('language__BTN');

// myInput.addEventListener('focus', () => {
//   if (myInput.focus) {
//     $(parentDiv).addClass('bg-custom__tabBtn text-white');
//   } else {
//     $(parentDiv).removeClass('bg-custom__tabBtn '); 
//   };
//   if (myInput.hover) {
//     $(parentDiv).addClass('bg-gray-100 text-custom__tabBtn'); 
//   } else {
//     $(parentDiv).removeClass('bg-gray-100');
//   }
// });

// (點擊視窗取消)
// const isInsideParentDiv = (target) => {
//   return parentDiv.contains(target) || target === myInput;
// };

// document.addEventListener('click', (event) => {
//   if (!isInsideParentDiv(event.target)) {
    
//     myInput.focus = false;

//     $(parentDiv).removeClass('bg-custom__tabBtn text-white')

//   } 
// });



// (點擊其他按鈕取消)
// $(".language__BTN").addEventListener('click', () => {
//   // Reset the checkbox state
//   myInput.focus = false;
//   // Remove the background color class from the parent div
//   $(parentDiv).removeClass('bg-custom__tabBtn text-white') 
// });
