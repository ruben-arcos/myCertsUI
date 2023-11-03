import * as React from "react";
import {
  AppBar,
  // Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Footer from "./Footer";
import { Link } from "react-router-dom";


const pages = [
  { name: "Contact", to: "/#" },
  { name: "Pricing", to: "/#" },
  { name: "Sign up", to: "/signup" },
  { name: "Login", to: "/login" },
];


class DemoCarousel extends React.Component {
  render() {
    const imgStyle = {
      width: "700px",
      height: "auto",
      margin: 20, 
    };

    const customStatusFormatter = (current, total) => null;

    return (
      <Carousel showThumbs={false} statusFormatter={customStatusFormatter} autoPlay={true} interval={3000} infiniteLoop={true}>
        <div>
          <img src="./resources/easyStorage.png" alt="woman in white shirt using smartphone" style={imgStyle} />
          <p className="legend">Easy to store</p>
        </div>
        <div>
          <img src="./resources/mobileSafe.png" alt="iphone beside brown framed eyeglasses" style={imgStyle} />
          <p className="legend">Safe</p>
        </div>
        <div>
          <img src="./resources/availableEverywhere.png" alt="person holding smartphone " style={imgStyle} />
          <p className="legend">Your documents are available everywhere</p>
        </div>
      </Carousel>
    );
  }
}









export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div
      style={{ height: "100vh", margin: 0, padding: 0, background: "black" }}
    >
      <AppBar
        position="static"
        sx={{
          background: "rgba(22, 22, 23, .8)",
          // boxShadow: "none",
          // borderBottom: "none"
        }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: "100% !important" }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                margin: 0,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <img src="/mycerts.svg" alt="logo" style={{ marginTop: "15px" }} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            {/* icon was here on mobile size */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Box sx={{ display: "flex", marginLeft: "auto" }}>
                {" "}
                {/* This is where the change starts */}
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "white", textTransform: "none" }}
                    component={Link}
                    to={page.to}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>{" "}
              {/* This is where the change ends */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                ></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* content starts here */}

      <Box className="mainLandingPageContainer">
          <div className="mainTitle" style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Found that perfect job and want to apply right away?
            </h1>
            <span
              style={{
                color: "#fff",
              }}
            >
              Tired of scrambling to find your certificates, licenses, or resume every time you apply for a job? <br /> Welcome to mycerts – Your Career's New Best Friend!
            </span>
              <Button
                component={Link}
                to="/signup"
                size="large"
                variant="outlined"
                sx={{
                  background: "#00599A",
                  color: "black",
                  marginTop: "20px",
                  "&:hover": { 
                    background: "#3366A9", 
                    transition: "background 0.3s" 
                  },
                  "&:hover .arrowIcon": {
                    marginLeft: "5px", // Adjust the value as needed
                    transition: "margin-left 0.3s",
                  },
                  "& .text": {
                    marginRight: "40px", // Adjust the value as needed
                    transition: "margin-right 0.3s",
                  },
                }}
              >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span className="text">GET STARTED NOW</span>
      <ArrowForwardIcon className="arrowIcon" />
    </div>
              </Button>
          </div>
      </Box>

      <div className="demo-carousel">
        <DemoCarousel />
      </div>

      <Footer fullWidth />
    </div>
  );
}
