import { useReducer, useState } from "react";
import { ACTION_FILTER, ACTION_ORDEN, ACTION_PAGE, ACTION_RESET, ACTION_SEARCH, reducer } from "../module/Home/Reducer";

export const useProducts = (productAll) => {
    
    const [productosCurrently, dispatch] = useReducer(reducer, productAll);
    
    const handleBuyProduct = (newPointsUser) => {
      
    }
      
    const handleOrden = (typeOrden) => {
      dispatch({ type: ACTION_ORDEN, typeOrden });
    };
      
    const handleFilter = (filter) => {
      dispatch({ type: ACTION_FILTER, filter });
    };
      
    const handleSearch = (value) => {
      dispatch({type: ACTION_SEARCH,  textSearch: value });
    };
      
    const handleReset = () => {
      dispatch({type: ACTION_RESET});
    };
      
      
    const handlePage = (num) => {
      dispatch({type: ACTION_PAGE,  num: num });
    };

    return {productosCurrently, handleBuyProduct,
        handleOrden,
        handleFilter,              
        handleSearch,
        handleReset,
        handlePage}
    
}