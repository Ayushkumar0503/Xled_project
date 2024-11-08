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

const itemsPerPage = 7; // Number of items to show per page
const productItems = document.querySelectorAll('.product-item'); // Select all product items
const totalPages = Math.ceil(productItems.length / itemsPerPage); // Calculate total number of pages

function goToPage(pageNumber) {
    // Hide all product items initially
    productItems.forEach(item => item.classList.add('hidden'));

    // Calculate the start and end index for items to show on this page
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Show only the items for the current page
    for (let i = startIndex; i < endIndex && i < productItems.length; i++) {
        productItems[i].classList.remove('hidden');
    }

    // Update active class for pagination buttons
    document.querySelectorAll('.pagination button').forEach(button => button.classList.remove('active'));
    document.querySelector(`.pagination button:nth-child(${pageNumber})`).classList.add('active');
}

// Initialize by showing the first page
goToPage(1);
 // Load products.json file and populate the product grid
 async function loadProducts() {
    const response = await fetch('products.json'); // Load JSON file
    const products = await response.json();
    displayProducts(products);
}

// Function to display products in the grid
function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear the grid before displaying

    // Loop through products and create HTML elements
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        productGrid.appendChild(productItem);
    });
}

// Filter products based on selected category
async function filterProducts(category) {
    const response = await fetch('products.json');
    const products = await response.json();
    
    // Filter products by category and display the filtered products
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);

   // Set and display the category description
   const categoryDescription = document.getElementById('category-description');
   const description = filteredProducts.length > 0 ? filteredProducts[0].description : "No products found.";
   categoryDescription.textContent = description;
}
// Attach click event listeners to sidebar links
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        const category = this.dataset.category;
        filterProducts(category); // Filter products by clicked category
    });
});

// Initialize the page by loading all products
loadProducts();