import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({ error= false, success= false, loading=false }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {
        error && <Alert severity="error">Error Algo salio mal</Alert>
      }
      {
        success && <Alert severity="success">Con Exito!!</Alert>
      }
      {
        loading && <Alert severity="warning">Paciencia!!</Alert>
      }
    </Stack>
  );
}
