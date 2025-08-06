//todas as funções que lidam com produtos
const productType = {
  version: "digital",
  tax: "x1"
}


async function getFullName(codeId, productName) {
  console.log("\n")
  console.log("produto: " + codeId + "--" + productName);
}

async function getProductLabel(productName) {
  console.log("produto: " + productName);
  
}

module.exports = { 
  getFullName,
  getProductLabel,
  productType,
};