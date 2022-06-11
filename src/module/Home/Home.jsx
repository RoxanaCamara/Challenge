import React, { useEffect, useState } from "react";
import { Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/Navigation/Navigation";
import { lightTheme } from "../../shared/Shared";
import { login, products } from "../../server/Server";
import { ListerProducts } from "../../components/ListerProducts/ListerProducts";
import { History } from "../History/History";

export const Home = () => {
  const [user, setUser] = useState({ name: "Guesst", points: 0})
  const [productAll, setProductAll] = useState()

  useEffect(() => {
    products(setProductAll);
  }, []);

  const handleUsuario  = () => {
    login(setUser)
  }
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar handleLoginUser={handleUsuario} user={user} />                
        
        
        {
          productAll && productAll.length > 0 ?
          <ListerProducts productosCurrent={productAll}  points={user.points}  />
          :
          <Typography variant="body2" component="div" color="text.secondary">
          ups..paciencia
        </Typography>
        }
      </ThemeProvider>
    </>
  );
};
