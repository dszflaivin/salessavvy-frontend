import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"  
import RegistrationPage from "./RegistrationPage"  
import CustomerHomePage from "./CustomerHomePage";
import CartPage from "./CartPage";
import OrdersPage from "./OrdersPage";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";
import ProfilePage from './ProfilePage';
import AboutUs from "./AboutUs"; 

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/customerhome" element={<CustomerHomePage />} />
            <Route path="/UserCartPage" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutUs />} />
        </Routes>
    );
}

export default AppRoutes;