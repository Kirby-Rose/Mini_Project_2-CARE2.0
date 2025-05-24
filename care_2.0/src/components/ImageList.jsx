import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PhotoCollage() {
  return (
    <ImageList
      sx={{ width: 850, height: 800, scrollbarWidth: "none", overflow: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "assets/animals/BettaFish.jpg",
    title: "Betta Fish",
    rows: 2,
    cols: 2,
  },
  {
    img: "assets/animals/Cockatiel.jpg",
    title: "Cockatiel",
  },
  {
    img: "assets/animals/CornSnake.jpg",
    title: "Corn Snake",
  },
  {
    img: "assets/animals/GoldenRetriever.jpg",
    title: "Golden Retriever",
    cols: 2,
  },
  {
    img: "assets/animals/GoldFish.jpg",
    title: "GoldFish",
    cols: 2,
  },
  {
    img: "assets/animals/GuineaPig.jpg",
    title: "GuineaPig",
    rows: 2,
    cols: 2,
  },
  {
    img: "assets/animals/LeopardGecko.jpg",
    title: "Leopard Gecko",
  },
  {
    img: "assets/animals/MaineCoon.jpg",
    title: "Maine Coon",
  },
  {
    img: "assets/animals/PersianCat.jpg",
    title: "Persican Cat",
    rows: 2,
    cols: 2,
  },
  {
    img: "assets/animals/SiberianHusky.jpg",
    title: "Siberian Husky",
  },
  {
    img: "assets/animals/SilkieChicken.jpg",
    title: "Silkie",
  },
  {
    img: "assets/animals/TreeFrog.jpg",
    title: "Tree Frog",
    cols: 2,
  },
];
