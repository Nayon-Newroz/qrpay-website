import React, { useState } from "react";
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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Header.css";
import { Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
const navItems = ["Home", "Platform", "servies", "Use cases", "Case studies"];
const Header = () => {
  // const { window } = props;
  const location = useLocation();
  console.log("location", location.pathname);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [active, setActive] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          maxWidth: "2400px",
          boxSizing: "border-box",
          padding: "0 200px",
          margin: "auto",
          zIndex: 1000,
        }}
      >
        <AppBar
          component="nav"
          style={{
            background: "#CFE3FF",
            // background: "none",
            boxShadow: "none",
            // borderBottom: "1px solid red",
            position: "sticky",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src="/images/logo.svg" alt="" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                component={Link}
                to="/"
                className={`nav_item ${location.pathname === "/" && "active"}`}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/platform"
                className={`nav_item ${
                  location.pathname === "/platform" && "active"
                }`}
              >
                Platform
              </Button>
              <Button className={`nav_item`}>servies</Button>
              <Button className={`nav_item`}>Use cases</Button>
              <Button className={`nav_item`}>Case studies</Button>
              <IconButton style={{ marginRight: "16px" }}>
                <MenuIcon style={{ color: "#303030" }} />
              </IconButton>
              <Button
                className="nav_item2"
                style={{
                  color: "#CB2027",
                  border: "1px solid #25316D",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                endIcon={<img src="./images/qrpayicon.svg" alt="" />}
              >
                Request A demo
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
