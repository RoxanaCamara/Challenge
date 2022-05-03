import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Typography variant="body2" component="div" color="text.secondary">
        Ordenar por precio
      </Typography>
      <FormControl>
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
