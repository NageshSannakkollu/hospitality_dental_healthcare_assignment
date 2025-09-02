import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage";
import { Slide, ToastContainer } from "react-toastify"
import NotFound from "./components/pages/NotFound";
import DentistDashboard from "./components/pages/DentistPage/DentistDashboard";
import TechnicianDashboard from "./components/pages/TechnicianDashboard/TechnicianDashboard";

// const queryClient = new QueryClient();

const App = () => (
      <BrowserRouter>
      <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/technician" element={<TechnicianDashboard />} />
          <Route path="/dentist" element={<DentistDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

)

export default App;
