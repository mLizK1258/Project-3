var dropdown = document.querySelector('.sub-nav');
var link = document.querySelector('.active-nav');

link.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});
