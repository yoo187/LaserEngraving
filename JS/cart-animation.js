// Select the cart icon element
const cartIcon = document.querySelector('.fa-shopping-cart');

// Function to animate the product image sliding to the cart
function animateToCart(imageElement) {
    const imgClone = imageElement.cloneNode(true);
    const cartIconRect = cartIcon.getBoundingClientRect();
    const imageRect = imageElement.getBoundingClientRect();

    // Append the cloned image to the body
    imgClone.classList.add('sliding-image');
    document.body.appendChild(imgClone);

    // Set the initial position of the cloned image
    imgClone.style.left = `${imageRect.left}px`;
    imgClone.style.top = `${imageRect.top}px`;
    imgClone.style.position = 'absolute';

    // Calculate the target position (the cart icon)
    const targetX = cartIconRect.left - imageRect.left;
    const targetY = cartIconRect.top - imageRect.top;

    // Trigger the slide animation by updating the transform property
    setTimeout(() => {
        imgClone.style.transform = `translate(${targetX}px, ${targetY}px) scale(0.1)`;
        imgClone.style.opacity = '0';
    }, 100); // A small delay to trigger the transition

    // Remove the cloned image after the animation completes
    setTimeout(() => {
        imgClone.remove();
        cartIcon.classList.add('bounce'); // Bounce effect on the cart icon
    }, 1000); // Match the transition time (1 second)

    // Remove the bounce effect after animation
    setTimeout(() => {
        cartIcon.classList.remove('bounce');
    }, 1500);
}

// Add the product to the cart and trigger animation when the button is clicked
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const item = {
            name: this.dataset.name,
            price: parseFloat(this.dataset.price),
            image: this.dataset.image
        };

        // Add the item to the cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Find the product image and animate it
        const productImage = this.parentElement.querySelector('img');
        animateToCart(productImage);
    });
});