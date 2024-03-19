window.addEventListener('scroll', function() {
    var scrollAnimation = document.getElementById('scrollAnimation');
    if (window.scrollY > 100) { 
      scrollAnimation.classList.add('show');
    } else {
      scrollAnimation.classList.remove('show');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Add loaded class to body after page content is loaded
    document.body.classList.add('loaded');
});
