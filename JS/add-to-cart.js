// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

// Loop through the cart and display the items
cart.forEach(item => {
    const listItem = document.createElement('li');

    // Create an image element
    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.style.width = '100px';  // Adjust size as necessary
    itemImage.style.height = '100px';

    // Create a text element for the name and price
    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} - € ${item.price}`;

    // Add image and text to list item
    listItem.appendChild(itemImage);
    listItem.appendChild(itemText);

    cartList.appendChild(listItem);

    // Add up the total price
    totalPrice += item.price;
});

// Display the total price
totalPriceElement.textContent = totalPrice.toFixed(2);

// Clear cart functionality
document.getElementById('clear-cart').addEventListener('click', function() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    // Refresh the page
    location.reload();
});