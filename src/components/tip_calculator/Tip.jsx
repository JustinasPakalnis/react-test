import { useState } from "react";
import "./Tip.css";
export function Tip() {
  const [tipAmount, setTipAmount] = useState("0");
  const [billPrice, setBillPrice] = useState("0");
  let tip = 0;

  function handleClick() {
    setBillPrice(billPrice);
  }

  return (
    <>
      <div className="block">
        <label>Insert total amount </label>
        <input
          value={billPrice}
          onChange={(e) => setBillPrice(e.target.value)}
          type="number"
        />
        <label>
          Pick tip amount:
          <select
            value={tipAmount}
            onChange={(e) => setTipAmount(e.target.value)}
          >
            <option disabled selected value="">
              -- Choose an Option --
            </option>
            <option value="0">0%</option>
            <option value="10">10% pretty nice</option>
            <option value="15">15% my frieeend</option>
            <option value="25">25% omg</option>
          </select>
        </label>
        <button className="btn" onClick={handleClick}>
          Calculate TIP
        </button>
        <p>Total TIP: {(billPrice * (tipAmount / 100)).toFixed(2)} Eur</p>
        <p>
          Total bill:{" "}
          {(parseInt(billPrice) + billPrice * (tipAmount / 100)).toFixed(2)} Eur
        </p>
      </div>
    </>
  );
}
