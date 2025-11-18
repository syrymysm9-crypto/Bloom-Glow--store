
let cart = [];

function toggleCart(){
  const panel = document.getElementById('cart-panel');
  panel.classList.toggle('open');
}

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){
  const list = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  const countSpan = document.getElementById('cart-count');

  list.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - SAR ${item.price}`;
    list.appendChild(li);
  });

  totalSpan.textContent = total;
  countSpan.textContent = cart.length;
}

function checkout(){
  if(cart.length === 0){
    alert('Your cart is empty.');
    return;
  }
  alert('Thank you for your purchase! (Demo)');
  cart = [];
  updateCart();
}
