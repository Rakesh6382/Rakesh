const heroImage = document.getElementById('heroImage');
const dishes = document.querySelectorAll('.dish');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

let cart = [];

// Start spinning animation on page load
window.addEventListener('load', () => {
  heroImage.classList.add('spin');
});

dishes.forEach(dish => {
  dish.addEventListener('click', () => {
    const newImageSrc = dish.getAttribute('data-img');

    // Temporarily stop the spinning
    heroImage.classList.remove('spin');

    // Change image source
    heroImage.src = newImageSrc;

    // Force a reflow before adding the class again
    void heroImage.offsetWidth;

    // Resume spinning
    heroImage.classList.add('spin');
  });
});


















addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    cart.push({ name, price });
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cart.length;
}

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});