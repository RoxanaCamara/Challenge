import React, { useEffect, useState } from "react";
import { Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";
import { login, products } from "../server/Server";

export const Home = () => {
  const [productos, setProductos] = useState([])
  const [productosCurrent, setProductosCurrent] = useState()
  const [user, setUser] = useState({ name: "Guesst", points: 0})
  const [page, setPage] = useState()

  const handleUsuario  = () => {
    login(setUser)
  }
  
  useEffect(() => {
    products(setProductos)    
  }, [])

  useEffect(() => {  
    handleChangePage(1)
  }, [productos])
  

  const handleBuyProduct = (newPointsUser) => {
    setUser({  ...user, points: newPointsUser } )
  }

  const handleChangePage = (num) => {
    let productAll = productos;    
    let cant =  5
    let total =  Math.ceil(productAll.length / cant)
    let fin = num * cant
    let inicio = fin - cant
    let productRest = productAll.slice( inicio,fin )
    setProductosCurrent(productRest)
    console.log(num)
    setPage({ currentPage: num, totalPages: total  }); 
    console.log(page)

  }

  const handleChange = (event, value) => {
    handleChangePage(value)
  };

  

  return (
    <>
      <ThemeProvider theme={lightTheme}>
       {
         productosCurrent ?

         <>
         <ResponsiveAppBar handleLoginUser={handleUsuario} user={user} />                
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '3px  45px' }}>
         <Grid item xs={12}>
           <SubNabigation points={user.points} />
         </Grid>
 
           { productosCurrent.map( (p, index) => {
             return (
               <Grid item key={index} xs={2}>
                 <MediaCard product={p} pricePoints={p.pricePoints} pricePointsUser={user.points} buyProduct={handleBuyProduct}  />
               </Grid>
             );
           })}
           <Grid item xs={12}>
             <Pagination count={page.totalPages} page={page.currentPage} size="large" onChange={handleChange}  />
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
