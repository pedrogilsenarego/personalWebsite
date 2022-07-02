import React from "react";
import Solids from "./Solids";
import { Box, Typography } from "@mui/material";

const Zero = () => {
  return (
    <Box style={{ height: "100vh", backgroundColor: "#17202A" }}>
      <Box
        bgcolor='#00000066'
        style={{
          position: "absolute",
          padding: "10px",
          borderRadius: "5px",
          bottom: "9%",
          left: "3%",
          zIndex: 3,
        }}
      >
        <Typography
          style={{
            color: "#ffffffCE",
            fontSize: "25px",
            letterSpacing: "12px",
            textTransform: "uppercase",
          }}
        >
          Pedro Sena Rego
        </Typography>
        <Typography style={{ color: "#ffffffCE", fontSize: "18px" }}>
          Front-end Developer & 3D Designer
        </Typography>
      </Box>

      <Solids />
      <Box
        style={{
          position: "absolute",
          padding: "10px",
          borderRadius: "5px",
          top: "42%",
          left: "45%",
          zIndex: 0,
        }}
      >
        <Typography
          style={{
            color: "#ffffffCE",
            fontSize: "40px",
            letterSpacing: "110px",
          }}
        >
          AMOTE
        </Typography>
      </Box>
      <Box
        style={{
          position: "absolute",
          padding: "10px",
          borderRadius: "5px",
          top: "60%",
          left: "45%",
          zIndex: 0,
        }}
      >
        <Typography
          style={{
            color: "#ffffffCE",
            fontSize: "40px",
            letterSpacing: "110px",
          }}
        >
          BABY
        </Typography>
      </Box>
    </Box>
  );
};

export default Zero;
