import "./Second.css";
import { useState } from "react";
export function Second() {
  const [strangeText, setStrangeText] = useState("");
  const newStrangeText = strangeText
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
          className="input"
          value={strangeText}
          onChange={(e) => setStrangeText(e.target.value)}
          type="string"
        />
        <p>Strange text: {newStrangeText}</p>
      </div>
    </>
  );
}
