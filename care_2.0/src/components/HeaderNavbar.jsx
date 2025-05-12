import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import BrandingBar from "./BrandingBar";

const HeaderNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Pet Care</Button>
          <Button color="inherit">Subscriptions</Button>
          <Button color="inherit">My Profile</Button>
          <Button color="inherit">Join Care</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderNavBar;
