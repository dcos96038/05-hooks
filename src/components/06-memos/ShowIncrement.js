import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("renderizado");
  const n = 5;

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(n);
      }}
    >
      Incrementar en {n}
    </button>
  );
});
