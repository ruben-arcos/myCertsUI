import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material/styles";

// Example data for certifications
const certifications = [
    { name: "Certification 1", expirationDate: "2024-05-31" },
    { name: "Certification 2", expirationDate: "2025-02-15" },
    
  ];

const themedStyles = (theme) => {
  return {
    certificationContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem',
    },
  };
}

const CertificationHub = () => {
  const theme = useTheme(); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: 1 }}>
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
    </Box>
  );
}

export default CertificationHub;
