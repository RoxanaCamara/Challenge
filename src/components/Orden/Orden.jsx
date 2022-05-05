import * as React from 'react';
import { Box, Typography, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOrden() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <MenuItem value={10}>Mas Baratos</MenuItem>
          <MenuItem value={20}>Mas Caros</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
