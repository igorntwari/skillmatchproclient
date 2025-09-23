import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import CreatePassword from "./pages/auth/CreatePassword";
import ForgotPassword from "./pages/auth/forgotPassowrd";
import ResetPassword from "./pages/auth/ResetPassword";
import SetNewPassword from "./pages/auth/SetNewPassword";
import UpdatedPassword from "./pages/auth/UpdatedPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/setnewpassword" element={<SetNewPassword />} />
        <Route path="/updatedPassword" element={<UpdatedPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
