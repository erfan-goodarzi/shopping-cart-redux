import Box from "@mui/material/Box";

const Product = ({ img }) => {
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 338,
          m: "3rem 2rem !important",
          bgcolor: "#FFF9F4",
          borderRadius: "41px",
          opacity: "0.9",
          boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
          backdropFilter: "blur(7px)",
        }}
      >
        <img
          src={img}
          alt=""
          style={{
            width: "63%",
            margin: "3rem 3rem",
          }}
        />
      </Box>
    </>
  );
};

export default Product;
