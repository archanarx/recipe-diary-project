import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const colors = {
    primary: "#2D5A27",
    secondary: "#ef8127",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth data 
    localStorage.removeItem("token");   
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };


  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <Link to="/home" className="navbar-brand">
          🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
        </Link>

        {/* ✅ Toggle Button (Hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-2">
            
            <Link
              to="/home"
              className="nav-link px-3 fw-bold"
              style={{ color: colors.primary }}
            >
              Home
            </Link>

            <Link
              to="/add-recipe"
              className="nav-link px-3 fw-bold"
              style={{ color: colors.primary }}
            >
              Add Recipe
            </Link>

            <Link
              to="/profile"
              className="nav-link px-3 fw-bold"
              style={{ color: colors.primary }}
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-sm rounded-pill px-4 ms-lg-2 fw-bold shadow-sm"
              style={{ color: "#dc3545" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import { Link } from "react-router-dom";

// function Navbar() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//   };

//   return (
//     <nav className="navbar navbar-expand-lg sticky-top shadow-sm ">
//       <div className="container">
//       <Link to="/home" className="navbar-brand">
//          🥗 Recipe<span style={{ color: "#F4A261" }}>Diary</span>
//       </Link>

//         <div className="d-flex align-items-center gap-2">
//           <Link to="/home" className="nav-link px-3 fw-bold" style={{ color: colors.primary }}>Home</Link>
//           <Link to="/add-recipe" className="nav-link px-3 fw-bold" style={{ color: colors.primary }}>Add Recipe</Link>
//           <Link to="/profile" className="nav-link px-3 fw-bold" style={{ color: colors.primary }}>Profile</Link>
          
//           <button className="btn btn-sm rounded-pill px-4 ms-2 fw-bold shadow-sm" style={{ border: "2px solid #dc3545", color: "#dc3545" }}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;












// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
    
//     <nav className="navbar navbar-dark bg-dark">
//       <div className="container">

//         <span className="navbar-brand fw-bold">
//           Recipe Diary
//         </span>

//         <div>

//           <Link to="/home">
//             <button className="btn btn-outline-light me-2">
//               Home
//             </button>
//           </Link>

//           <Link to="/add-recipe">
//             <button className="btn btn-outline-light me-2">
//               Add Recipe
//             </button>
//           </Link>

//           <Link to="/profile">
//             <button className="btn btn-outline-light me-2">
//               Profile
//             </button>
//           </Link>

//           <button className="btn btn-danger">
//             Logout
//           </button>

//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;










// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <div className="container">

//         <span className="navbar-brand fw-bold">
//           Recipe Diary
//         </span>

//         <div>
//           <button className="btn btn-outline-light me-2">Home</button>


//           <button className="btn btn-outline-light me-2">
//             Add Recipe
//           </button>
          

//           <button className="btn btn-outline-light me-2">
//             Profile
//           </button>

//           <button className="btn btn-danger">
//             Logout
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;