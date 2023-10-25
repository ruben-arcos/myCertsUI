import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer({ children, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { name: "Home", to: "/" },
          { name: "Certification hub", to: "/certificationhub" },
          { name: "deleted images", to: "/deleted" },
          { name: "Email certs", to: "/emailcerts" },
        ].map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Expiring soon"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Footer />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: 10000,
          backgroundColor: "#00599A",
        }}
      >
        <Toolbar sx={{ margin: "auto" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/mycerts.svg" alt="logo" />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {children}
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

// import React from "react";
// import Sidebar from "./Sidebar";
// import { Button, Divider, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { styled } from "@mui/material/styles";

// const drawerWidth = 240;

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// const themedStyles = (theme) => {
//   return {
//     content: {
//       // padding: 3,
//       maxWidth: 720,
//       minWidth: "100%",
//       marginLeft: drawerWidth,
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-evenly",
//       minHeight: "100%",
//     },
//     divider: {
//       // position: 'absolute',
//       // top: '50%',
//       // transform: 'translateY(-50%)',
//       // width: '100%',
//     },

//     buttonSection: {
//       textAlign: "center",
//       marginTop: "20px",
//       padding: "10px",
//       alignSelf: "center",
//     },
//   };
// };

// export default function Dashboard() {
//   const theme = useTheme();
//   return (
//     <div style={{ display: "flex", width: "100%" }}>
//       <Sidebar>
//         <main style={themedStyles(theme).content}>
//           <div style={{ flex: 1 }}>
//             <Typography>Good morning, Ruben</Typography>
//             <Button
//               component="label"
//               variant="contained"
//               startIcon={<CloudUploadIcon />}
//               sx={{ alignSelf: "flex-start" }}
//             >
//               Upload file
//               <VisuallyHiddenInput type="file" />
//             </Button>
//           </div>
//           <Divider style={themedStyles(theme).divider} />{" "}
//           {/* Add a centered divider */}
//           <div style={{ flex: 1 }}>
//             <p>drag item here</p>
//           </div>
//         </main>
//       </Sidebar>
//     </div>
//   );
// }

// import {
//   Drawer,
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";

// // import AppsIcon from "@mui/icons-material/Apps";

// const drawerWidth = 240;

// const themedStyles = (theme) => {
//   return {
//     drawer: {
//       width: drawerWidth,
//       "& .MuiBackdrop-root": {
//         display: "none",
//       },
//     },
//     drawerPaper: {
//       width: drawerWidth,
//       backgroundColor: "rgba(120,120,120,0.2)",
//     },

//     additionalSection: {
//       marginTop: "20px",
//       padding: "10px",
//       textAlign: "center",
//     },
//   };
// };

// const CustomZIndexAppBar = ({ children }) => {
//   const theme = useTheme();

//   return (
//     <div style={{ width: "100%", height:'100vh' }}>
//       <Drawer
//         disableEnforceFocus
//         variant="temporary"
//         open={true}
//         sx={themedStyles(theme).drawer}
//         PaperProps={{
//           sx: themedStyles(theme).drawerPaper,
//           elevation: 9,
//         }}
//       >
//         <List sx={{ mt: "4rem" }}>
//           {["Home", "Certification hub", "deleted images", "Email certs"].map(
//             (text, index) => (
//               <ListItem key={text}>
//                 <ListItemButton>
//                   {/* <ListItemIcon>
//                   <AppsIcon />
//                 </ListItemIcon> */}
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             )
//           )}
//         </List>
//         <Divider />
//         <List sx={{ mt: "2rem", textAlign: "center" }}>
//           {["Expiring soon"]}
//         </List>
//       </Drawer>
//       {children}
//       <div style={themedStyles(theme).additionalSection}>
//         {/* Your additional section content goes here */}
//       </div>
//     </div>
//   );
// };

// export default CustomZIndexAppBar;
