import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";


const themedStyles = (theme) => {
  return {
    appBar: {
      // Define your styles for the AppBar here
      backgroundColor: theme.palette.primary.main, // Example
    },
    menuButton: {
      marginRight: 2
    }
  };
}

export default function ButtonAppBar() {
  const theme = useTheme(); // Move useTheme inside the component

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ ...themedStyles(theme).appBar }}>
        <Toolbar sx={{ margin: 'auto' }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/mycerts.svg" alt="logo" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
