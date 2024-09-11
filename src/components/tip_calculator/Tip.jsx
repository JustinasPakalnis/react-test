import React, { useState } from "react";
import styles from "./Tip.module.css"; // Import the CSS module

export function Tip() {
  const [billPrice, setBillPrice] = useState(0);
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBillChange = (e) => {
    setBillPrice(parseFloat(e.target.value) || 0);
  };

  const handleTipChange = (e) => {
    setTipPercentage(e.target.value);
  };

  const calculateTipAndTotal = () => {
    const percentage = parseFloat(tipPercentage) || 0;
    const tip = (billPrice * percentage) / 100;
    const total = billPrice + tip;
    setTipAmount(tip);
    setTotalAmount(total);
  };

  return (
    <div className={styles.block}>
      <label>
        Insert total amount:
        <input
          type="number"
          min="0"
          step="0.01"
          value={billPrice}
          onChange={handleBillChange}
        />
      </label>
      <label>
        Pick tip amount:
        <select value={tipPercentage} onChange={handleTipChange}>
          <option value="" disabled>
            -- Choose an Option --
          </option>
          <option value="0">0%</option>
          <option value="10">10% pretty nice</option>
          <option value="15">15% my friend</option>
          <option value="25">25% omg</option>
        </select>
      </label>
      <button className={styles.btn} onClick={calculateTipAndTotal}>
        Calculate TIP
      </button>
      <p>Total TIP: {tipAmount.toFixed(2)} Eur</p>
      <p>Total bill: {totalAmount.toFixed(2)} Eur</p>
    </div>
  );
}
