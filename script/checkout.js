import { cart } from "../data/cart.js";
import { products } from "../data/products.js";


cart.forEach((cartItem) => {
   const productId =cartItem.productId;  
   
   let matchingProduct;

   products.forEach((product) => {
     if (product.id === productId) {
      matchingProduct = product;
     }
    
   });
   console.log(matchingProduct);
  `
  <div class="product">
  <div class="image-name-container">
    <img src="image/hoodie1front.jpeg" alt="">
    <p>Shayalento Black Hoodie</p>
    
  </div>
  
  
  <div class="item-container-infor">
    <p>S</p>
    <p><button>+</button>2<button>-</button></p>
    
      <p>R800</p> 
    </div>
</div>
<hr>
  `
});