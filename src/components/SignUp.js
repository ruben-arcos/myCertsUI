import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import PasswordStrengthBar from "react-password-strength-bar";

const URL = "https://my-certs-backend.vercel.app/users/sign-up";

// const defaultTheme = createTheme();

const SignUp = (props) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      promos: data.get("promos"),
    });
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // key values must match with backend createUser function
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        promos: !!data.get("promos"),
      }),
    });
    const result = await res.json();
    console.log(result, "this is the response now");
    if (!res.ok) {
      setError(result.msg);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <main
        // component="main"
        style={{
          backgroundImage: 
          "linear-gradient(174.2deg, rgba(255, 244, 228, 1) 7.1%, rgba(240, 246, 238, 1) 67.4%)",
          minHeight: "94.5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            paddingLeft: 20,
            paddingRight: 20,
            width: 500,
            margin: 20,
          }}
          // maxWidth={"xs"}
        >
           <img
            src="../mycertsGrayLogo.svg"
            alt="logo"
            style={{ margin: "30px 0 10px 0", width: "140px" }}
          />
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  // onChange={handleTextChange}
                  // value={state.username}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* password strength bar starts here,
              must be on Grid to move to R side */}
              <Grid item xs={12} sx={{ mt: -2, mb: 2 }}>
                <PasswordStrengthBar password={password} />
              </Grid>

              {error && <p style={{ color: "red" }}>{error}</p>}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  }
                  label="Show password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="promos" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="submit"
                size="medium"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
      <Footer fullWidth={true} fixed={false} />
    </>
  );
};

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop: 10,
//         }}
//       >
//         {/* <img
//           src="../mycertslogin.svg"
//           alt="logo"
//           style={{ position: "absolute", top: 80 }}
//         /> */}
//       </Box>
//       <Container
//         component="main"
//         maxWidth="xs"
//         sx={{ backgroundColor: "#fff" }}
//       >
//         <CssBaseline />
//         <div
//           style={{
//             backgroundImage:
//             "linear-gradient(174.2deg, rgba(255, 244, 228, 1) 7.1%, rgba(240, 246, 238, 1) 67.4%)",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100vh",
//             zIndex: -1, // Ensure this is behind other content
//           }}
//         />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Create an account
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="standard"
//                   // onChange={handleTextChange}
//                   // value={state.username}
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="standard"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="standard"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   variant="standard"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               {/* password strength bar starts here,
//               must be on Grid to move to R side */}
//               <Grid item xs={12} sx={{ mt: -2, mb: 2 }}>
//                 <PasswordStrengthBar password={password} />
//               </Grid>

//               {error && <p style={{ color: "red" }}>{error}</p>}
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       value="allowExtraEmails"
//                       color="primary"
//                       onClick={() => setShowPassword(!showPassword)}
//                     />
//                   }
//                   label="Show password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox name="promos" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//               }}
//             >
//               <Button
//                 type="submit"
//                 size="medium"
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//             </Box>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//       <Footer fullWidth={true} />
//     </ThemeProvider>
//   );
// };

export default SignUp;
