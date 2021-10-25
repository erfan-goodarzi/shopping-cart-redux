import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/counter/counterSlice";

const Product = ({ img, title, price }) => {
  const dispatch = useDispatch()
  return (
    <>
      <Box
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
              fontSize: 20,
              mt: "-1rem",
              fontWeight: "500",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              mt: 3,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#7a7a7a",
                fontSize: 17,
                mt: 1,
                fontWeight: "400",
              }}
            >
              {price}
            </Typography>
            <Button
              sx={{
                bgcolor: "#ffebc2",
                m: "2px 12px",
                "&:hover": {
                  bgcolor: "#ddd",
                },
              }}
              color="success"
              onClick={() => dispatch(AddToCart([{title: title, img: img, price: price}]))}
            >
              <AddShoppingCartIcon
                sx={{ color: "#010101", fontSize: " 1.5rem" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
