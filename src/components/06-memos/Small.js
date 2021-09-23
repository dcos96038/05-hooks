import React, { memo } from "react";

export const Small = memo(({ counter }) => {
  console.log("Renderizado");
  return <small>{counter}</small>;
});
