import React, { useState } from "react";

const Letter = ({ item }) => {
  const [over, setOver] = useState(false);

  return (
    <div>
      <h1
        onMouseEnter={() => {
          setOver(true);
        }}
        onMouseLeave={() => {
          setOver(false);
        }}
        style={{
          fontSize: "100px",
          color: over ? "red" : "green",
          cursor: "pointer",
        }}
      >
        {item}
      </h1>
    </div>
  );
};

export default Letter;
