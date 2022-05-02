import React from "react";
import { Box, Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import BasicSelect from "../components/Filter/Filter";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { dataProductos } from "../shared/Data";
import { darkTheme, lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";

export const Home = ({points ="20000"}) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar />
        <SubNabigation/>
        <Grid container spacing={4}>
          { dataProductos.map( (p, index) => {
            return (
              <Grid item key={index} xs={3}>
                <MediaCard />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Pagination count={10} size="large" />
          </Grid>          
        </Grid>
      </ThemeProvider>
    </>
  );
};
