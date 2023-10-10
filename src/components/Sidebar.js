import { AppBar, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import AppsIcon from "@mui/icons-material/Apps";

const drawerWidth = 240;

const themedStyles = (theme) => {
  return {
    menuButton: {
      marginRight: 2
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)"
    },
    content: {
      padding: 3,
      maxWidth: 720,
      minWidth: 375,
      marginLeft: drawerWidth + 8,
    }
  }
}

export default function CustomZIndexAppBar() {
  const theme = useTheme();

  return (
    <div>
      <AppBar position="fixed" sx={{ ...themedStyles(theme).appBar }} style={{ backgroundColor: '#00599A' }}>
        <Toolbar sx={{margin:'auto'}}>
            <img src="/mycerts.svg" alt="logo" />
        </Toolbar>
      </AppBar>
      <Drawer
        disableEnforceFocus
        variant="temporary"
        open={true}
        sx={themedStyles(theme).drawer}
        PaperProps={{
          sx: themedStyles(theme).drawerPaper,
          elevation: 9
        }}
      >
        {/* <Toolbar /> */}
        <List sx={{ mt: "4rem" }}>
          {["Home", "Certification hub", "deleted images", "Email certs"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                {/* <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ mt: "2rem", textAlign: "center"}}>
          {["Expiring soon"]}
        </List>
      </Drawer>
      <Toolbar />
      <main style={{ ...themedStyles(theme).content}}>
        <Typography>Good morning, Ruben</Typography>
      </main>
    </div>
  )
}

// ************************
// ************************
// ************************
// ************************
// ************************
// ************************
// ************************
// ************************

// import React from "react";

// export default function Sidebar() {
//   return (
//     <div
//       style={{
//         width: 500,
//         backgroundColor: "red",
//         height: "100%",
//         maxWidth: "100vh",
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       hello
//     </div>
//   );
// }
