import React, { useEffect, useState } from "react";
import { Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { dataProductos, user } from "../shared/Data";
import { lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";
import { handleProducts } from "../server/Product";

export const Home = ({points ="20000"}) => {

  const [productos, setProductos] = useState()

  useEffect(() => {
    handleProducts(setProductos) 
  }, [])
  
  console.log(productos)

  return (
    <>
      <ThemeProvider theme={lightTheme}>
       {
         productos ?

         <>
         <ResponsiveAppBar />                
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '3px  45px' }}>
         <Grid item xs={12}>
           <SubNabigation points={user.points} />
         </Grid>
 
           { productos.map( (p, index) => {
             return (
               <Grid item key={index} xs={2}>
                 <MediaCard product={p} pricePoints={p.pricePoints} pricePointsUser={user.points}  />
               </Grid>
             );
           })}
           <Grid item xs={12}>
             <Pagination count={10} size="large" />
           </Grid>          
         </Grid>
         </>
         : 
         <Typography variant="body2" component="div" color="text.secondary">
              ups..paciencia
        </Typography>


       }
      </ThemeProvider>
    </>
  );
};
