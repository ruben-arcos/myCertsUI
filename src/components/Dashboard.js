import React from "react";
import Sidebar from "./Sidebar";
import { Button, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const themedStyles = (theme) => {
  return {
    content: {
      padding: 3,
      maxWidth: 720,
      minWidth: 375,
      marginLeft: drawerWidth + 8,
    },
    divider: {
      // position: 'absolute',
      // top: '50%',
      // transform: 'translateY(-50%)',
      // width: '100%',
    },

    buttonSection: {
      textAlign: "center",
      marginTop: "20px",
      padding: "10px",
    },
  };
};

export default function Dashboard() {
  const theme = useTheme();
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar>
        <main style={themedStyles(theme).content}>
          <Typography>Good morning, Ruben</Typography>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <Divider style={themedStyles(theme).divider} />{" "}
          {/* Add a centered divider */}
        </main>
      </Sidebar>
    </div>
  );
}
