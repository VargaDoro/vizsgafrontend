import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayot";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<CustomerLayout />}>
                <Route index element={<HomePage />} />
                <Route path="bejelentkezes" element={<LoginPage />} />
                <Route path="regisztracio" element={<RegisterPage />} />

            </Route>
        </Routes>
    );
}

export default App;