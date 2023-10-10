const products = [
  {
    name: 'Cherry',
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: '/images/cherry.jpg'
  },
  {
    name: 'Orange',
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: '/images/orange.jpg'
  },
  {
    name: 'Strawberry',
    price: 3.99,
    quantity: 0,
    productId: 3,
    image: '/images/strawberry.jpg'
  }
];

const cart = [];

function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  product.quantity++;
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

function increaseQuantity(productId) {
  const product = products.find(p => p.productId === productId);
  product.quantity++;
}

function decreaseQuantity(productId) {
  const product = products.find(p => p.productId === productId);
  product.quantity--;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

function removeProductFromCart(productId) {
  const product = products.find(p => p.productId === productId);
  product.quantity = 0;
  const index = cart.indexOf(product);
  if (index > -1) {
    cart.splice(index, 1);
  }
}

function cartTotal() {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
}

function emptyCart() {
  for (const product of cart) {
    product.quantity = 0;
  }
  cart.length = 0;
}

function pay(amount) {
  const total = cartTotal();
  
  if (amount < total) {
    return amount - total;
    
  } else {
    emptyCart();
    return amount - total;
    
   }
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart
}