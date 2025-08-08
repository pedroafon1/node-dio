import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart");

// criando itens
const item1 = await createItem("car","automovel", 20.99, 1);
const item2 = await createItem("hotwheels","toy", 39.99, 3);
const item3 = await createItem("car2","automovel", 20.99, 1);

// adicionei 3 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// removendo um item do carrinho
/* await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2); */

// filtrando prdoutos por categoria
await cartService.filterItems(myCart, "automovel");

// exibir o carrinho
/* await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart); */

