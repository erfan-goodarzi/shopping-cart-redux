import Stack from "@mui/material/Stack";
import Product from "./Product";
import ProductImg1 from "../assets/img/PngItem_3494956.png";
import ProductImg2 from "../assets/img/PngItem1.png";
import ProductImg3 from "../assets/img/PngItem3.png";
import ProductImg4 from "../assets/img/PngItem4.png";
import ProductImg5 from "../assets/img/PngItem5.png";
import ProductImg6 from "../assets/img/PngItem6.png";
import ProductImg7 from "../assets/img/PngItem_3672935.png";
import ProductImg8 from "../assets/img/PngItem_1334010.png";
import ProductImg9 from "../assets/img/PngItem_5224522.png";

const Products = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Product
          id={0}
          title="ipone 13 pro"
          price={89.900}
          img={ProductImg1}
        />
        <Product
          id={1}
          title="Beats Studio3 Wireless Over"
          price={349.95}
          img={ProductImg2}
        />
        <Product id={2} title="AirPods Pro" price={249.00} img={ProductImg3} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Product
          id={3}
          title="Silver Stainless Steel Case with Milanese Loop"
          price={749}
          img={ProductImg4}
        />
        <Product
          id={4}
          title="AirPods (3rd generation)"
          price={179.00}
          img={ProductImg5}
        />
        <Product
          id={5}
          title="Starlight Aluminum Case"
          price={399}
          img={ProductImg6}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Product
          id={6}
          title="Beats Flex Wireless Earphone"
          price={69.99}
          img={ProductImg7}
        />
        <Product
          id={7}
          title="Refurbished 13.3-inch MacBook Pro Apple M1 Chip with 8‑Core CPU and 8‑Core GPU"
          price={1499.00}
          img={ProductImg8}
        />
        <Product
          id={8}
          title="Beats Studio3 Headphones"
          price={349.95}
          img={ProductImg9}
        />
      </Stack>
    </>
  );
};

export default Products;
