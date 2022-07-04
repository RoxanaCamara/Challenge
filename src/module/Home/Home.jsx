import React, { useEffect, useState } from "react";
import { ThemeProvider, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/Navigation/Navigation";
import { init, lightTheme } from "../../shared/Shared";
import { login, pointsAdd, products } from "../../server/Server";
import { ListerProducts } from "../../components/ListerProducts/ListerProducts";
import BasicAlerts from "../../components/Alerts/Alerts";

export const Home = () => {
  const [user, setUser] = useState(init)
  const [productAll, setProductAll] = useState(init)
  const [alert, setAlert] = useState(init)


  useEffect(() => {
    products(setProductAll);
  }, []);

  const handleUsuario  = () => {
    login(setUser)
  }

  const handlePoints  = (value) => {
    pointsAdd(setAlert, value)
    let newValor = alert.response ?  alert.response : user.response.points
    let newUser = { ...user, response: { ...user.response, points: newValor} }
    setUser(newUser)
  }
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar handleLoginUser={handleUsuario} user={user.response} handlePoints={handlePoints} />
        <BasicAlerts error={alert.error} success={alert.response} />

        {
          productAll.loading &&
          <Typography variant="body2" component="div" color="text.secondary">
          ...paciencia
        </Typography>
        }
        {
          productAll.error &&
          <Typography variant="body2" component="div" color="text.secondary">
          ups..Algo salio mal
        </Typography>
        }
        {
          productAll.response &&
          <ListerProducts productosCurrent={productAll.response}  points={user.points}   />          
        }
      </ThemeProvider>
    </>
  );
};
