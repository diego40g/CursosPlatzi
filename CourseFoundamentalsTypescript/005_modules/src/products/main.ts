import { addProduct, calcularStock, products } from "./product.service";

addProduct({
  title: "product1",
  createdAt: new Date(1993,1,22),
  stock: 5
})
addProduct({
  title: "product2",
  createdAt: new Date(1995,12,22),
  stock: 11,
  size: 'M'
})

console.log(products);
const total = calcularStock();
console.log(total)
