import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../01-useState/counter.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        Incrementar
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
