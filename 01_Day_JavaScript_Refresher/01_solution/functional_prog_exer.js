const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Print the price of each product using forEach
// products.forEach((element) => console.log(element.price));

// Print the product items as follows using forEach
/*
The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown.
*/
// products.forEach((element) => {
//   const { product, price } = element;
//   if (parseInt(price) && !isNaN(price)) {
//     console.log(`The price of ${product} is ${price} euros`);
//   } else {
//     console.log(`The price of ${product} is unknown`);
//   }
// });

// Calculate the sum of all the prices using forEach
// let totalSum = 0;
// products.forEach((element) => {
//   if (parseInt(element.price)) {
//     totalSum += element.price;
//   }
// });
// console.log(totalSum);

// Create an array of prices using map and store it in a variable prices
// const prices = products.map((product) => {
//   return product.price;
// });
// console.log(prices);

// Filter products with prices
// const withPrices = products.filter(
//   (product) => parseInt(product.price) && !isNaN(product.price)
// );
// console.log(withPrices);

// Use method chaining to get the sum of the prices(map, filter, reduce)
// const sumChain = products
//   .filter((product) => parseInt(product.price) && !isNaN(product.price))
//   .map((product) => {
//     return product.price;
//   })
//   .reduce(function (a, b) {
//     return a + b;
//   });
// console.log(sumChain);

// Calculate the sum of all the prices using reduce only
const initialValue = 0;
const sumReduce = products.reduce((accumulator, currentValue) => {
  let price = currentValue.price;
  if (parseInt(price) && !isNaN(price)) {
    return accumulator + price;
  } else return accumulator;
}, initialValue);
console.log(sumReduce);
