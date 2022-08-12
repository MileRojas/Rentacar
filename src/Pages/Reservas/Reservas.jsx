import { Container } from "@mui/material"
import { flexWrap } from '@mui/system';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import InboxIcon from '@mui/icons-material/Inbox';
import Button from '@mui/material/Button';
import Movilidad from "../Movilidades/Movilidad";
import Alquiler from "../Alquiler/Alquiler";


const Reservas = () => {
    return (
        <Container>
            <Box sx={{ my:5, flecGrow:1, display: { xs: 'none' ,md:'flex'}}}>
            <Box sx={{ mx:5, width: '100%', maxWidth: 200, bgcolor: 'text.disabled', border: 1}}>
            <nav aria-label="main mailbox folders">
                <List aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Tus Reservas
                        </ListSubheader>
                    }>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Auto" secondary="Jan 9, 2014"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Moto" secondary="Jan 9, 2014"  />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            </Box>
            <Movilidad />
            <Alquiler />
            </Box>
            <Button variant="contained"  
                sx={{
                my:5,
                mx:5,
                display:{xs:'none', md:'flex', justifyContent:'flex-end' }
                }}>Alquilar
            </Button>
        </Container>
        
    )
}

export default Reservas;