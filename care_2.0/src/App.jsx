import "./App.css";
import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";
import HeaderNavBar from "./components/HeaderNavbar";

function App() {
  return (
    <Box>
      <HeaderNavBar />
      <Box
        sx={{
          display: "flex",
          height: "86vh",
          mx: "50px",
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  );
}

export default App;
