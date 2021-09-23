import React, { useRef } from "react";
import "./styles.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  const handleFocus = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nombre"
      />
      <button onClick={handleFocus} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </div>
  );
};
