import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';

function appBarLabel(label) {
  return (
    <Toolbar>
    
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              marginRight:'5rem',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        MERN stack Developer Practical Task
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
}); 
    
export default function Headers() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('enableColorOnDark')}
        </AppBar>
        <AppBar position="static" color="primary">
          {appBarLabel('default')}
        </AppBar>
      </ThemeProvider>
    </Stack>     
  );
}