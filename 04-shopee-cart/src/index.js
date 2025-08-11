import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import readline from "readline";

const myCart = [];
const myWishList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask something and wait for an answer
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  let option;

  do {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Welcome to your Shopee Cart");
    console.log("\n===== MENU Shopee Cart =====");
    console.log("1 - Add product to cart");
    console.log("2 - Remove product from cart");
    console.log("2 - See your cart");
    console.log("3 - Filter cart by filter");
    console.log("4 - Exit");

    option = await ask("\nChoose one option: ");

    switch (option) {
      case "1":
        const name = await ask("Enter product name: ");
        const filter = await ask("Enter product filter: ");
        const price = await ask("Enter the product price: ");
        const quantity = await ask("Enter the quantity of the product:");

        const item = createItem(name, filter, price, quantity);
        cartService.addItem(myCart, item);
        console.log("\n✅ Product added successfully!\n");
        break;
      //case "2":
        //const itemToRemove = await ask("Enter the product name: ");

      case "3":
        if (myCart.length === 0) {
          console.log("🛒 Empty cart!\n");
        } else {
          cartService.displayCart(myCart);
        }
        break;

      case "4":
        if(myCart.length === 0) {
          console.log("🛒 There is no filter because the cart is empty!\n")
        } 
        else {
          const filtro = await ask("Enter the filter: ");
          cartService.filterItems(myCart, filtro);
        } 
        break;
      case "5":
        console.log("Thank you for using Shopee Cart!");
        console.log("Leaving the cart...");
        break;

      default:
        console.log("⚠️ Invalid option!");
    }
  } while (option !== "5");

  rl.close();
}

main();
