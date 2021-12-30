alert('Cập nhật thêm mục: "Our Product"')
// view popup product
let popupViews = document.querySelectorAll('.model');
let popupBtns = document.querySelectorAll('.btn');
let closeBtns = document.querySelectorAll('.icon-close');

//javascript for quick view button
let popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active'); 
    });
  });
});


// active and close search-form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

// // window scroll
// window.onscroll = () => {
//   searchBtn.classList.remove('fa-times');
//   searchFrom.classList.remove('active');
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
// }

const modelRequired = document.querySelector('.security');
const closeModel = document.querySelector('.icon-btn');

closeModel.onclick = () =>{
  modelRequired.classList.toggle('active')
}

// login-required
var CORRECT_USER = 'YG17';
var CORRECT_PASS = '11'

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
  formLogin.attachEvent('submit', onFormSubmit);
}else{
  formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {

  var username = inputUsername.value;
  var password = inputPassword.value;

  if(username == CORRECT_USER && password == CORRECT_PASS){
    modelRequired.classList.add('active')
    e.preventDefault();
  }else{
    alert('Thông tin đăng nhập không chính xác');
  }
}


var swiper = new Swiper(".products-slider", {
  loop:true,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});



// swiper-slide > sclient's
var swiper = new Swiper(".review-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
  },
});





