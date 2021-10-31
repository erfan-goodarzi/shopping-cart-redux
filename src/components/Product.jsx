import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/product/productSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  product: {
    [theme.breakpoints.between("sm", "md")]: {
      width: "304px !important",
      height: "379px !important ",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "300px !important",
    },
  },
  image: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "52% !important",
      margin: "2rem 3rem !important",
    },
  },
}));

const Product = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.product}
        sx={{
          width: 316,
          height: 412,
          m: "3rem 2rem !important",
          bgcolor: "#FFF9F4",
          borderRadius: "13px",
          boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
          backdropFilter: "blur(7px)",
          transition: "all 0.08s ease-in-out",
          "&:hover": {
            background: "#ffe6ae",
            transition: "all 0.08s ease-in-out",
            boxShadow: "4px 3px 20px 1px #5e5e5e36",
          },
        }}
      >
        <img
          className={classes.image}
          src={img}
          alt=""
          style={{
            width: "60%",
            margin: "2rem 4rem",
          }}
        />
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#4a05b9",
              fontSize: { lg: 20, sm: 14 },
              mt: "-1rem",
              fontWeight: "500",
              width: { sm: "89%" },
              mx: 'auto',
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: { lg: "flex", sm: "block" },
              justifyContent: "space-evenly",
              mt: {lg: 3, sm: 1},
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#7a7a7a",
                fontSize: { lg: 17, sm: 14 },
                mt: 1,
                mb: { sm: 1 },
                fontWeight: "400",
              }}
            >
              ${price}
            </Typography>
            <Button
              sx={{
                bgcolor: "#ffebc2",
                m: { lg: "2px 12px", sm: "0 63px" },
                "&:hover": {
                  bgcolor: "#ddd",
                },
              }}
              color="success"
              onClick={() => {
                dispatch(
                  AddToCart({
                    title: title,
                    img: img,
                    price: price,
                    id: id,
                    quantity: 0,
                  })
                );
              }}
            >
              <AddShoppingCartIcon
                sx={{
                  color: "#010101",
                  fontSize: { lg: " 1.5rem", sm: "1.2rem" },
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
