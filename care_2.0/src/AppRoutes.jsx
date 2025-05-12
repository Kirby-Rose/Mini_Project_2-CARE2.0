import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ShopPage from "./containers/ShopPage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/shopPage" element={<ShopPage />} />
    </Routes>
  );
}

export default AppRoutes;
