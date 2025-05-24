import { Box, Card, Grid } from "@mui/material";
import ShopCard from "../components/ShopCard";
import ShoppingCart from "../components/ShoppingCart";

const ShopPage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display={"flex"} width={"inherit"} pt="10px" direction="row">
      <Box flex={4}>
        <ShopCard />
      </Box>
      <Box flex={1.5}>
        <ShoppingCart />
      </Box>
    </Box>
  );
};

export default ShopPage;
