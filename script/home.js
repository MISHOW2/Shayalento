import { cart, addToCart} from "../data/cart.js";
import { hoodie, tshirt } from "../data/products.js";
import { formartCurrency } from "./utils/money.js";

let hoodieProductHTML = '';
hoodie.forEach((hoodieProduct) => {
  hoodieProductHTML += `
    <div class="new-arrival-image-container">
      <img src="${hoodieProduct.image}" alt="">
    </div>
    <div class="new-arrival-image-content">
      <h1>${hoodieProduct.name} R ${formartCurrency(hoodieProduct.priceCents)}</h1>
      <p>COLOR</p>
      <p>WHITE</p>
      <div class="size-guide">
        <p>SIZE GUIDE</p>
        <p>SIZE</p>
      </div>
      <div class="new-arrival-image-content-buttons">
        <button>XS-EXTRA SMALL</button>
        <button>S-SMALL</button>
        <button>M-MEDIUM</button>
        <button>L-LARGE</button>
        <button>XL-EXTRA LARGE</button>
        <button>XXL- EXTRA EXTRA LARGE</button>
        <button>XXXL-3X</button>
        <div class="add-buy-buttons">
          <button class="js-add-to-cart">ADD TO CART</button>
          <button style="background-color:#A8299B ;">BUY NOW</button>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-product-container').innerHTML = hoodieProductHTML;

let tshirtProductHTML = '';

tshirt.forEach((tshirtProduct) => {
  tshirtProductHTML += `
    <div class="t-shirt-container">
      <img src="${tshirtProduct.image}" alt="">
      <div class="t-shirt-content">
        <p>${tshirtProduct.name}</p>
        <p>R${formartCurrency(tshirtProduct.priceCents)}</p>
        <div class="add-buy-buttons">
          <button class="js-add-to-cart"data-product-id="${tshirtProduct.id}"
          >ADD TO CART</button>
          <button style="background-color:#A8299B;">BUY NOW</button>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-tshirt-grid-container').innerHTML = tshirtProductHTML;



function updateCartQuantity(){
  
  let cartQuantity= 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

 
document.querySelector('.js-count').innerHTML = cartQuantity;


}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId =button.dataset.productId;
  
      addToCart(productId);
      console.log(cart);
      updateCartQuantity(); 
  });
});

