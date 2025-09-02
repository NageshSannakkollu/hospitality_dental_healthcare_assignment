import "./index.css"

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
              <span className="font-medium">{userRole}</span>
            <button
              variant="outline"
              size="sm"
            //   onClick={onLogout}
              className="nav_header_logout_container"
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