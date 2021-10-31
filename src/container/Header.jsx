import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Products from "../components/Products";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    // [theme.breakpoints.between("md", "lg")]: {

    // },
    [theme.breakpoints.between("sm", "md")]: {
      height: "31vh !important",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box
          className={classes.header}
          sx={{
            height: "50vh",
            mt: "2rem",
            borderRadius: "13px",
            background:
              "linear-gradient( 45deg, #FDB716, #FDC74F, #FEC00C, #FFD050)!important",
            boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
            backdropFilter: "blur(558.9px)",
            border: "1px solid #fdc74f",
          }}
        >
          <Stack
            sx={{ mt: 9 }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
            alignItems="center"
            spacing={2}
          >
            <Breadcrumbs
              sx={{ ml: { lg: 3, xs: 0 }, fontSize: { xs: 12, lg: "1rem" } }}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="#"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                HOME
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="#"
              >
                <ShoppingCartIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Shop
              </Link>
            </Breadcrumbs>
            <Typography sx={{ fontSize: "h4.fontSize", fontWeight: "900" }}>
              Shop
            </Typography>
            <Typography
              sx={{
                fontSize: "default",
                fontWeight: "500",
                mr: { lg: "51px !important", xs: 0 },
              }}
            >
              Showing: 1-9 of 38 result
            </Typography>
          </Stack>
          <Products />
        </Box>
      </Container>
    </>
  );
};

export default Header;
