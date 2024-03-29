import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as Scroll } from 'react-scroll';
import logo from '../../public/images/logo.svg'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ top: 0, bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', paddingY: 2 }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
        </IconButton>
        {!isMobile && (
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
           <Scroll to="quiSommesNous" smooth={true} offset={-150}>
             <Button color="inherit" sx={{ color: 'black' }}>Qui sommes nous?</Button>
           </Scroll>
           <Scroll to="nosValeurs" smooth={true} offset={-150}>
              <Button color="inherit" sx={{ color: 'black', ml: 2 }}>Nos valeurs</Button>
          </Scroll>
          <Scroll to="reservez" smooth={true} offset={-150}>
              <Button color="inherit" sx={{ color: 'green', ml: 2 }}>Réservez !</Button>
          </Scroll>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
