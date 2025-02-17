import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"  
import RegistrationPage from "./RegistrationPage"  


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
        </Routes>
    );
}

export default AppRoutes;