import Stack from "@mui/material/Stack";
import Product from "./Product";
import ProductImg1 from '../assets/img/PngItem1.png'
import ProductImg2 from '../assets/img/PngItem2.png'
import ProductImg3 from '../assets/img/PngItem3.png'
import ProductImg4 from '../assets/img/PngItem4.png'
import ProductImg5 from '../assets/img/PngItem5.png'
import ProductImg6 from '../assets/img/PngItem6.png'
import ProductImg7 from '../assets/img/PngItem7.png'
import ProductImg8 from '../assets/img/PngItem8.png'
import ProductImg9 from '../assets/img/PngItem9.png'

const Products = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Product img={ProductImg1}/>
        <Product img={ProductImg2} />
        <Product img={ProductImg3} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        sx={{ mt: "1rem" }}
      >
        <Product img={ProductImg4} />
        <Product img={ProductImg5} />
        <Product img={ProductImg6} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        sx={{ mt: "1rem" }}
      >
        <Product img={ProductImg7}/>
        <Product img={ProductImg8}/>
        <Product img={ProductImg9}/>
      </Stack>
    </>
  );
};

export default Products;
