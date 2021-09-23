import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div>
      <h1>Counter with hook: {state}</h1>
      <hr />

      <button className="btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn-primary" onClick={() => decrement(1)}>
        -1
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
