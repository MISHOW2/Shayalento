export let cart = [];

// This ensures `cart` is an empty array if `localStorage` does not have a 'cart' item


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId) {
  let matchingItem = cart.find(cartItem => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
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
  } 
}