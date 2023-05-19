// // let close_menu=document.querySelector(#menu-close);
// // close_menu.onclick=function(){
// //     nav .navigation ul'
// // }
// // Get the menu button element
// let menuBtn = document.getElementById('menu-btn');

// // Add a click event listener to the menu button
// menuBtn.addEventListener('click', function() {
//   // Get the navigation element and add the 'active' class to its unordered list
//   const navigation = document.querySelector('nav .navigation ul');
//   navigation.classList.add('active');
// });

// // Get the menu close button element
// let menuClose = document.getElementById('menu-close');

// // Add a click event listener to the menu close button
// menuClose.addEventListener('click', function() {
//   // Get the navigation element and remove the 'active' class from its unordered list
//   const navigation = document.querySelector('nav .navigation ul');
//   navigation.classList.remove('active');
// });
// Get the menu button element

// $('#menu-btn').click(function() {
//   $('nav .navigation ul').addClass('active')
// });

// $('#menu-close').click(function(){
//   $('nav .navigation ul').removeClass('active')
// });

// let menuBtn = document.querySelector('#menu-btn');
// let menuClose = document.querySelector('#menu-close');
// let navigation = document.querySelector('nav .navigation ul');

// menuBtn.addEventListener('click', function() {
//   navigation.classList.add('active');
// });

// menuClose.addEventListener('click', function() {
//   navigation.classList.remove('active');
// });
$(".navbar-toggler").on("click", function () {
  $(".navbar-collapse").toggleClass("active");
});
