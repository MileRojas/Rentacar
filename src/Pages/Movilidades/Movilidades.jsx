
import Container  from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Reserva from "../Reservas/Reserva";
import Movilidad from "./Movilidad";


const Movilidades = () => {
    return (
        <Container>
            <Typography 
                variant="h3" 
                gutterBottom 
                component="div" 
                sx={{
                my:5,
            }}>
                Movilidades
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Movilidad />
                <Reserva />
            </Box>
            <Button variant="contained"  
            sx={{
            my:5,
            display:{xs:'none', md:'flex', justifyContent:'flex-end'}
            }}>Reservar
            </Button>
        </Container>
    )
}

export default Movilidades