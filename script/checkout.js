import { cart, addToCart,updateQuantity} from "../data/cart.js";
import { tshirt, hoodie } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


let cartSummaryHTML ='';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  tshirt.forEach((tshirt) =>{
  if(tshirt.id === productId) {
     matchingProduct = tshirt;
  }
  });

 
 
 cartSummaryHTML += `
  <div class="product">
  <div class="image-name-container">
    <img src="${matchingProduct.image}" alt="">
    <p>${matchingProduct.name}</p>
    
  </div>
  
  
  <div class="item-container-infor">
    <p>S</p>
    <p>
  <button class="js-quantity-change" data-product-id="${matchingProduct.id}" data-action="add">+</button>
  ${cartItem.quantity}
  <button class="js-quantity-change" data-product-id="${matchingProduct.id}" data-action="remove">-</button>
</p>
<p>R${formatCurrency(matchingProduct.priceCents)}</p>
    </div>
</div>
<hr>
  `;

});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


// Add event listeners to quantity change buttons
document.querySelectorAll('.js-quantity-change').forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = button.dataset.productId;
    const action = button.dataset.action;
    updateQuantity(productId, action);
    console.log(cart);
  });
});



