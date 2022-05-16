import * as React from 'react';
import { Box, Typography, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOrden({handleOrden}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
    handleOrden(event.target.value)
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
      <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'mas_baratos'}>Mas Baratos</MenuItem>
          <MenuItem value={'mas_caros'}>Mas Caros</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
