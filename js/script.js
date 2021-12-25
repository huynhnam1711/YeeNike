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