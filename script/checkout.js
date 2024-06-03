import { cart, addToCart } from "../data/cart.js";
import { tshirt, hoodie } from "../data/products.js";
import { formartCurrency } from "./utils/money.js";


let cartSummaryHTML ='';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  tshirt.forEach((tshirt) =>{
  if(tshirt.id === productId) {
     matchingProduct = tshirt;
  }
  });
  console.log(matchingProduct);
 
 
 cartSummaryHTML += `
  <div class="product">
  <div class="image-name-container">
    <img src="${matchingProduct.image}" alt="">
    <p>${matchingProduct.name}</p>
    
  </div>
  
  
  <div class="item-container-infor">
    <p>S</p>
    <p><button>+</button>${cartItem.quantity}<button>-</button></p>
    
      <p>R${formartCurrency(matchingProduct.priceCents)}</p> 
    </div>
</div>
<hr>
  `;
  console.log(cartSummaryHTML);
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
