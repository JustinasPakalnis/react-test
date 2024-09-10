import { useState } from "react";
import "./Like.css";
export function Like(props) {
  const [count, setCount] = useState(0);

  function handleClick1() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount(count - 1);
  }
  return (
    <div className="block">
      <div>
        {" "}
        <p className="title">
          {props.name} score: <span className="score">{count}</span> pts
        </p>
      </div>
      <div className="btnBlock">
        <button className="btn" onClick={handleClick1}>
          1 point!
        </button>
        <button className="btn" onClick={handleClick2}>
          1 point!
        </button>
      </div>
    </div>
  );
}
