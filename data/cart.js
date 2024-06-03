export let cart = [{
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


export function updateQuantity(productId, action) {
  // Convert productId to a number
  productId = Number(productId);

  // Find the item in the cart
  let item = cart.find(cartItem => cartItem.productId === productId);

  if (item) {
    // Update the quantity based on action
    if (action === 'add') {
      item.quantity++;
    } else if (action === 'remove') {
      item.quantity--;
    }

    // Remove the item if quantity is zero or less
    if (item.quantity <= 0) {
      cart = cart.filter(cartItem => cartItem.productId !== productId);
    }
  } else if (action === 'add') {
    // If the item doesn't exist in the cart and the action is add, add the item to the cart
    cart.push({ productId: productId, quantity: 1 });
  }
}