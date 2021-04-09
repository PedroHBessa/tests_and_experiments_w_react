import React, { useState } from "react";

let a = function Input() {
  let [input, setInput] = useState("initial");

  function ChangeValue(e) {
    setInput(e.target.value);
    console.log(e.target);
  }

  return (
    <div>
      <h2>input:</h2>
      <input value={input} onChange={ChangeValue} />
      <h3>{input}</h3>
    </div>
  );
};

export default a;
