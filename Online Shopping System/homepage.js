document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOptions = document.querySelector('.menu-options');

    menuIcon.addEventListener('click', function() {
        menuOptions.style.display = (menuOptions.style.display === 'block') ? 'none' : 'block';
    });
});


// for card slide

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
  
    // Show the first slide initially
    showSlide(currentSlide);
  
    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      // Show the selected slide
      slides[index].style.display = 'block';
    }
  
    // Function to navigate to the next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Function to navigate to the previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // You can add event listeners for navigation buttons if needed
    // Example: document.getElementById('nextButton').addEventListener('click', nextSlide);
  
    // Automatic slide change (optional)
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  });
  