import * as React from 'react';
import { Box, Typography, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useProducts } from '../../hooks/useProducts';

export default function SelectOrden({ }) {
  const [age, setAge] = React.useState('');
  const { handleReset, handleOrden  } = useProducts()

  const handleChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
    //event.target.value == 'mas_relevantes' ? handleReset() : handleOrden(event.target.value)
  };

  return (
    <Box>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'mas_relevantes'}>Mas Relevantes</MenuItem>
          <MenuItem value={'mas_baratos'}>Mas Baratos</MenuItem>
          <MenuItem value={'mas_caros'}>Mas Caros</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
