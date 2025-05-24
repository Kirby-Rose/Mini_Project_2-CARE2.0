import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AnimalInfo = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json?.pets) setData(json.pets);
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
      {data?.map((pets) => (
        <Card key={pets.title} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardHeader title={pets.title} subheader={pets.fullDescription} />
          <CardMedia
            component="img"
            height="194"
            image={pets.image}
            alt={pets.title}
          />
          <CardContent>
            <Typography variant="header2" sx={{ color: "text.secondary" }}>
              {" "}
              Diet
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {pets.diet}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="header2" sx={{ color: "text.secondary" }}>
              {" "}
              Exercise
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {pets.exercise}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="header2" sx={{ color: "text.secondary" }}>
              {" "}
              Housing
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {pets.housing}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default AnimalInfo;
