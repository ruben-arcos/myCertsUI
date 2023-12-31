import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const themedStyles = (theme) => {
  return {
    footer: {
      background: "#888888",
      padding: "1rem",
      textAlign: "center",
      // position: "fixed",
      bottom: 0,
      width: 240,
      // Ensure the footer appears above other content
      // zIndex: 10000,
    },
  };
};

export default function Footer({ fullWidth, fixed }) {
  const theme = useTheme();
  return (
    <div
      style={{
        ...themedStyles(theme).footer,
        backgroundColor: "#888888",
        width: fullWidth ? "100%" : 240,
        position: fixed === "false" ? "relative" : "fixed",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} myCerts
      </Typography>
    </div>
  );
}
