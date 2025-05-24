import { Box } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  // VARIABLES/STATE LIVE HERE
  const { userId } = useParams();
  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <ProfileCard
        id={userId}
        display={"flex"}
        width={"inherit"}
        pt="10px"
        direction="row"
        align="center"
      />
    </Box>
  );
};

export default ProfilePage;
