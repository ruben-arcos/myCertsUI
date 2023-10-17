import {
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import AppsIcon from "@mui/icons-material/Apps";

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
    menuButton: {
      marginRight: 2,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1 + 1000,
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)",
    },
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
    additionalSection: {
      marginTop: "20px",
      padding: "10px",
      textAlign: "center"
    },
    buttonSection: {
      textAlign: "center",
      marginTop: "20px",
      padding: "10px",
    }
  };
};

const CustomZIndexAppBar = ({children}) => {
  const theme = useTheme();

  return (
    <div>
      <Drawer
        disableEnforceFocus
        variant="temporary"
        open={true}
        sx={themedStyles(theme).drawer}
        PaperProps={{
          sx: themedStyles(theme).drawerPaper,
          elevation: 9,
        }}
      >
        <List sx={{ mt: "4rem" }}>
          {["Home", "Certification hub", "deleted images", "Email certs"].map(
            (text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  {/* <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List sx={{ mt: "2rem", textAlign: "center" }}>
          {["Expiring soon"]}
        </List>
      </Drawer>
      <main style={themedStyles(theme).content}>
        <Typography>Good morning, Ruben</Typography>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
        <Divider style={themedStyles(theme).divider} /> {/* Add a centered divider */}
        
      </main>
      <div style={themedStyles(theme).additionalSection}>
        {/* Your additional section content goes here */}
      </div>
    </div>
  );
};

export default CustomZIndexAppBar;
