import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

// Generate and display hoodie products
let hoodieProductHTML = '';
products.forEach((product) => {
  if (product.category === "hoodies") {
    product.items.forEach((item) => {
      hoodieProductHTML += `
        <div class="hoodie-container">
          <img src="${item.image}" alt="">
          <div class="hoodie-content">
            <p>${item.name}</p>
            <p>${formatCurrency(item.priceCents)}</p>
            <div class="add-buy-buttons">
              <button class="js-add-to-cart" data-product-id="${item.id}">ADD TO CART</button>
              <button style="background-color:#A8299B;">BUY NOW</button>
            </div>
          </div>
        </div>
      `;
    });
  }
});
document.querySelector('.js-hoodie-grid-container').innerHTML = hoodieProductHTML;

// Generate and display t-shirt products
let tshirtProductHTML = '';
products.forEach((product) => {
  if (product.category === "tshirts") {
    product.items.forEach((item) => {
      tshirtProductHTML += `
        <div class="t-shirt-container">
          <img src="${item.image}" alt="">
          <div class="t-shirt-content">
            <p>${item.name}</p>
            <p>${formatCurrency(item.priceCents)}</p>
            <div class="add-buy-buttons">
              <button class="js-add-to-cart" data-product-id="${item.id}">ADD TO CART</button>
              <button style="background-color:#A8299B;">BUY NOW</button>
            </div>
          </div>
        </div>
      `;
    });
  }
});
document.querySelector('.js-tshirt-grid-container').innerHTML = tshirtProductHTML;

// Function to update the cart quantity display
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-count').innerHTML = cartQuantity;
}

// Add event listeners to "ADD TO CART" buttons
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
    console.log(cart);
  });
});

// Initial update of cart quantity display
updateCartQuantity();
