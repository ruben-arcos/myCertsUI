import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";

import cookie from "cookie";
import { Toolbar } from "@mui/material";

const CertificationHub = () => {
  const [certificates, setCertificates] = useState([]);

  const formatDate = (dateString) => {
    const dateFormattingOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(
      undefined,
      dateFormattingOptions
    );
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
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          {certificates.map((certification, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={certification.image_url}
                  alt={`Certification ${index}`}
                  width={400}
                  display={"flex"}
                />
              </div>
              <div>
                <Typography variant="h6">{`Name of certification: ${certification.certification_name}`}</Typography>
                <Typography>{`Expiration date: ${formatDate(
                  certification.expiration_date
                )}`}</Typography>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default CertificationHub;
