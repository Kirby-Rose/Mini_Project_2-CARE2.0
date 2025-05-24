import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import BrandingBar from "./BrandingBar";
import { useNavigate } from "react-router-dom";

const HeaderNavBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: "14vh", flexGrow: 1 }}>
      <AppBar>
        <Toolbar id="toolbar">
          <BrandingBar />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 70,
              letterSpacing: ".3rem",
            }}
          >
            CARE
          </Typography>
          <Button color="inherit" onClick={() => navigate("/ShopPage")}>
            Shop
          </Button>
          <Button color="inherit" onClick={() => navigate("/PetPage")}>
            Pet Care
          </Button>
          <Button color="inherit" onClick={() => navigate("/SubscriptionPage")}>
            Subscriptions
          </Button>
          <Button color="inherit" onClick={() => navigate("/LogInPage")}>
            My Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/SignUpPage")}>
            Join Care
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderNavBar;
