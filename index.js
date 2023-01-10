burger = document.querySelector(".burger");
navlist = document.querySelector(".lists");
rightNav = document.querySelector(".right-nav");
navbar = document.querySelector(".navbar");
brandImg=document.querySelector(".brand");


burger.addEventListener('click', function(){

   navlist.classList.toggle('vis-resp');
   rightNav.classList.toggle('vis-resp');
   navbar.classList.toggle('h-nav-resp');

   
});