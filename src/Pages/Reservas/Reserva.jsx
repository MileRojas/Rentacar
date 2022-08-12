import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';

const Reserva = () =>{
    const [value, setValue] = useState(new Date('2022-08-10T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
      };

    return(
        <Container>
            <Typography 
                variant='h6' 
                sx={{
                    my: 5,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'arial',
                    fontWeight: 800,
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                Reservar
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr ' },
                    gap: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Fecha Reserva"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        
                    </Stack>
                </LocalizationProvider>
                <TextField id="filled-basic" label="Precio Reserva" variant="filled" />
            </Box>
        </Container>
        
    )

}

export default Reserva