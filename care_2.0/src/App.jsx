import "./App.css";
import { Container } from "@mui/material";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
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
