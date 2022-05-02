import React from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import BasicSelect from "../components/Filter/Filter";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { dataProductos } from "../shared/Data";
import { darkTheme, lightTheme } from "../shared/Shared";

export const Home = ({points ="20000"}) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar />
        <BasicSelect />
        <Typography variant="h4" gutterBottom component="span">
           { `Total de puntos ${points}` }
        </Typography>
        <Grid container spacing={2}>
          { dataProductos.map( (p, index) => {
            return (
              <Grid item key={index} xs={3}>
                <MediaCard />
              </Grid>
            );
          })}
        </Grid>
      </ThemeProvider>
    </>
  );
};
