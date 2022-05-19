import React, { useEffect, useReducer, useState } from "react";
import { Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import MediaCard from "../components/CardProduct/CardProduct";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";
import { login } from "../server/Server";
import { ACTION_FILTER, ACTION_ORDEN, ACTION_PAGE, ACTION_SEARCH, CANT_ITEM_PANT, reducer } from "./Reducer";

export const Home = ({productos}) => {
  const [user, setUser] = useState({ name: "Guesst", points: 0})
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 })
  const [all, dispatch] = useReducer(reducer, {  productos, productosCurrent: productos  } );

  const handleUsuario  = () => {
    login(setUser)
  }

  useEffect(() => { 
    handleChangePage(1)
  }, [])


  const handleBuyProduct = (newPointsUser) => {
    setUser({  ...user, points: newPointsUser } )
  }

  const handleChangeOrden = (typeOrden) => {
    dispatch({ type: ACTION_ORDEN, typeOrden });
  };

  const handleChangeFilter = (filter) => {
    dispatch({ type: ACTION_FILTER, filter });
  };

  const handleChangeSearch = (value) => {
    dispatch({type: ACTION_SEARCH,  textSearch: value });
  };

  const handleChangePage = (num ) => {
    dispatch({type: ACTION_PAGE,  num: num });
    setPage({ currentPage: num, totalPages: Math.ceil(all.productosCurrent.length / CANT_ITEM_PANT) });
  };
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
         <ResponsiveAppBar handleLoginUser={handleUsuario} user={user} />                
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '3px  45px' }}>
         <Grid item xs={12}>
           <SubNabigation points={user.points} handleOrden={handleChangeOrden} handleFilter={handleChangeFilter} handleSearch={handleChangeSearch} />
         </Grid> 
         { all.productosCurrent.map( (p, index) => {
        return (
          <Grid item key={index} xs={2}>
            <MediaCard product={p} pricePoints={p.pricePoints} pricePointsUser={user.points} buyProduct={handleBuyProduct}  />
          </Grid>
        );
      })}
           <Grid item xs={12}>
             <Pagination count={page.totalPages} page={page.currentPage} size="large" onChange={(event, value) => handleChangePage(value)}  />
           </Grid>          
         </Grid>
      </ThemeProvider>
    </>
  );
};
