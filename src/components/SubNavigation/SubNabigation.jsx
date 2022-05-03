import React from "react";
import Box from '@mui/material/Box';
import { Typography, Grid, Toolbar, AppBar, createTheme, ThemeProvider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BasicSelect from "../Filter/Filter";
import { Search, SearchIconWrapper, StyledInputBase, SubAppBar } from "../../shared/Shared";

export const SubNabigation = ({ points = 0 }) => {

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
          />
        </Search>   
        <Box sx={{ flexGrow: 1 }} />
          <Box>
            <BasicSelect />
          </Box>
      </Toolbar>
    </AppBar>
  </Box>
    </ThemeProvider>

  );
};
