import { cart, decreaseCartQuantity, increaseCartQuantity, clearCart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function generateCartSummary() {
  let cartSummaryHTML = '';
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

    if (matchingProduct) {
      const totalItemPrice = cartItem.quantity * matchingProduct.priceCents;
      cartSummaryHTML += `
        <div class="cart-items">
          <div class="cart-item-image">
            <img src="${matchingProduct.image}" alt="">
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
            <p>${formatCurrency(totalItemPrice)}</p>
          </div>
        </div><hr>
      `;
    }
  });

  document.querySelector('.js-cart-item-container').innerHTML = cartSummaryHTML;
  attachEventListeners();
  generateCartPrice();
}

function attachEventListeners() {
  document.querySelectorAll('.quantity-decrease').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.dataset.productId);
      const cartItem = cart.find((item) => item.productId === productId);
      if (cartItem) {
        decreaseCartQuantity(cartItem);
        generateCartSummary();
      }
    });
  });

  document.querySelectorAll('.quantity-increase').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.dataset.productId);
      const cartItem = cart.find((item) => item.productId === productId);
      if (cartItem) {
        increaseCartQuantity(cartItem);
        generateCartSummary();
      }
    });
  });

  document.querySelector('.js-clear-cart').addEventListener('click', () => {
    clearCart();
    generateCartSummary();
  });
}

function generateCartPrice() {
  let totalPrice = 0;

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

    if (matchingProduct) {
      totalPrice += cartItem.quantity * matchingProduct.priceCents;
    }
  });

  const totalHTML = `
    <p>Total: ${formatCurrency(totalPrice)}</p>
    <button class="js-clear-cart">Clear Cart</button>
  `;
  
  document.querySelector('.js-total').innerHTML = totalHTML;

  // Attach event listener for the Clear Cart button
  document.querySelector('.js-clear-cart').addEventListener('click', () => {
    clearCart();
    generateCartSummary(); // Re-generate the cart summary after clearing
  });
}

// Initial generation of cart summary
generateCartSummary();
