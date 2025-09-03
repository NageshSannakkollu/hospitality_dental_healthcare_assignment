import { IoLogOutOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import Cookies from 'js-cookie'
import "./index.css"
import { Link, useNavigate } from "react-router-dom";

const Header= (props) => {
  const {userRole} = props
  const navigate = useNavigate()
  const clickOnLogout = () => {
    Cookies.remove('jwtToken')
    navigate("/login")
  }
  return (
      <nav className="nav_header_main_container">
          <div className="flex items-center gap-2">
            {/* <Activity className="h-8 w-8 text-primary" /> */}
            <Link to="/"><img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1756867379/logoN_gpldmg.png" alt="Healthcare Logo" className="header_logo_image" /></Link>
          </div>
        
        {/* {userRole && ( */}
          <div className="flex items-center gap-4">
            <div className="user_role_logout_container">
              <p className="mobile_view_user_role"><LuUserRound/><span className="user_role_span">:{userRole}</span></p>
              <p className="desktop_view_user_role">User Role: <span className="user_role_span">{userRole}</span></p>
            <IoLogOutOutline className="logout_mobile_view_button" onClick={clickOnLogout}/>
            <button
              type="button"
              className="nav_header_logout_container"
              onClick={clickOnLogout}
            >
              Logout
            </button>
            
            </div>
          </div>
        {/* )} */}
      </nav>
  );
}

export default Header