import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import Sidebar from './Sidebar'

const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Sidebar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Sidebar>
  );
}

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
