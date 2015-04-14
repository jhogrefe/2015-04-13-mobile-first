var hamburgerIcon = document.getElementById("hamburgerIcon");

var toggleMobileNav = function(){
  var mobileNav = document.getElementById("mobileNav");
  var pageContainer = document.getElementById("pageContainer");
  
  mobileNav.classList.toggle("mobile-nav--is_shown");
  mobileNav.classList.toggle("is-mobile-nav-shown");
  
  pageContainer.classList.toggle("is-mobile-nav-shown");
};

hamburgerIcon.addEventListener("click", toggleMobileNav);