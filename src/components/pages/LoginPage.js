import { useState } from "react";
import "./DentistPage/index.css"
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Dentist");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault()
    const loginValues = {email:email,password:password,role:role}
    const response = await axios.post("http://localhost:3035/api/auth/login",loginValues)
    console.log("Response:",response.data.user.role)
    if(response.data.user.role ==="Dentist"){  
        Cookies.set('jwtToken', response.data.jwtToken, {expires: 30})
        toast.success(response.data.message)
        navigate("/dentist")
    }
    else if(response.data.user.role ==="Technician"){
      Cookies.set('jwtToken', response.data.jwtToken, {expires: 30})
        toast.success(response.data.message)
        navigate("/technician")
    }
    else{
        toast.error(response.data.message)
    }
}

  return (
    <div className="login_page_main_container">
      <div className="login_page_left_image">
        <div className="login_right_header_para_container">
          <h1>Advanced Dental Imaging Platform</h1>
          <p>Secure, efficient dental scan management for healthcare professionals.</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="login_page_form_container">
        <div className="w-full max-w-md">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1756749184/Screenshot_2025-09-01_224414_klrwbv.png" alt="Healthcare Logo" className="logo_image" />
              <h2 className="welcome_back_title">Welcome Back</h2>
              <p className="sign_in_paragraph">Sign in to access the dental imaging platform</p>
            </div>
            <div className="form_main_container">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="email">Email</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="login_input_form select_input_form">
                      <option value="Technician">Technician</option>
                      <option value="Dentist">Dentist</option>
                  </select>
                </div>
                <button
                  type="submit"
                  variant="medical"
                  className="sign_in_button"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>
              {/* <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Demo Credentials:</p>
                <p>Technician: tech@oralvis.com / password</p>
                <p>Dentist: dentist@oralvis.com / password</p>
              </div> */}
            </div>
          </div>
        </div>
  )
}

export default LoginPage
