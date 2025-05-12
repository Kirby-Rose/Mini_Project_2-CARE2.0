import * as React from "react";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";

const ShopCard = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/assets/data/ShopDetails.json")
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

  return data?.map((products) => (
    <Card key={products.name} sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardHeader title={products.name} subheader={products.price} />
      <CardMedia
        component="img"
        height="194"
        image={products.imageUrl}
        alt={products.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {products.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Save for later">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));
};

export default ShopCard;
