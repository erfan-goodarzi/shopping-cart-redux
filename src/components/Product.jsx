import Box from "@mui/material/Box";

const Product = () => {
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 300,
          bgcolor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  );
};

export default Product;