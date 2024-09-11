import { useState, useEffect } from "react";
import "./Product.css";
export function Product({ name, price, amount, updateProductCount }) {
  const [count, setCount] = useState(0);

  // pasileidzia kas kart, kai yra perpiesiamas komponentas
  // useEffect(() => {
  //     console.log(11111111111);
  // });

  // pasileidzia tik pirma karta piesiant komponenta
  // useEffect(() => {
  //     console.log(222222222222);
  // }, []);

  // pasileidzia kai pasikeicia nuroddytu kintamuju reiksmes
  useEffect(() => {
    updateProductCount(name, count);
  }, [count]);

  function addOne() {
    if (amount > count) {
      setCount(count + 1);
      updateProductCount(name, count + 1);
    }
  }
  function minusOne() {
    if (count > 0) {
      setCount(count - 1);
      updateProductCount(name, count - 1);
    }
  }
  return (
    <li>
      <img src="#" alt="Produktas " />
      <p>
        {name} (likutis: {amount - count})
      </p>
      <button className="productBtn" onClick={addOne}>
        +
      </button>
      <p>{count}</p>
      <button className="productBtn" onClick={minusOne}>
        -
      </button>
      <p className="price">{price.toFixed(2)} eur</p>
      <p>{(count * price).toFixed(2)}</p>
    </li>
  );
}
