import { useState } from "react";
import "./Product.css";
export function Product({ name, price, amount }) {
  const [count, setCount] = useState(0);
  function addOne() {
    if (amount > count) {
      setCount(count + 1);
    }
  }
  function minusOne() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <li>
      <img src="#" alt="Produktas " />
      <p>
        {name} (likutis: {amount - count})
      </p>

      <button onClick={addOne}>+</button>
      <p>{count}</p>
      <button onClick={minusOne}>-</button>

      <p className="price">{price.toFixed(2)} eur</p>
      <p>{(count * price).toFixed(2)}</p>
    </li>
  );
}
