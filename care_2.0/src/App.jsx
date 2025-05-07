import "./App.css";
import { Container } from "@mui/material";
import AppRoutes from "./AppRoutes";
import HeaderNavBar from "./components/HeaderNavbar";

function App() {
  return (
    <>
      <HeaderNavBar />
      <Container
        sx={{
          display: "flex",
          height: "90vh",
        }}
      >
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
