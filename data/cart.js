export const cart = [{
  productId: 2,
  quantity:2
},
{
  productId: 3,
  quantity:1
}
  
];


export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
       matchingItem = cartItem;
    }
  });

  if (matchingItem) {
      matchingItem.quantity +=1;
  }else{ 
    cart.push({
      productId: productId,
      quantity:1
   });
  }
}


