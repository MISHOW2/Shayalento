import { cart as myCart} from "../data/cart.js";
import { product, tshirtProduct } from "../data/products.js";

let productHTML = '';
product.forEach((product) => {
  productHTML += `
    <div class="new-arrival-image-container">
      <img src="${product.image}" alt="">
    </div>
    <div class="new-arrival-image-content">
      <h1>${product.name} R ${product.price}</h1>
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

document.querySelector('.js-product-container').innerHTML = productHTML;

let tshirtProductHTML = '';

tshirtProduct.forEach((tshirtProduct) => {
  tshirtProductHTML += `
    <div class="t-shirt-container">
      <img src="${tshirtProduct.image}" alt="">
      <div class="t-shirt-content">
        <p>${tshirtProduct.name}</p>
        <p>R${tshirtProduct.priceCents.toFixed(2)}</p>
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

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId =button.dataset.productId;
    

   let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
         matchingItem = item
      }
    });

    if (matchingItem) {
        matchingItem.quantity +=1
    }else{
      cart.push({
        productId: productId,
        quantity:1
     });
    }

    let cartQuantity= 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
document.querySelector('.js-count').innerHTML = cartQuantity;

  });
});
