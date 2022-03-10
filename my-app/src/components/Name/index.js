import React from "react";
import Letter from "./Letter";
import { Grid } from "@mui/material";

const Name = () => {
  const name = ["P", "e", "d", "r", "o"];

  return (
    <Grid container direction="row" spacing={1}>
      {name.map((item) => {
        return <Letter item={item} />;
      })}
    </Grid>
  );
};

export default Name;
