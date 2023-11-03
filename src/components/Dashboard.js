import React, { useEffect, useState } from "react";
import cookie from "cookie";
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';

import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";

const drawerWidth = 240;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Dashboard({user}) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = useState({});
  const [imageFile, setImageFile] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const data = new FormData();
    data.append("image", imageFile);
    data.append("certification_name", body.certification_name);
    data.append("expiration_date", body.expiration_date);
    data.append("place_of_certification", body.place_of_certification);
    console.log(data);
    const cookies = cookie.parse(document.cookie);
    console.log(cookies);

    fetch("https://my-certs-backend.vercel.app/certificates/post-certificate", {
      method: "POST",
      body: data,
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + cookies.token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    navigate("/certificationhub");
  };

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setImageFile(files[0]);
    }
    handleOpen();
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setBody((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(imageFile);
  }, [imageFile]);

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
        <Typography>
          <p>{user && "Welcome, " + user.firstName[0].toUpperCase() + user.firstName.slice(1)}</p>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "80%",
            justifyContent: "space-evenly",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box>
            <TextField type="file" id="image" onChange={handleImageChange} />
          </Box>
          <Divider></Divider>
          <Box sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}}
>
            <FileUploadIcon/>
            <h2>drop image here to upload</h2>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please provide some information about your certificate below
          </Typography>
          <TextField
            id="certification_name"
            name="certification_name"
            label="name of certification"
            variant="standard"
            margin="normal"
            fullWidth
            autoFocus
            onChange={handleTextChange}
          />
          <TextField
            id="expiration_date"
            name="expiration_date"
            label="expiration date"
            variant="standard"
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            autoFocus
            onChange={handleTextChange}
          />
          <TextField
            id="place_of_certification"
            name="place_of_certification"
            label="place where you got certified"
            variant="standard"
            margin="normal"
            fullWidth
            autoFocus
            onChange={handleTextChange}
          />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
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
