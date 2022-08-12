import { useState } from 'react';
import { Divider, Typography } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Alquiler = () => {

    const [value, setValue] = useState(new Date('2022-08-10T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
      };

    return (
        <Box sx={{ mx: 5 }}>
             <Typography 
                variant='h6' 
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'arial',
                    fontWeight: 800,
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                Alquiler
            </Typography>
            <Divider sx={{ my: 2 }}/>
            <LocalizationProvider 
                dateAdapter={AdapterDateFns} 
            >
                <Stack spacing={2}>
                    <DesktopDatePicker
                        label="Fecha Inicio Alquiler"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                     <DesktopDatePicker
                        label="Fecha Fin Alquiler"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                
                </Stack>
            </LocalizationProvider>
        </Box>
    )
}

export default Alquiler