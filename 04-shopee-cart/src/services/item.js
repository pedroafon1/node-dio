//casos de uso dos itens

// criar item com subtotal certo

async function createItem(name, filter, price, quantity) {
  return {
    name,
    price,
    quantity,
    filter,
    subtotal: () => price * quantity,    
  }
  
}

export default createItem