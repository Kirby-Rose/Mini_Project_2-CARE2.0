import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const BrandingBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CARE
        </Typography>
      </AppBar>
    </Box>
  );
};

export default BrandingBar;
