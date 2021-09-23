import React, { useState } from "react";
import "./styles.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
