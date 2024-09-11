import { useState } from "react";
import { Product } from "../products/Product";
import styles from "./Grocery.module.css";
const productList = [
  { key: 21, name: "Agurkas", price: 5, amount: 100 },
  { key: 22, name: "Pomidoras", price: 51, amount: 10 },
  { key: 23, name: "Krapas", price: 5, amount: 100 },
  { key: 24, name: "Suris", price: 51, amount: 123 },
  { key: 25, name: "Suopis", price: 52, amount: 222 },
  { key: 26, name: "Plumbus", price: 25, amount: 133300 },
  { key: 27, name: "Bobbish", price: 5, amount: 10210 },
];
const initialProductsState = {};

for (const product of productList) {
  initialProductsState[product.name] = 0;
}

// function updateProductCount(productName, newCount) {
//   console.log(productName, newCount);
// }
export function Grocery() {
  const [productsState, setProductsState] = useState(initialProductsState);
  let totalCount = 0;
  let totalPrice = 0;

  for (const key in productsState) {
    totalCount += productsState[key];
  }

  for (const product of productList) {
    totalPrice += product.price * productsState[product.name];
  }

  function updateProductCount(productName, newCount) {
    setProductsState({
      ...productsState,
      [productName]: newCount,
    });
  }
  return (
    <main>
      <h1>Suodziu krautuve</h1>
      <ul>
        {productList
          .filter((product) => product.amount > 0)
          .map((product) => (
            <Product
              {...product}
              key={product.key}
              updateProductCount={updateProductCount}
            />
          ))}
        <p>Total: {totalCount} vnt</p>
      </ul>
    </main>
  );
}
