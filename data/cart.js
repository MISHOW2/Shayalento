export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: 1,
    quantity: 1
  },
  {
    productId: 4,
    quantity: 2
  }
];

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  productId = parseInt(productId);
  let matchingItem = cart.find((item) => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
  saveToStorage();
}

export function decreaseCartQuantity(cartItem) {
  if (cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    cart = cart.filter(item => item.productId !== cartItem.productId);
  }

  
  saveToStorage();
}

export function increaseCartQuantity(cartItem) {
  cartItem.quantity++;
  saveToStorage();
}
export function clearCart() {
  cart = [];
  saveToStorage();
}