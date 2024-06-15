import { cart, addToCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let hoodieProductHTML = '';

products.forEach( (product)=> {
   if(product.category === "hoodies"){
    product.items.forEach((item)=>{
        hoodieProductHTML+=`
        
            <div class="hoodie-container">
            <img src="${item.image}" alt="">
            <div class="hoodie-content">
              <p>${item.name}</p>
              <p>${(item.priceCents).toFixed(2)}</p>
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


let tshirtProductHTML = '';

products.forEach((product) => {
  if (product.category === "tshirts") {
    product.items.forEach((item) => {
      tshirtProductHTML += `
        <div class="t-shirt-container">
          <img src="${item.image}" alt="">
          <div class="t-shirt-content">
            <p>${item.name}</p>
            <p>R${(item.priceCents).toFixed(2)}</p>
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

document.querySelector('.js-tshirt-grid-container').innerHTML=tshirtProductHTML;

 
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
   
     addToCart(productId);
    updateCartQuantity();
    console.log(cart);
  });
});

updateCartQuantity(); 
