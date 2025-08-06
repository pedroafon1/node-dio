const { getFullName, productType} = require('./services/products');
const config = require('./services/config');

async function main() {
  getFullName("123", "notebook");

}

main();
