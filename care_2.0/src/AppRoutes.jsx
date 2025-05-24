import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ShopPage from "./containers/ShopPage";
import LogInPage from "./containers/LogInPage";
import PetPage from "./containers/PetPage";
import SignUpPage from "./containers/SignUpPage";
import SubscriptionPage from "./containers/SubscriptionPage";
import ProfilePage from "./containers/ProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/shopPage" element={<ShopPage />} />
      <Route path="/logInPage" element={<LogInPage />} />
      <Route path="/petPage" element={<PetPage />} />
      <Route path="/signUpPage" element={<SignUpPage />} />
      <Route path="/subscriptionPage" element={<SubscriptionPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
