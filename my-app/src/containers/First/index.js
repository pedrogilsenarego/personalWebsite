import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const First = () => {
  const { scrollYProgress } = useViewportScroll();
  const trans = useTransform(
    scrollYProgress,
    [0, 0.3, 0.47, 0.8],
    [1200, 0, 0, 1200]
  );

  console.log(trans);

  return (
    <div
      style={{
        height: "100vh",

        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <motion.Box
        animate={{
          x: ["1000px", "0px"],
        }}
        style={{
          position: "absolute",
          top: "25%",
          right: "7%",
          x: trans,
          overflow: "hidden",
        }}
      >
        <Typography
          style={{
            fontSize: "180px",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#D0D4D866",
          }}
        >
          About me
        </Typography>
      </motion.Box>
      <Box style={{ position: "absolute", top: "43%", left: "12%" }}>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: 500,
            textAlign: "left",
            color: "#000000AD",
          }}
        >
          Front-end developer focused on the user experience.
          <br />
          Passionate about functional design and engineering.
        </Typography>
      </Box>
    </div>
  );
};

export default First;
