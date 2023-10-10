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
cart.forEach(product => {
  total += product.price * product.quantity;
});
return total;
};
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(0,cart.length);
  
  products.forEach((product) => {
    product.quantity = 0;
  });
};
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let remaining = 0;
function pay(amount){
   remaining += amount;
   return remaining - cartTotal();
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/


module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
 // currency
};
