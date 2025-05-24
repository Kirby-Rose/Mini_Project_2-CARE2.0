import { Box } from "@mui/material";
import SignInfunction from "../components/logIn";

const LogInPage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth={"100vw"}
      alignItems="center"
    >
      <SignInfunction display={"flex"} align="center" />
    </Box>
  );
};

export default LogInPage;
