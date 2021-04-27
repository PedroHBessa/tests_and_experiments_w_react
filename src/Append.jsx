import { useState } from "react";
import React from "react";

const Append = (_) => {
  const [block, setBlock] = useState([]);
  const [word, setWord] = useState("");
  const [id, setId] = useState(1);
  const number = <div>{`${id} - ${word}`}</div>;

  const Name = (e) => {
    setWord(e.target.value);
  };
  console.log(id);
  const myref = React.createRef();

  const [input, setInput] = useState();

  const addName = () => {
    if (myref.current.value) {
      setId(id + 1);
      setBlock([...block, number]);
      myref.current.value = "";
    }
  };
  const delName = () => {
    if (id > 1) {
      setId(id - 1);
      setBlock(block.slice(0, -1));
    }
  };

  return (
    <div>
      <h1>APPEND:</h1>
      <div>
        <input
          placeholder="type here and save below"
          ref={myref}
          type="text"
          onChange={Name}
        />
      </div>
      <button onClick={addName}>ADD BLOCK BELOW</button>
      <button onClick={delName}>REMOVE BLOCK BELOW</button>
      <div>{block}</div>
    </div>
  );
};

export default Append;
