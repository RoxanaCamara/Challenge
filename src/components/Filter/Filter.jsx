import * as React from 'react';
import {Box, Typography} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
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
      <FormControl variant="standard" sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-label">Ordenar por precio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Más baratos</MenuItem>
          <MenuItem value={20}>Más caros</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
