import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
