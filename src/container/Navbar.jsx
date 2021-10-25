import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const state = useSelector((state) => state.Products.value);
  const Product = useSelector((state) => state.Products.product);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar sx={{ margin: "13px 71px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#000",
                fontWeight: "700",
                letterSpacing: "-1px",
              },
            }}
          >
            Apple Store
          </Typography>
          <Box
            sx={{
              margin: "0 19rem",
            }}
            onClick={(e) => e.preventDefault()}
          >
            <Link
              underline="none"
              sx={{
                padding: "1px 22px",
                color: " #010101",
                fontWeight: "700",
                fontSize: "17px",
              }}
              href="#"
            >
              Home
            </Link>
            <Link
              underline="none"
              sx={{
                padding: "1px 22px",
                color: " #FA8907",
                fontWeight: "700",
                fontSize: "17px",
              }}
              href="#"
            >
              Shop
            </Link>
            <Link
              underline="none"
              sx={{
                padding: "1px 22px",
                color: " #010101",
                fontWeight: "700",
                fontSize: "17px",
              }}
              href="#"
            >
              Contact
            </Link>
            <Link
              underline="none"
              sx={{
                padding: "1px 22px",
                color: " #010101",
                fontWeight: "700",
                fontSize: "17px",
              }}
              href="#"
            >
              About us
            </Link>
            <Link
              underline="none"
              sx={{
                padding: "1px 22px",
                color: " #010101",
                fontWeight: "700",
                fontSize: "17px",
              }}
              href="#"
            >
              Blog
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              sx={{
                mr: 0,
                color: " #010101",
                fontWeight: "700",
                fontSize: "17px",
                pt: 3,
              }}
            >
              $134.3
            </Typography>
            <IconButton color="warning" aria-label="add to shopping cart">
              <Avatar
                sx={{
                  bgcolor: "#FFF6DB",
                  borderRadius: "50%",
                  padding: "4px 5px",
                }}
                variant="rounded"
              >
                <AddShoppingCartIcon
                  sx={{ color: "#010101", fontSize: " 1.5rem" }}
                />
              </Avatar>
            </IconButton>
            <Badge badgeContent={state} color="warning"></Badge>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
