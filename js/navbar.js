const nav = document.querySelector('nav');

var prevScrollpos = window.scrollY;

if (window.scrollY < 20) {
  nav.classList.add('main-navigation--up');
}

window.onscroll = function() {

  var currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos || window.scrollY < 200) {
    nav.classList.add('main-navigation--up');
  } else {
    nav.classList.remove('main-navigation--up');
  }
  prevScrollpos = currentScrollPos;
}
