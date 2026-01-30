import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CustomerLayout from "../layouts/CustomerLayot";

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