import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart");

const item1 = await createItem("Shoes", 20.99, 1);
const item2 = await createItem("hotwheels", 39.99, 3);

// adicionei 2 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// calcular o total
await cartService.calculateTotal(myCart);


await cartService.displayCart(myCart);

