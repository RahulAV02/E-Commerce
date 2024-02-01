let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar1.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar1.classList.remove('active');
}
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "pass123"){
alert ("Login successfully");
window.location = "profile.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
let navbar1 = document.querySelector('.navbar1');
document.querySelector('#menu-btn').onclick =() =>{
    navbar1.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar1.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


function myFunction() {
  alert("Order Placed Successfully");
  window.location = "index.html";
}