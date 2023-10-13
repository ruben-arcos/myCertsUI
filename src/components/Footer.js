import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const themedStyles = (theme) => {
  return {
    footer: {
      background: "#888888",
      padding: "1rem",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      width: "100%",
      // Ensure the footer appears above other content
      zIndex: 1000,
    },
  };
};

export default function Footer() {
  const theme = useTheme();
  return (
    <div style={{ ...themedStyles(theme).footer, backgroundColor: "#888888" }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Your Company Name
      </Typography>
    </div>
  );
}
