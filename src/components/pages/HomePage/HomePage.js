import { useNavigate,Link } from "react-router-dom";
import Cookies from "js-cookie"
import Header from "../Header";

import "./index.css"

const HomePage = () => {
  const jwtToken = Cookies.get("jwtToken")
  const navigate = useNavigate()

  if (!jwtToken){
    navigate("/login")
  }
  return(
    <div>
      <Header userRole="Home"/>
      <div className="home_main_container">
        <h1 className="home_title_heading">Exceptional Dental Care Made Simple</h1>
        <p className="home_title_para">Connect with top-rated dentists and modern clinics in your area for personalized oral health solutions.</p>
        <h5 className="click_below">Click Below to Login as</h5>
        <div className="home_buttons_container">
          <Link to="/login"><button type="button" className="technician_button">Technician</button></Link>
          <Link to="/login"><button type="button" className="technician_button">Dentist</button></Link>
        </div>
      </div>
    </div>
)
}


export default HomePage;
