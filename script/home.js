import { cart, addToCart } from "../data/cart.js";
import {tshirt } from "../data/products.js";


let tshirtProductHTML = '';
tshirt.forEach((tshirtProduct) => {
  tshirtProductHTML += `
    <div class="t-shirt-container">
      <img src="${tshirtProduct.image}" alt="">
      <div class="t-shirt-content">
        <p>${tshirtProduct.name}</p>
        <p>R${tshirtProduct.priceCents.toFixed(2)}</p>
        <div class="add-buy-buttons">
          <button class="js-add-to-cart" data-product-id="${tshirtProduct.id}">ADD TO CART</button>
          <button style="background-color:#A8299B;">BUY NOW</button>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-tshirt-grid-container').innerHTML = tshirtProductHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-count').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(Number(productId));
    updateCartQuantity();
  });
});

updateCartQuantity(); // Initialize cart quantity display
