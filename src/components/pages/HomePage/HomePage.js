import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
// import DentistDashboard from "./components/pages/DentistPage/DentistDashboard";
import LoginPage from "../LoginPage";
import DentistDashboard from "../DentistPage/DentistDashboard";
import TechnicianDashboard from "../TechnicianDashboard/TechnicianDashboard";

const HomePage = () => {
  const [user, setUser] = useState("Technician");
  const navigate = useNavigate();

  // const handleLogin = (role) => {
  //   setUser({ role });
  //   // In a real app, you'd store the JWT and redirect based on role
  //   if (role === "Technician") {
  //     navigate("/technician");
  //   } else {
  //     navigate("/dentist");
  //   }
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   navigate("/");
  // };

  if (!user) {
    return <LoginPage/>;
  }
  if (user.role === "Technician") {
    return <TechnicianDashboard  />;
  }
  return <DentistDashboard />;
};

export default HomePage;
