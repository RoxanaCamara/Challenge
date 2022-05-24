import React, { useEffect, useReducer, useState } from "react";
import { Grid, Pagination, ThemeProvider, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Navigation/Navigation";
import { lightTheme } from "../shared/Shared";
import { SubNabigation } from "../components/SubNavigation/SubNabigation";
import { login } from "../server/Server";
import { ACTION_FILTER, ACTION_ORDEN, ACTION_PAGE, ACTION_RESET, ACTION_SEARCH, CANT_ITEM_PANT, reducer } from "./Reducer";
import { ListerProducts } from "../components/ListerProducts/ListerProducts";

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
    handleChangePage(1)
  };

  const handleChangeFilter = (filter) => {
    dispatch({ type: ACTION_FILTER, filter });
    handleChangePage(1)
  };

  const handleChangeSearch = (value) => {
    dispatch({type: ACTION_SEARCH,  textSearch: value });
    handleChangePage(1)
  };

  const handleChangeReset = () => {
    dispatch({type: ACTION_RESET});
    handleChangePage(1)
  };

  
  const handleChangePage = (num) => {
    dispatch({type: ACTION_PAGE,  num: num });
    setPage({ currentPage: num, totalPages: Math.ceil(all.productosCurrent.length / CANT_ITEM_PANT) });
  };
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar handleLoginUser={handleUsuario} user={user} />                
        <SubNabigation points={user.points} handleOrden={handleChangeOrden} handleFilter={handleChangeFilter} handleSearch={handleChangeSearch} handleReset={ handleChangeReset} />
        <ListerProducts productosCurrent={all.productosCurrent}  points={user.points}  handleBuyProduct={handleBuyProduct} />
        <Pagination count={page.totalPages} page={page.currentPage} size="large" onChange={(event, value) => handleChangePage(value)}  />
      </ThemeProvider>
    </>
  );
};
