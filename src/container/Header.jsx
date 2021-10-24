import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            height: "66vh",
            mt: "2rem",
            borderRadius: "40px",
            background:
              "linear-gradient( 45deg, #FDB716, #FDC74F, #FEC00C, #FFD050)!important",
            boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
            backdropFilter: "blur(558.9px)",
            border: "1px solid #fdc74f",
          }}
        >
          <Stack
            sx={{mt: 9}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Breadcrumbs 
            sx={{ml: 3}}
            aria-label="breadcrumb">
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
            <Typography sx={{fontSize : 'h4.fontSize', fontWeight: '900'}}>
                Shop
            </Typography>
            <Typography sx={{fontSize : 'default', fontWeight: '500', mr: '51px !important'}}>
                Showing: 1-12 of 38 result
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Header;


