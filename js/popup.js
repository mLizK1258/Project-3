function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  var items = document.querySelectorAll('.animate');
   
  function animate() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('animated');
      } else {
        items[i].classList.remove('animated');
      }
    }
  }
   
  window.addEventListener('scroll', animate);
  
  function animate() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('animated');
        items[i].classList.add('popup');
      } 
      //For fade off if scroll back
      /* else {
        // items[i].classList.remove('animated');
        items[i].classList.remove('popup');
      }*/
    }
  }
    