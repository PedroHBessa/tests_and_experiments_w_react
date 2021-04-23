import React, { useContext, useState } from "react";
import DataContext from "./data/DataContext";

const UseContext = function () {
  const [context, setContext] = useState(useContext(DataContext));

  const changeContext = (text) => {
    setContext({ ...context, titulo: text });
  };

  const [inputText, setInputText] = useState("");
  const changeInputText = (e) => {
    setInputText(e.target.value);
    console.log(e.target);
  };

  return (
    <div>
      <h1>USE CONTEXT:</h1>

      <input type="text" value={inputText} onChange={changeInputText} />

      <button onClick={() => changeContext(inputText)}>change my text</button>

      <h3>{context.titulo}</h3>
    </div>
  );
};

export default UseContext;
