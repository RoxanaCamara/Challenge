import React, { useState } from 'react';
import { Box, Typography, TextField, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ listProduct = [] }) {

  const [filter, setFilter] = useState({ min: 0, max: 0 })

  const handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target
    console.log(event)
   console.log(filter)
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
          <TextField id="min" label="Min" variant="outlined" onChange={handleChange} />
            Max
          <TextField id="max" label="Max" variant="outlined" onChange={handleChange} />

        </Select>
      </FormControl>
    </Box>
  );
}
