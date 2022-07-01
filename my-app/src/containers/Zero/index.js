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
          top: "40%",
          left: "5%",
          zIndex: 3,
        }}
      >
        <Typography style={{ color: "#ffffffCE", fontSize: "45px" }}>
          Pedro Sena Rego
        </Typography>
        <Typography style={{ color: "#ffffffCE", fontSize: "20px" }}>
          Front-end Developer & 3D Designer
        </Typography>
      </Box>
      <Solids />
    </Box>
  );
};

export default Zero;
