import { useReducer } from "react";

const initialState = {
  name: "pedro",
  age: 28,
};

function reducer(state, action) {
  switch (action.type) {
    case "changeToLastName":
      return { ...state, name: "bessa" };
    case "agePlusOne":
      return { ...state, age: state.age + 1 };
    default:
      return { state };
  }
}

const UseReducer = function () {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);
  return (
    <div>
      <h1>USE REDUCER:</h1>
      <h3>nome: {state.name}</h3>
      <h3>idade: {state.age}</h3>
      <span>
        <button onClick={() => dispatch({ type: "changeToLastName" })}>
          Change to last name
        </button>
        <button onClick={() => dispatch({ type: "agePlusOne" })}>
          add age +1
        </button>
      </span>
    </div>
  );
};

export default UseReducer;
