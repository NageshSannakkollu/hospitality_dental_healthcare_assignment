import { IoLogOutOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import "./index.css"
import { Link } from "react-router-dom";

const Header= (props) => {
  const {userRole} = props
  return (
      <nav className="nav_header_main_container">
          <div className="flex items-center gap-2">
            {/* <Activity className="h-8 w-8 text-primary" /> */}
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1756749184/Screenshot_2025-09-01_224414_klrwbv.png" alt="Healthcare Logo" className="header_logo_image" />
          </div>
        
        {/* {userRole && ( */}
          <div className="flex items-center gap-4">
            <div className="user_role_logout_container">
              <p className="mobile_view_user_role"><LuUserRound/><span className="user_role_span">:{userRole}</span></p>
              <p className="desktop_view_user_role">User Role: <span className="user_role_span">{userRole}</span></p>
            <Link to="/login"><IoLogOutOutline className="logout_mobile_view_button"/></Link>
            <Link to="/login"><button
              type="button"
              className="nav_header_logout_container"
            >
              Logout
            </button>
            </Link>
            </div>
          </div>
        {/* )} */}
      </nav>
  );
}

export default Header