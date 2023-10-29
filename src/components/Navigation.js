// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// // import Typography from '@mui/material/Typography';
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";

// const themedStyles = (theme) => {
//   return {
//     appBar: {
//       zIndex: theme.zIndex.appBar + 1 + 1000,
//       width: "100%",
//     },
//   };
// };

// export default function ButtonAppBar() {
//   const theme = useTheme(); // Move useTheme inside the component

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="sticky"
//         sx={{
//           ...themedStyles(theme).appBar,
//           zIndex: "1000000 !important",
//           width: "100%",
//         }}
//         style={{
//           backgroundColor: "#00599A",
//           zIndex: "1000000 !important",
//           width: "100%",
//         }}
//       >
//         <Toolbar sx={{ margin: "auto" }}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <img src="/mycerts.svg" alt="logo" />
//           <Button component={Link} to="/login" color="inherit">
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }








