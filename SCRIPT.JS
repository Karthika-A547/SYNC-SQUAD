// Initialize cart from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add a product to the cart
function addToCart(event) {
    // Find the product details from the clicked button's parent (product card)
    const productCard = event.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

    // Create a product object
    const product = {
        name: productName,
        price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count on the page
    updateCartCount();

    // Optional: Show an alert or message that the product was added to the cart
    alert(`${productName} has been added to your cart!`);
}

// Call this function on page load to set the initial cart count
updateCartCount();
