import React from "react";
import { Box, Typography } from "@mui/material";

const First = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <Box style={{ position: "absolute", top: "25%", right: "7%" }}>
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
      </Box>
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
