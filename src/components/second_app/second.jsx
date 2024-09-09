import "./second.css";
import { useState } from "react";
export function Second() {
  let [age, setAge] = useState("");
  age = age
    .split(" ")
    .map((element) =>
      element
        .split("")
        .map((letter, index) =>
          index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");
  return (
    <>
      <div className="strange">
        <h1>Hey guys, wanna make some strange text?</h1>
        <label>Insert normal text: </label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="string"
        />
        <p>Strange text: {age}</p>
      </div>
    </>
  );
}
