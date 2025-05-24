import { Box, Typography } from "@mui/material";

import PhotoCollage from "../components/imageList";

const HomePage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        display={"flex"}
        width={"inherit"}
        pt="10px"
        direction="row"
        align="center"
        variant="body1"
        sx={{ color: "darkgreen", fontSize: "1.5rem", mb: 2 }}
      >
        Care provides essential care information to help you care for all kinds
        of pets, presented in an easy-to-read format. Whether you have a dog,
        cat, bird, reptile, or any other pet, we focus on the most important
        things you need to know to keep your furry, feathered, or scaly friends
        happy and healthy. Start exploring and give your pets the care they
        deserve!
      </Typography>
      <PhotoCollage />
    </Box>
  );
};

export default HomePage;
