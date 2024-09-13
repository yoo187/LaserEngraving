// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');
let totalPrice = 0;

// Loop through the cart and display the items
cart.forEach(item => {
    const row = document.createElement('tr');

    // Create image element
    const imgCell = document.createElement('td');
    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.style.width = '100px';  // Adjust size as necessary
    itemImage.style.height = '100px';
    imgCell.appendChild(itemImage);
    row.appendChild(imgCell);

    // Create name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Create price cell
    const priceCell = document.createElement('td');
    priceCell.textContent = `€ ${item.price.toFixed(2)}`;
    row.appendChild(priceCell);

    cartList.appendChild(row);

    // Add up the total price
    totalPrice += item.price;
});

// Display the total price
totalPriceElement.textContent = totalPrice.toFixed(2);

// Update cart count
cartCountElement.textContent = cart.length;

// Clear cart functionality
document.getElementById('clear-cart').addEventListener('click', function() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');
    // Refresh the page
    location.reload();
});