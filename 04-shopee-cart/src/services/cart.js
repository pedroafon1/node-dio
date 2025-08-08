// quais ações meu carrinho pode fazer

// casos de uso


// adicionar um produto
async function addItem(userCart, item) {
  userCart.push(item)
}

// calcular o total do carrinho

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nShopee cart TOTAL IS: ${result}`)
}
// remover um produto - remove um item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1) {
    userCart.splice(index, 1);
  }
  
}

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

// 
async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | Quantity: ${item.quantity}x | Subtotal: R$${item.subtotal()}`);
  })
  
}

async function filterItems(userCart, filter) {
  console.log(`\nShopee cart filtered by ${filter}:`);
  userCart.forEach((item, index) => {
    if(item.filter === filter) {
      console.log(`${index + 1}. ${item.name} - R$${item.price} | Quantity: ${item.quantity}x | Subtotal: R$${item.subtotal()}`);
    }
  })

}

export { addItem, calculateTotal, removeItem, deleteItem, displayCart, filterItems };

