import React, { useState } from "react";
import "./UseStateTest.css";

let a = function ChangedByUseState(props) {
  let [name, setName] = useState("pedro");
  const title = "My name is: ";
  return (
    <div>
      <div>{title}</div>
      <div className="name">{name}</div>
      <button
        onClick={() => {
          setName("Bessa");
        }}
      >
        Change to last name
      </button>
    </div>
  );
};

export default a;
