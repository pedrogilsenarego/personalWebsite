import React, { useState } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const Letter = ({ item }) => {
  const [over, setOver] = useState(false);

  return (
    <motion.div
      animate={{
        rotate: over ? 10 : 0,
        translateX: over ? 10 : 0,
        translateY: over ? Math.floor((Math.random() < 0.5 ? -1 : 1) * 10) : 0,
      }}
    >
      <Grid item>
        <h1
          onMouseEnter={() => {
            setOver(true);
          }}
          onMouseLeave={() => {
            setOver(false);
          }}
          style={{
            fontSize: "100px",
            color: over ? "#1C2833" : "#F4D03F ",
            cursor: "pointer",
            fontFamily: "'Abril Fatface', cursive",
          }}
        >
          {item}
        </h1>
      </Grid>
    </motion.div>
  );
};

export default Letter;
