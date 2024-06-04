import { cart, updateQuantity } from "../../data/cart.js";
import { tshirt, hoodie } from "../../data/products.js";
import { formatCurrency } from "../../utils/money.js";



export function renderOrdeSummary(){
  let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct = tshirt.find(tshirtProduct => tshirtProduct.id === productId) || 
                        hoodie.find(hoodieProduct => hoodieProduct.id === productId);

  if (matchingProduct) {
    cartSummaryHTML += `
      <div class="product js-cart-item-container-${matchingProduct.id}">
        <div class="image-name-container">
          <img src="${matchingProduct.image}" alt="">
          <p>${matchingProduct.name}</p>
        </div>
        <div class="item-container-infor">
          <p>S</p>
          <p>
            <button class="js-quantity-change" data-product-id="${matchingProduct.id}" data-action="remove">-</button>
            <span class="js-cart-quantity">${cartItem.quantity}</span>
            <button class="js-quantity-change" data-product-id="${matchingProduct.id}" data-action="add">+</button>
          </p>
          <p>R${formatCurrency(matchingProduct.priceCents)}</p>
        </div>
      </div>
      <hr>
     
    `;


  }

});

// Add event listeners to quantity change buttons
document.querySelectorAll('.js-quantity-change').forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = button.dataset.productId;
    const action = button.dataset.action;
    updateQuantity(productId, action);

    // Find the container and update the displayed quantity
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    if (container) {
      const quantitySpan = container.querySelector('.js-cart-quantity');
      const item = cart.find(cartItem => cartItem.productId === Number(productId));
      if (item) {
        quantitySpan.textContent = item.quantity;
      } else {
        container.remove();
      }
    }
  });
});



document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
}

renderOrdeSummary();
