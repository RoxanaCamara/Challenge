import { Typography, Grid } from "@mui/material";
import React from "react";
import BasicSelect from "../Filter/Filter";

export const SubNabigation = ({ elevation = 0, points = 2000 }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <BasicSelect />
      <Typography variant="h4" gutterBottom component="span">
        {`Total de puntos ${points}`}
      </Typography>
    </Grid>
  );
};
