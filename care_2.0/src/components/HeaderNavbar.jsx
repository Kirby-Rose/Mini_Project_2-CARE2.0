import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const HeaderNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CARE
            </Typography>
          </Button>
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
