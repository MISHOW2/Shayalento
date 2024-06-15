import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    product.items.forEach((item) => {
      if (item.id ===  productId ) {
         matchingProduct = item;
      }
    });
  });

     
 cartSummaryHTML+= `
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
  <p>${formatCurrency(matchingProduct.priceCents)}</p>
</div>

</div>
`;
  });
  

  document.querySelector('.js-cart-item-container').innerHTML=cartSummaryHTML;
console.log(cartSummaryHTML);