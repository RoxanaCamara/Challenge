import React, { useState } from 'react';
import { Box, Typography, TextField, InputLabel, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({ handleFilter })  => {

  const [filter, setFilter] = useState({ min: '0', max: '0' })

  const handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target
    id == 'min' ? setFilter({...filter,  min: value }) : setFilter({...filter, max: value })
  };


  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
      <InputLabel id="demo-simple-select-label">Precios</InputLabel>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
            Min
          <TextField  id="min" label="Min" variant="outlined" onChange={handleChange} />
            Max
          <TextField id="max" label="Max" variant="outlined" onChange={handleChange} />
          <Button variant="outlined" size="small" onClick={ () => handleFilter({ min: '0', max: '0' })}>
          clear
        </Button>
          <Button variant="contained" size="small" onClick={ () => handleFilter(filter)}>
          result
        </Button>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterSelect