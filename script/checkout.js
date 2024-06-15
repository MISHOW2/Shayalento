import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

// Function to update the cart display
function updateCartDisplay() {
  let cartSummaryHTML = '';  // Initialize the variable to an empty string

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      product.items.forEach((item) => {
        if (item.id === productId) {
          matchingProduct = item;
        }
      });
    });

    if (matchingProduct) {  // Ensure that matchingProduct is found before using it
      cartSummaryHTML += `
        <div class="cart-items">
          <div class="cart-item-image">
            <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
            <p>${matchingProduct.name}</p>
          </div>

          <div class="cart-item-content">
            <p>
              <select class="size-dropdown">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </p>
            <p>
              <button class="quantity-decrease" data-product-id="${cartItem.productId}">-</button>
              <span class="quantity-value">${cartItem.quantity}</span>
              <button class="quantity-increase" data-product-id="${cartItem.productId}">+</button>
            </p>
            <p>${formatCurrency(matchingProduct.priceCents)}</p>
          </div>
        </div>
      `;
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  });

  document.querySelector('.js-cart-item-container').innerHTML = cartSummaryHTML;

  // Add event listeners for the quantity buttons
  document.querySelectorAll('.quantity-increase').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      const cartItem = cart.find(item => item.productId === productId);
      if (cartItem) {
        cartItem.quantity += 1;
        updateCartDisplay();
      }
    });
  });

  document.querySelectorAll('.quantity-decrease').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      const cartItemIndex = cart.findIndex(item => item.productId === productId);
      if (cartItemIndex !== -1) {
        const cartItem = cart[cartItemIndex];
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          cart.splice(cartItemIndex, 1); // Remove item from cart
        }
        updateCartDisplay();
      }
    });
  });
}

// Initial call to display the cart items
updateCartDisplay();
