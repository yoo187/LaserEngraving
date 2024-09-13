    // Function to update the cart count badge
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.length;
    }
    
    // Add the product to the cart and trigger animation when the button is clicked
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                name: this.dataset.name,
                price: parseFloat(this.dataset.price),
                image: this.dataset.image
            };
    
           
    
            // Update the cart count
            updateCartCount();
    
            // Find the product image and animate it (using the previous code logic)
            const productImage = this.parentElement.querySelector('img');
            animateToCart(productImage);
        });
    });
    
    // On page load, update the cart count to reflect any existing items
    window.onload = updateCartCount;