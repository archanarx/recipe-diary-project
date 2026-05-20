import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import toast from "react-hot-toast";

function Profile() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [user, setUser] = useState(null);

  // const colors = {
  //   primary: "#2D5A27",
  //   secondary: "#F4A261",
  //   accent: "#E9F5DB",
  //   bg: "#d2eab3"
  // };

  // ✅ Fetch Profile (User + Recipes)
  const fetchProfile = () => {
    axios.get("http://127.0.0.1:8000/profile/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setUser(res.data);
      setMyRecipes(res.data.recipes); // ✅ recipes from backend
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ✅ Delete recipe
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className="mb-2">Delete this recipe?</p>
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              toast.dismiss(t.id);

              axios.delete(`http://127.0.0.1:8000/delete/${id}/`, {
              headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
              }
            })
            .then(() => {
              toast.success("Recipe deleted 🗑️");
              fetchProfile();
            })
            .catch(() => {
              toast.error("Error deleting ❌");
            });
            }}
          >
            Yes
          </button>

          <button
            className="btn btn-sm btn-secondary"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
  <div className="app-bg">
    <Navbar />

    <div className="container mt-5">

      {/* 🌟 PROFILE CARD (UPGRADED UI) */}
      <div
        className="card border-0 rounded-4 p-4 mb-5"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.10)",
          border: "1px solid rgba(255,255,255,0.4)"
        }}
      >
        <div className="row align-items-center">

          {/* PROFILE IMAGE */}
          <div className="col-md-auto text-center mb-3 mb-md-0">
            <img
              src={
                user?.profile_pic ||
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              }
              alt="profile"
              className="rounded-circle shadow"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "3px solid #E9F5DB"
              }}
            />
          </div>

          {/* USER INFO */}
          <div className="col-md">
            <h3 className="fw-bold mb-1" style={{ color: "#2D5A27" }}>
              {user?.name || "User"}
            </h3>

            <p className="text-muted mb-2">
              {user?.email || "user@email.com"}
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 mt-3">

              <Link to="/edit-profile" className="flex-fill text-decoration-none">
                <button className="btn btn-glow profile-btn w-100">
                  Edit Profile
                </button>
              </Link>

              <Link to="/change-password" className="flex-fill text-decoration-none">
                <button className="btn btn-glow-secondary profile-btn w-100">
                  Change Password
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* 🍽 SECTION TITLE */}
      <h4
        className="fw-bold mb-4"
        style={{
          color: "#2D5A27",
          letterSpacing: "-0.3px"
        }}
      >
        My Recipes
      </h4>

      <div className="row">

        {/* EMPTY STATE */}
        {myRecipes.length === 0 && (
          <div className="text-center mt-5">
            <h5 className="text-muted">No recipes yet 🍳</h5>

            <Link to="/add-recipe">
              <button
                className="btn mt-3 rounded-pill px-4 text-white fw-bold shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #2D5A27, #3a7a33)"
                }}
              >
                Add Your First Recipe
              </button>
            </Link>
          </div>
        )}

        {/* RECIPE CARDS (ONLY STYLE IMPROVED) */}
        {myRecipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div
              className="card border-0 rounded-4 overflow-hidden h-100"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "0.3s"
              }}
            >

              <img
                src={recipe.image}
                className="card-img-top"
                alt="recipe"
                style={{
                  height: "180px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body p-3">

                <h5 className="fw-bold mb-1" style={{ color: "#2D5A27" }}>
                  {recipe.title}
                </h5>

                <p className="text-muted small mb-3">
                  👁 {recipe.views} views
                </p>

                <div className="d-flex gap-2 ">

                  <Link to={`/edit-recipe/${recipe.id}`} 
                    className="btn btn-sm btn-outline-edit flex-fill d-flex align-items-center justify-content-center">
                        Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className="btn btn-sm btn-outline-delete flex-fill">
                    Delete
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
);
  
}

export default Profile;



// ✅ Delete recipe ----BACKUP

  // const handleDelete = (id) => {
  //   if (!window.confirm("Are you sure you want to delete this recipe?")) return;

  //   axios.delete(`http://127.0.0.1:8000/delete/${id}/`, {
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`
  //     }
  //   })
  //   .then(() => {
  //     alert("Recipe deleted ✅");
  //     fetchProfile(); // refresh list
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     alert("Error deleting ❌");
  //   });
  // };





// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [myRecipes, setMyRecipes] = useState([]);
//   const [user, setUser] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#d2eab3"
//   };

//   // ✅ Fetch user data
//   const fetchUser = () => {
//     axios.get("http://127.0.0.1:8000/profile/1/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setUser(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

//   // ✅ Fetch ONLY user's recipes
//   const fetchRecipes = () => {
//     axios.get("http://127.0.0.1:8000/my-recipes/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setMyRecipes(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

//   useEffect(() => {
//     fetchUser();
//     fetchRecipes();
//   }, []);

//   // ✅ Delete recipe
//   const handleDelete = (id) => {
//     if (!window.confirm("Are you sure you want to delete this recipe?")) return;

//     axios.delete(`http://127.0.0.1:8000/delete/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(() => {
//       alert("Recipe deleted ✅");
//       fetchRecipes(); // refresh
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error deleting ❌");
//     });
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
//       <Navbar />

//       <div className="container mt-5">

//         {/* Profile Card */}
//         <div className="card border-0 shadow-sm rounded-4 p-4 mb-5">
//           <div className="row align-items-center">
//             <div className="col-md-auto text-center mb-3 mb-md-0">
//               <img
//                 src={user?.profile_pic || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}
//                 alt="profile"
//                 className="rounded-circle"
//                 style={{ width: "120px", height: "120px", objectFit: "cover" }}
//               />
//             </div>

//             <div className="col-md">
//               <h3 className="fw-bold" style={{ color: colors.primary }}>
//                 {user?.name || "User"}
//               </h3>
//               <p className="text-muted">
//                 {user?.email || "user@email.com"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Recipes */}
//         <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>
//           My Recipes
//         </h4>

//         <div className="row">

//           {/* ✅ EMPTY STATE */}
//           {myRecipes.length === 0 && (
//             <div className="text-center mt-5">
//               <h5 className="text-muted">No recipes yet 🍳</h5>
//               <Link to="/add-recipe">
//                 <button className="btn mt-3 rounded-pill px-4 text-white fw-bold"
//                   style={{ backgroundColor: colors.primary }}>
//                   Add Your First Recipe
//                 </button>
//               </Link>
//             </div>
//           )}

//           {myRecipes.map((recipe) => (
//             <div className="col-md-4 mb-4" key={recipe.id}>
//               <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

//                 <img
//                   src={recipe.image}
//                   className="card-img-top"
//                   alt="recipe"
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />

//                 <div className="card-body">
//                   <h5 className="fw-bold">{recipe.title}</h5>
//                   <p className="text-muted">👁 {recipe.views}</p>

//                   <div className="d-flex gap-2">

//                     <Link to={`/edit-recipe/${recipe.id}`} className="flex-grow-1">
//                       <button
//                         className="btn btn-sm w-100 rounded-pill fw-bold"
//                         style={{ border: `1px solid ${colors.secondary}`, color: colors.secondary }}
//                       >
//                         Edit
//                       </button>
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(recipe.id)}
//                       className="btn btn-sm btn-outline-danger flex-grow-1 rounded-pill fw-bold"
//                     >
//                       Delete
//                     </button>

//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Profile;



// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [myRecipes, setMyRecipes] = useState([]);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#d2eab3"
//   };

//   // ✅ Fetch recipes
//   const fetchRecipes = () => {
//     axios.get("http://127.0.0.1:8000/home/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setMyRecipes(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   // ✅ Delete recipe
//   const handleDelete = (id) => {
//     if (!window.confirm("Are you sure you want to delete this recipe?")) return;

//     axios.delete(`http://127.0.0.1:8000/delete/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(() => {
//       alert("Recipe deleted ✅");
//       fetchRecipes(); // refresh list
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error deleting ❌");
//     });
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
//       <Navbar />

//       <div className="container mt-5">

//         {/* Profile Card */}
//         <div className="card border-0 shadow-sm rounded-4 p-4 mb-5">
//           <div className="row align-items-center">
//             <div className="col-md-auto text-center mb-3 mb-md-0">
//               <img
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
//                 alt="profile"
//                 className="rounded-circle"
//                 style={{ width: "120px", height: "120px", objectFit: "cover" }}
//               />
//             </div>

//             <div className="col-md">
//               <h3 className="fw-bold" style={{ color: colors.primary }}>User</h3>
//               <p className="text-muted">user@email.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Recipes */}
//         <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>My Recipes</h4>

//         <div className="row">
//           {myRecipes.map((recipe) => (
//             <div className="col-md-4 mb-4" key={recipe.id}>
//               <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

//                 <img
//                   src={recipe.image}
//                   className="card-img-top"
//                   alt="recipe"
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />

//                 <div className="card-body">
//                   <h5 className="fw-bold">{recipe.title}</h5>
//                   <p className="text-muted">👁 {recipe.views}</p>

//                   <div className="d-flex gap-2">
                    
//                     <Link to={`/edit-recipe/${recipe.id}`} className="flex-grow-1">
//                       <button className="btn btn-sm w-100 rounded-pill fw-bold"
//                         style={{ border: `1px solid ${colors.secondary}`, color: colors.secondary }}>
//                         Edit
//                       </button>
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(recipe.id)}
//                       className="btn btn-sm btn-outline-danger flex-grow-1 rounded-pill fw-bold"
//                     >
//                       Delete
//                     </button>

//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Profile;





// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

// function Profile() {
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//     bg: "#d2eab3"          
//   };

//   const myRecipes = [
//     { title: "Herbal Garden Pasta", views: 120, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400&q=80" },
//     { title: "Honey Glazed Cake", views: 80, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80" },
//     { title: "Roasted Tomato Soup", views: 50, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" }
//   ];

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
//       <Navbar />

//       <div className="container mt-5">
        
//         {/* Profile Section Card */}
//         <div className="card border-0 shadow-sm rounded-4 p-4 mb-5" style={{ backgroundColor: "#ffffff" }}>
//           <div className="row align-items-center">
//             <div className="col-md-auto text-center mb-3 mb-md-0">
//               <div style={{ padding: "5px", border: `3px solid ${colors.accent}`, borderRadius: "50%", display: "inline-block" }}>
//                 <img
//                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
//                   alt="profile"
//                   className="rounded-circle img-fluid shadow-sm"
//                   style={{ width: "120px", height: "120px", objectFit: "cover" }}
//                 />
//               </div>
//             </div>

//             <div className="col-md ps-md-4">
//               <h3 className="fw-bold mb-1" style={{ color: colors.primary }}>User Name</h3>
//               <p className="text-muted mb-3">user@email.com</p>

//               <div className="d-flex gap-2">
//                 <Link to="/edit-profile" className="text-decoration-none">
//                   <button className="btn rounded-pill px-4 text-white fw-bold shadow-sm transition-btn" 
//                           style={{ backgroundColor: colors.primary, border: "none" }}>
//                     Edit Profile
//                   </button>
//                 </Link>

//                 <Link to="/change-password" className="text-decoration-none">
//                   <button className="btn rounded-pill px-4 text-white fw-bold shadow-sm transition-btn" 
//                           style={{ backgroundColor: colors.secondary, border: "none" }}>
//                     Security
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* My Recipes Section */}
//         <div className="d-flex align-items-center mb-4">
//           <h4 className="fw-bold m-0" style={{ color: colors.primary }}>My Recipes</h4>
//           <hr className="flex-grow-1 ms-3" style={{ opacity: 0.1 }} />
//         </div>

//         <div className="row">
//           {myRecipes.map((recipe, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 recipe-card-hover">
//                 <div className="position-relative">
//                   <img
//                     src={recipe.img}
//                     className="card-img-top"
//                     alt={recipe.title}
//                     style={{ height: "180px", objectFit: "cover" }}
//                   />
//                   <div className="position-absolute top-0 end-0 m-2">
//                      <span className="badge rounded-pill text-white" style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
//                        👁 {recipe.views} Views
//                      </span>
//                   </div>
//                 </div>

//                 <div className="card-body p-4">
//                   <h5 className="fw-bold mb-3" style={{ color: colors.primary }}>{recipe.title}</h5>

//                   <div className="d-flex gap-2">
                    
//                     <Link to="/edit-recipe" className="flex-grow-1">
//                       <button className="btn btn-sm w-100 rounded-pill fw-bold" 
//                       style={{ border: `1px solid ${colors.secondary}`, color: colors.secondary }}>
//                           Edit
//                       </button>
//                     </Link>

//                     <button className="btn btn-sm btn-outline-danger flex-grow-1 rounded-pill fw-bold">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .transition-btn:hover { 
//           opacity: 0.9;
//           transform: translateY(-2px);
//         }
//         .recipe-card-hover { transition: transform 0.2s ease; }
//         .recipe-card-hover:hover { transform: translateY(-5px); }
//       `}</style>
//     </div>
//   );
// }

// export default Profile;



// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";


// function Profile() {

//   const myRecipes = [
//     { title: "Pasta", views: 120 },
//     { title: "Cake", views: 80 },
//     { title: "Soup", views: 50 }
//   ];

//   return (
//     <div>

//       <Navbar />

//       <div className="container mt-4">

//         {/* Profile Section */}
//         <div className="row align-items-center mb-4">

//           <div className="col-md-2">
//             <img
//               src="https://via.placeholder.com/120"
//               alt="profile"
//               className="rounded-circle img-fluid"
//             />
//           </div>

//           <div className="col-md-6">
//             <h5>Name: User Name</h5>
//             <p>Email: user@email.com</p>

//             <Link to="/edit-profile">
//                 <button className="btn btn-primary me-2">
//                     Edit Profile
//                 </button>
//             </Link>

//             <Link to="/change-password">
//                 <button className="btn btn-warning">
//                     Change Password
//                 </button>
//             </Link>
//           </div>

//         </div>

//         {/* My Recipes Title */}
//         <h4 className="mb-4">My Recipes</h4>

//         {/* Recipes Grid */}
//         <div className="row">

//           {myRecipes.map((recipe, index) => (

//             <div className="col-md-4 mb-4" key={index}>

//               <div className="card">

//                 <img
//                   src="https://source.unsplash.com/400x300/?food"
//                   className="card-img-top"
//                   alt="recipe"
//                 />

//                 <div className="card-body">

//                   <h5>{recipe.title}</h5>

//                   <p>👁 {recipe.views} Views</p>

//                   <button className="btn btn-warning btn-sm me-2">
//                     Edit
//                   </button>

//                   <button className="btn btn-danger btn-sm">
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

      

//     </div>
//   );
// }

// export default Profile;