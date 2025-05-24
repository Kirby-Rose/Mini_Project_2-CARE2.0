import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fab from "@mui/material/Fab";

import { useCart } from "../CartContext";

const ShopCard = () => {
  const [data, setData] = React.useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json?.products) setData(json.products);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  if (data.length < 0) return <Typography>Loading...</Typography>;

  return (
    <Box
      display="flex"
      maxHeight={"95vh"}
      flexWrap={"wrap"}
      gap={2}
      height={"inherit"}
      justifyContent={"space-around"}
      sx={{
        scrollbarWidth: "none",
        overflow: "auto",
      }}
    >
      {data?.map((product) => (
        <Card
          key={product.name}
          sx={{ minWidth: 345, maxWidth: 345, marginBottom: 2 }}
        >
          <CardHeader title={product.name} subheader={product.price} />
          <CardMedia
            component="img"
            // sx={{ height: "194px", width: "300px" }}
            image={product.imageUrl}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Fab color="primary" aria-label="add-to-cart">
              <AddShoppingCartIcon onClick={() => addToCart(product)} />
            </Fab>
            <Typography> Add to Cart</Typography>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ShopCard;
