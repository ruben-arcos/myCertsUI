import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";

import cookie from "cookie";
import { Toolbar } from "@mui/material";

// Example data for certifications
const certifications = [
  { name: "Certification 1", expirationDate: "2024-05-31" },
  { name: "Certification 2", expirationDate: "2025-02-15" },
];

const themedStyles = (theme) => {
  return {
    certificationContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "2rem",
    },
  };
};

const CertificationHub = () => {
  const theme = useTheme();

  const [certificates, setCertificates] = useState([]);

  const formatDate = (dateString) => {
    const dateFormattingOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, dateFormattingOptions);
  };
  

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies.token);
    fetch(
      "https://my-certs-backend.vercel.app/certificates/user-certificates",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCertificates(data);
      });
  }, []);

  return (
    <Sidebar>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Toolbar />
        <Box sx={{ flex: 1}}>
          {certificates.map((certification, index) => (
            <div key={index} sx={themedStyles(theme).certificationContainer} 
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <img
                src={certification.image_url}
                alt={`Certification ${index}`}
                width={400}
                display={"flex"}
              />
              <Typography variant="h6">{`Name of certification: ${certification.certification_name}`}</Typography>
              <Typography>{`Expiration date: ${formatDate(certification.expiration_date)}`}</Typography>
            </div>
          ))}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default CertificationHub;



