import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { RemoveFromCart } from "../features/product/productSlice";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  navbar: {
    // [theme.breakpoints.between("md", "lg")]: {
  
    // },
    [theme.breakpoints.between("sm", "md")]: {
      margin: '0 4rem !important',
    },
    [theme.breakpoints.between("xs", "sm")]: {
      backgroundColor: "green",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const state = useSelector((state) => state.Products.value);
  const Product = useSelector((state) => state.Products.product);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [Cart, setCart] = useState({ right: false });
  const dispatch = useDispatch();
  const classes = useStyles();

  const total = Product.reduce((e, v) => e + v.price, 0).toFixed(2);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setCart({ ...Cart, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 460 }}
      role="presentation"
    >
      <IconButton
        sx={{
          mt: 2,
          ml: 3,
          color: "#ed6c02",
        }}
        onClick={toggleDrawer(anchor, false)}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Typography
        sx={{
          fontSize: 20,
          textAlign: "center",
          fontWeight: "700",
          color: "#ed6c02",
          mt: 3,
          borderBottom: 1,
          width: 247,
          ml: 15,
          pb: 1,
        }}
      >
        My shopping cart
      </Typography>

      {Product.length === 0 ? (
        <Alert
          severity="info"
          sx={{
            fontSize: 17,
            fontWeight: "500",
            mt: 3,
            width: 384,
            ml: 2,
            pb: 1,
          }}
        >
          <AlertTitle
            sx={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Info
          </AlertTitle>
          You haven't added any products to your cart.
        </Alert>
      ) : (
        Product &&
        Object.keys(Product).map((inputKey, index) => (
          <Box
            sx={{
              mt: 5,
              ml: 3,
            }}
            key={index}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <Avatar alt="Remy Sharp" src={Product[inputKey].img} />
              </Box>
              <Box
                sx={{
                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "#4a05b9",
                    fontSize: 17,
                    mt: "-1rem",
                    pb: 1,
                    fontWeight: "500",
                  }}
                >
                  {Product[inputKey].title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>${Product[inputKey].price}</Typography>
                  <Button
                    onClick={() => {
                      console.log(Product[inputKey].id);
                      dispatch(RemoveFromCart(Product[inputKey].id));
                    }}
                    sx={{
                      ml: 3,
                    }}
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))
      )}
      {Product.length === 0 ? null : (
        <Box
          sx={{
            mt: 8,
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              width: 400,
              ml: 4,
              pb: 1,
              display: "block",
              color: "#ed6c02",
            }}
          >
            <Box
              sx={{
                alignItems: "center ",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: "400",
                }}
              >
                SubTotal :
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "400",
                }}
              >
                ${total}
              </Typography>
            </Box>
            <Box
              sx={{
                alignItems: "center ",
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: "400",
                }}
              >
                Discount :
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "400",
                }}
              >
                0%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: "center ",
              display: "flex",
              mt: 1,
              m: 4,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: "800",
              }}
            >
              Total :
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: "600",
              }}
            >
              ${total}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
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
              className={classes.navbar}
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
            <IconButton
              onClick={toggleDrawer("right", true)}
              color="warning"
              aria-label="add to shopping cart"
            >
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
            <Drawer anchor={"right"} open={Cart["right"]}>
              {list("right")}
            </Drawer>
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
