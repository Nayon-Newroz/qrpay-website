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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { Container, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navItems = ["Home", "Platform", "servies", "Use cases", "Case studies"];
const Header = () => {
  // const { window } = props;
  const location = useLocation();
  console.log("location", location.pathname);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [active, setActive] = useState("Home");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <div
        // style={{
        //   position: "sticky",
        //   top: 0,
        //   width: "100%",
        //   maxWidth: "2400px",
        //   boxSizing: "border-box",
        //   padding: "0 200px",
        //   margin: "auto",
        //   zIndex: 1000,
        // }}
        id="header"
        className="appbar_holder"
      >
        <AppBar position="sticky" className="appbar_style">
          <Toolbar style={{ paddingRight: 0, paddingLeft: 0 }}>
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
              <Button className={`nav_item`} endIcon={<ArrowDropDownIcon />}>
                servies
              </Button>
              <Button className={`nav_item`} endIcon={<ArrowDropDownIcon />}>
                Use cases
              </Button>

              <Button
                endIcon={<ArrowDropDownIcon />}
                className={`nav_item`}
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                Case studies
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                className="topbar_submenu"
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <img
                      src="/images/fintech-software-development.svg"
                      alt=""
                    />
                  </ListItemIcon>
                  Payment solution provider
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <img src="/images/eWallet-app-development.svg" alt="" />
                  </ListItemIcon>
                  eWallet app development
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <img src="/images/p2p-development.svg" alt="" />
                  </ListItemIcon>
                  P2P development
                </MenuItem>
              </Menu>
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
