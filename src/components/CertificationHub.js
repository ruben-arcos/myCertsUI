import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";


// Example data for certifications
const certifications = [
    { name: "Certification 1", expirationDate: "2024-05-31" },
    { name: "Certification 2", expirationDate: "2025-02-15" },
    
  ];

const themedStyles = (theme) => {
  return {
    appBar: {
      backgroundColor: theme.palette.primary.main, 
    },
    menuButton: {
      marginRight: 2
    },
    certificationContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem',
    },
    footer: {
      background: '#888888', 
      padding: '1rem',
      textAlign: 'center',
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      // Ensure the footer appears above other content
      zIndex: 1000, 
    },
  };
}

const CertificationHub = () => {
  const theme = useTheme(); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
          {/* This box supposed to push the buttons to the left??? */}
          <Box sx={{ flexGrow: 1 }} /> 
          <Button color="inherit">Home</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1 }}>
        {/* Your content here */}
      </Box>

      <Box sx={{ flex: 1 }}>
        {certifications.map((certification, index) => (
          <div key={index} sx={themedStyles(theme).certificationContainer}>
            <img src={`/certification-${index}.jpg`} alt={`Certification ${index}`} />
            <Typography variant="h6">{`Name of certification: ${certification.name}`}</Typography>
            <Typography>{`Expiration date: ${certification.expirationDate}`}</Typography>
          </div>
        ))}
      </Box>



      {/* Footer */}
      <div style={{ ...themedStyles(theme).footer, backgroundColor: '#888888' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company Name
        </Typography>
      </div>
    </Box>
  );
}

export default CertificationHub;
