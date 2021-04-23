import { useEffect, useState } from "react";

function ToSquare(numberParam) {
  return numberParam * numberParam;
}

function incNumber(x) {
  return x + 1;
}

const TestUseEffect = (_) => {
  const [number, setNumber] = useState(0);
  const [doubleNumber, setRaiseNumber] = useState(0);

  useEffect(() => setRaiseNumber(ToSquare(number)), [number]);

  useEffect(() => {
    if (number <= 100) {
      const interval = setInterval(() => {
        setNumber(incNumber(number));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setNumber(0);
    }
  }, [number]);

  return (
    <div>
      <h2>
        <span>{number} square is </span>
        {doubleNumber}
      </h2>
    </div>
  );
};

export default TestUseEffect;
