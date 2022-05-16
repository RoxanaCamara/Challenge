import React from "react";
import Box from '@mui/material/Box';
import { Typography, Grid, Toolbar, AppBar, createTheme, ThemeProvider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SelectOrden from "../Orden/Orden";
import BasicSelect from "../Filter/Filter";
import { Search, SearchIconWrapper, StyledInputBase } from "../../shared/Shared";

export const SubNabigation = ({ handleOrden, handleFilter, handleSearch }) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  const handleChange = (event) => {
    event.preventDefault();
    handleSearch(event.target.value)
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static'>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
          />
        </Search>   
            <BasicSelect  handleFilter={handleFilter}/>
            <SelectOrden handleOrden={handleOrden} />
      </Toolbar>
    </AppBar>
  </Box>
    </ThemeProvider>

  );
};
