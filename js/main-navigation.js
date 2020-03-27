(() => {
  const button = document.getElementById("button");
  const menu = document.getElementById("menu");

  const toggleClass = () => {
    menu.classList.toggle('main-navigation__items-open');
  };

  button.addEventListener("click", toggleClass);
  menu.addEventListener("click", toggleClass);
})();
