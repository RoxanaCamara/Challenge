import React from "react";
import { Box, Grid, Pagination, ThemeProvider, Typography, Card } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import BasicSelect from "../components/Filter/Filter";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { dataProductos, user } from "../shared/Data";
import { darkTheme, lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";

export const Home = ({points ="20000"}) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar />
                
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '3px  45px' }}>
        <Grid item xs={12}>
          <SubNabigation points={user.points} />
        </Grid>

          { dataProductos.map( (p, index) => {
            return (
              <Grid item key={index} xs={2}>
                <MediaCard name={p.name} price={p.price} pricePoints={p.pricePoints} pricePointsUser={user.points}  />
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
