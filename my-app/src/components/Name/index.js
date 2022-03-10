import React from "react";
import Letter from "./Letter";

const Name = () => {
  const name = ["P", "E", "D", "R", "O"];

  return (
    <div>
      {name.map((item) => {
        return <Letter item={item} />;
      })}
    </div>
  );
};

export default Name;
