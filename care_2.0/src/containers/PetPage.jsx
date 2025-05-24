import { Box } from "@mui/material";
import AnimalInfo from "../components/AnimalInfo";

const PetPage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display={"flex"} width={"inherit"} pt="10px" direction="row">
      <Box flex={4}>
        <AnimalInfo />
      </Box>
    </Box>
  );
};

export default PetPage;
