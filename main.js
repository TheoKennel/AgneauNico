const small_menu = document.querySelector('.toggle_menu');
const menu = document.querySelector('.menu');

small_menu.onclick = function() {
  small_menu.classList.toggle('active');
  menu.classList.toggle('responsive');
}
