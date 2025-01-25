// script.js

// Select all Add to Cart buttons
const cartButtons = document.querySelectorAll('.product-card button');

// Add event listeners
cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});