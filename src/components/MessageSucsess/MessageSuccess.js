import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './Message.css'

export default function BasicAlerts({purchaseID}) {
  return (
    <Stack className='message' spacing={2}>
      <Alert severity="success" sx={{ justifyContent: 'center', mt: '15px' }}>Gracias por su compra!, su ID de transaccion es: {purchaseID} </Alert>
    </Stack>
  );
}
