   const toggleButton = document.querySelector('.toggle-button');
   const navMenu = document.querySelector('.nav-menu');
   
   toggleButton.addEventListener('click', () => {
       navMenu.classList.toggle('show');
   });
   // Handle dropdowns toggling on click
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const dropdown = toggle.parentElement; // Get the parent <li> element
        dropdown.classList.toggle('show'); // Toggle the 'show' class to show/hide dropdown content
    });
});
   const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Optional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
// Get elements
const searchIcon = document.getElementById('searchIcon');
const searchDropdown = document.getElementById('searchDropdown');

// Toggle search dropdown on icon click
searchIcon.addEventListener('click', () => {
    searchDropdown.classList.toggle('show');
});

// Close the search dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
        searchDropdown.classList.remove('show');
    }
});
