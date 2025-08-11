// what actions can my cart do

// use cases


// add a product on cart
async function addItem(userCart, item) {
  userCart.push(item)
}

// calculate total of the cart

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nShopee cart TOTAL IS: ${result}`)
}
// remove one item from cart - remove um item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1) {
    userCart.splice(index, 1);
  }
  
}

// remove all items from cart
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. caso não encontre o item
  if(indexFound === -1) {
    console.log("Item not found");
    return;
  }

  //3. item > 1 subtrair um item, item = 1 deletar o item
  if(userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  }
  else if(userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
  }
  
}

// show the cart
async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | Filtro: ${item.filter} | Quantity: ${item.quantity}`);
  })
  
}
// filter items from cart
async function filterItems(userCart, filter) {
  console.log(`\nShopee cart filtered by ${filter}:`);
  
  userCart.forEach((item, index) => {
    if(item.filter === filter) {
      console.log(`${index + 1}. ${item.name} - R$${item.price} | Quantity: ${item.quantity}x | Subtotal: R$${item.subtotal()}`);
    }
  })

}


export { addItem, calculateTotal, removeItem, deleteItem, displayCart, filterItems };

