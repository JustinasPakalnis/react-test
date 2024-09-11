import { useState } from "react";
import "./First.css";
export function Counter(props) {
  const [count, setCount] = useState(0);

  function handleClick1() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(count + 2);
  }
  function handleClick3() {
    setCount(count + 3);
  }

  return (
    <div className="block">
      <div>
        <p className="title">
          {props.name} score: <span className="score">{count}</span> pts
        </p>
      </div>
      <div className="btnBlock">
        {" "}
        <button className="btn" onClick={handleClick1}>
          1 point!
        </button>
        <button className="btn" onClick={handleClick2}>
          2 points!
        </button>
        <button className="btn" onClick={handleClick3}>
          3 points!
        </button>
      </div>
    </div>
  );
}
