import { Box, Typography } from "@mui/material";
import PhotoCollage from "../components/imageList";

const SubscriptionPage = () => {
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
        Subscribe to our convenient pet food and supplies service! Choose from
        weekly or monthly delivery options to ensure your furry friends never
        run out of essentials. Enjoy a wide selection of premium pet food,
        treats, and accessories delivered right to your door. Flexible plans,
        easy management, and reliable delivery—keeping your pets happy and
        healthy has never been easier.
      </Typography>
      <Typography
        display={"flex"}
        width={"inherit"}
        pt="10px"
        direction="row"
        align="center"
        variant="body1"
        sx={{ color: "darkgreen", fontSize: "1.5rem", mb: 2 }}
      >
        <a
          href="/signUpPage"
          style={{ color: "darkgreen", textDecoration: "underline" }}
        >
          Click here to start your subscription today
        </a>
      </Typography>
      <PhotoCollage />
    </Box>
  );
};

export default SubscriptionPage;
