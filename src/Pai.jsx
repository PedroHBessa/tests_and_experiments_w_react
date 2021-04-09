import React from "react";

import Filho from "./Filho.jsx";

export default function pai() {
  function func(x) {
    return <div>{x}</div>;
  }
  return (
    <div>
      <p>filho abaixo</p>
      <Filho func={func}></Filho>
    </div>
  );
}
