// quais ações meu carrinho pode fazer

// casos de uso


// adicionar um produto
async function addItem(userCart, item) {
  userCart.push(item)
  
}

// calcular o total do carrinho

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result)
}
// remover um produto - remove um item
async function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1) {
    userCart.splice(index, 1);
  }
  
}


// 
async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | Quantity: ${item.quantity} | Subtotal: R$${item.subtotal()}`);
  })
  
}

export { addItem, calculateTotal, removeItem, displayCart };

