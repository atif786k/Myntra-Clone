document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideCount = slides.children.length;
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    setInterval(nextSlide, 2000);
  });
  