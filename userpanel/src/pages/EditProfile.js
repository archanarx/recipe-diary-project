import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const colors = {
    primary: "#2D5A27",
    secondary: "#F4A261",
    accent: "#E9F5DB",
    bg: "#d2eab3",
    inputBg: "#f1f3f5"
  };

  // ✅ FETCH USER DATA
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/profile/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setName(res.data.name || "");
      setEmail(res.data.email || "");
      setPreview(res.data.profile_pic || "");
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  // ✅ HANDLE IMAGE CHANGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // preview instantly
    }
  };

  // ✅ SAVE CHANGES
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (image) {
      formData.append("profile_pic", image);
    }

    axios.put("http://127.0.0.1:8000/edit-profile/", formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(() => {
      toast.success("Profile updated successfully ");
      // alert("Profile updated ✅");
      navigate("/profile");
    })
    .catch(err => {
      console.log(err);
      toast.error("Error updating ");
      // alert("Error updating ");
    });
  };

  return (
    <div className="app-bg">
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Header */}
            <div className="mb-4">
              <h2 className="fw-bold" style={{ color: colors.primary }}>Account Settings</h2>
              <p className="text-muted">Manage your profile information and how others see you.</p>
            </div>

            <div className="glass-card p-0 overflow-hidden">
              <div className="row g-0">
                
                {/* Left Side: Profile Photo */}
                <div className="col-md-4 p-5 text-center border-end"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)"
                  }}>
                  <div className="mb-4 position-relative d-inline-block">
                    <img
                      src={preview || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}
                      alt="Profile Preview"
                      className="rounded-circle shadow-sm border border-4 border-white"
                      style={{ width: "160px", height: "160px", objectFit: "cover" }}
                    />
                  </div>
                  <h6 className="fw-bold mb-3">Profile Photo</h6>
                  <label className="btn btn-glow-secondary btn-sm px-3">
                    Change Photo
                    <input type="file" hidden onChange={handleImageChange} />
                  </label>
                  <p className="text-muted mt-3 small">JPG or PNG. Max size 2MB.</p>
                </div>

                {/* Right Side: Form */}
                <div className="col-md-8 p-5"
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(10px)"
                  }}>
                  <h5 className="fw-bold mb-4" style={{ color: colors.primary }}>Personal Information</h5>
                  
                  {/* ✅ CONNECTED FORM */}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">Public Name</label>
                        <input
                          type="text"
                          className="form-control py-2 custom-input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ backgroundColor: colors.inputBg, border: "none" }}
                        />
                      </div>

                      <div className="col-md-12 mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                        <input
                          type="email"
                          className="form-control py-2 custom-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ backgroundColor: colors.inputBg, border: "none" }}
                        />
                      </div>
                    </div>

                    <hr className="my-4" style={{ opacity: 0.1 }} />

                    <div className="d-flex justify-content-end gap-3">

                      <button 
                        type="button" 
                        onClick={() => window.history.back()}
                        className="btn btn-glow-secondary profile-btn">
                        Cancel
                      </button>

                      <button 
                        type="submit"
                        className="btn btn-glow profile-btn">
                        Save Changes
                      </button>

                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-input:focus {
          background-color: #ffffff !important;
          box-shadow: 0 0 0 2px ${colors.primary} !important;
          outline: none;
        }
        .transition-btn:hover { 
          opacity: 0.9; 
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default EditProfile;



// backup

// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function EditProfile() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#d2eab3",
//     inputBg: "#f1f3f5"
//   };

//   // ✅ FETCH USER DATA
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/profile/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setName(res.data.name || "");
//       setEmail(res.data.email || "");
//       setPreview(res.data.profile_pic || "");
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, []);

//   // ✅ HANDLE IMAGE CHANGE
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file)); // preview instantly
//     }
//   };

//   // ✅ SAVE CHANGES
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);

//     if (image) {
//       formData.append("profile_pic", image);
//     }

//     axios.put("http://127.0.0.1:8000/edit-profile/", formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(() => {
//       alert("Profile updated ✅");
//       navigate("/profile");
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error updating ❌");
//     });
//   };

//   return (
//     <div className="app-bg">
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
            
//             {/* Header */}
//             <div className="mb-4">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Account Settings</h2>
//               <p className="text-muted">Manage your profile information and how others see you.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//               <div className="row g-0">
                
//                 {/* Left Side: Profile Photo */}
//                 <div className="col-md-4 p-5 text-center border-end" style={{ backgroundColor: "#fcfcfc" }}>
//                   <div className="mb-4 position-relative d-inline-block">
//                     <img
//                       src={preview || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}
//                       alt="Profile Preview"
//                       className="rounded-circle shadow-sm border border-4 border-white"
//                       style={{ width: "160px", height: "160px", objectFit: "cover" }}
//                     />
//                   </div>
//                   <h6 className="fw-bold mb-3">Profile Photo</h6>
//                   <label className="btn btn-sm rounded-pill px-3 shadow-sm" 
//                          style={{ backgroundColor: colors.accent, color: colors.primary, cursor: "pointer" }}>
//                     Change Photo
//                     <input type="file" hidden onChange={handleImageChange} />
//                   </label>
//                   <p className="text-muted mt-3 small">JPG or PNG. Max size 2MB.</p>
//                 </div>

//                 {/* Right Side: Form */}
//                 <div className="col-md-8 p-5 bg-white">
//                   <h5 className="fw-bold mb-4" style={{ color: colors.primary }}>Personal Information</h5>
                  
//                   {/* ✅ CONNECTED FORM */}
//                   <form onSubmit={handleSubmit}>
//                     <div className="row">
//                       <div className="col-md-12 mb-3">
//                         <label className="form-label small fw-bold text-muted text-uppercase">Public Name</label>
//                         <input
//                           type="text"
//                           className="form-control py-2 custom-input"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           style={{ backgroundColor: colors.inputBg, border: "none" }}
//                         />
//                       </div>

//                       <div className="col-md-12 mb-4">
//                         <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
//                         <input
//                           type="email"
//                           className="form-control py-2 custom-input"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           style={{ backgroundColor: colors.inputBg, border: "none" }}
//                         />
//                       </div>
//                     </div>

//                     <hr className="my-4" style={{ opacity: 0.1 }} />

//                     <div className="d-flex justify-content-end gap-3">
//                       <button 
//                         type="button" 
//                         onClick={() => window.history.back()}
//                         className="btn rounded-pill px-4 fw-bold" 
//                         style={{ color: colors.secondary }}>
//                         Cancel
//                       </button>

//                       <button 
//                         type="submit"
//                         className="btn rounded-pill px-5 text-white fw-bold shadow-sm transition-btn" 
//                         style={{ backgroundColor: colors.primary, border: "none" }}>
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-input:focus {
//           background-color: #ffffff !important;
//           box-shadow: 0 0 0 2px ${colors.primary} !important;
//           outline: none;
//         }
//         .transition-btn:hover { 
//           opacity: 0.9; 
//           transform: scale(1.02);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default EditProfile;










// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function EditProfile() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#d2eab3",
//     inputBg: "#f1f3f5"
//   };

//   // ✅ FETCH USER DATA
//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/profile/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setName(res.data.name);
//       setEmail(res.data.email);
//       setPreview(res.data.profile_pic);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, []);

//   // ✅ HANDLE IMAGE CHANGE
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // ✅ SAVE CHANGES
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);

//     if (image) {
//       formData.append("profile_pic", image);
//     }

//     axios.put("http://127.0.0.1:8000/edit-profile/", formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(() => {
//       alert("Profile updated ✅");
//       navigate("/profile");
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error updating ❌");
//     });
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="card p-5 rounded-4 shadow-sm">

//           <h3 style={{ color: colors.primary }}>Edit Profile</h3>

//           <form onSubmit={handleSubmit}>
            
//             <div className="text-center mb-4">
//               <img
//                 src={preview || "https://via.placeholder.com/150"}
//                 alt="profile"
//                 className="rounded-circle"
//                 style={{ width: "120px", height: "120px", objectFit: "cover" }}
//               />

//               <input type="file" onChange={handleImageChange} className="form-control mt-3" />
//             </div>

//             <input
//               type="text"
//               className="form-control mb-3"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//             />

//             <input
//               type="email"
//               className="form-control mb-3"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//             />

//             <button className="btn btn-success w-100">
//               Save Changes
//             </button>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditProfile;



// import { useState } from "react";
// import Navbar from "../components/Navbar";

// function EditProfile() {
//   const [name, setName] = useState("User Name");
//   const [email, setEmail] = useState("user@email.com");
//   const [preview, setPreview] = useState("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80");

//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//     bg: "#d2eab3",
//     inputBg: "#f1f3f5"
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
            
//             {/* Header */}
//             <div className="mb-4">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Account Settings</h2>
//               <p className="text-muted">Manage your profile information and how others see you.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//               <div className="row g-0">
                
//                 {/* Left Side: Profile Photo Management */}
//                 <div className="col-md-4 p-5 text-center border-end" style={{ backgroundColor: "#fcfcfc" }}>
//                   <div className="mb-4 position-relative d-inline-block">
//                     <img
//                       src={preview}
//                       alt="Profile Preview"
//                       className="rounded-circle shadow-sm border border-4 border-white"
//                       style={{ width: "160px", height: "160px", objectFit: "cover" }}
//                     />
//                   </div>
//                   <h6 className="fw-bold mb-3">Profile Photo</h6>
//                   <label className="btn btn-sm rounded-pill px-3 shadow-sm" 
//                          style={{ backgroundColor: colors.accent, color: colors.primary, cursor: "pointer" }}>
//                     Change Photo
//                     <input type="file" hidden onChange={handleImageChange} />
//                   </label>
//                   <p className="text-muted mt-3 small">JPG or PNG. Max size 2MB.</p>
//                 </div>

//                 {/* Right Side: Information Form */}
//                 <div className="col-md-8 p-5 bg-white">
//                   <h5 className="fw-bold mb-4" style={{ color: colors.primary }}>Personal Information</h5>
                  
//                   <form onSubmit={(e) => e.preventDefault()}>
//                     <div className="row">
//                       <div className="col-md-12 mb-3">
//                         <label className="form-label small fw-bold text-muted text-uppercase">Public Name</label>
//                         <input
//                           type="text"
//                           className="form-control py-2 custom-input"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           style={{ backgroundColor: colors.inputBg, border: "none" }}
//                         />
//                       </div>

//                       <div className="col-md-12 mb-4">
//                         <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
//                         <input
//                           type="email"
//                           className="form-control py-2 custom-input"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           style={{ backgroundColor: colors.inputBg, border: "none" }}
//                         />
//                       </div>
//                     </div>

//                     <hr className="my-4" style={{ opacity: 0.1 }} />

//                     <div className="d-flex justify-content-end gap-3">
//                       <button 
//                         type="button" 
//                         onClick={() => window.history.back()}
//                         className="btn rounded-pill px-4 fw-bold" 
//                         style={{ color: colors.secondary }}>
//                         Cancel
//                       </button>
//                       <button 
//                         className="btn rounded-pill px-5 text-white fw-bold shadow-sm transition-btn" 
//                         style={{ backgroundColor: colors.primary, border: "none" }}>
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-input:focus {
//           background-color: #ffffff !important;
//           box-shadow: 0 0 0 2px ${colors.primary} !important;
//           outline: none;
//         }
//         .transition-btn:hover { 
//           opacity: 0.9; 
//           transform: scale(1.02);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default EditProfile;








// import { useState } from "react";
// import Navbar from "../components/Navbar";

// function EditProfile() {
//   const [name, setName] = useState("User Name");
//   const [email, setEmail] = useState("user@email.com");
//   const [image, setImage] = useState(null);

//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     bg: "#fffdfa",         // Warm white
//     inputBg: "#f1f3f5",    // Shaded input
//     inputBorder: "#dee2e6" // Border color
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const profileData = { name, email, image };
//     console.log("Updated Profile:", profileData);
//     // You would typically add navigation or a success message here
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5">
            
//             <div className="text-center mb-4">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Edit Profile</h2>
//               <p className="text-muted">Update your personal information</p>
//             </div>

//             <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4" style={{ backgroundColor: "#ffffff" }}>
//               <form onSubmit={handleSubmit}>
                
//                 {/* Name */}
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
//                   <input
//                     type="text"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
//                   <input
//                     type="email"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 {/* Profile Picture */}
//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Profile Picture</label>
//                   <input
//                     type="file"
//                     className="form-control py-2 rounded-3 custom-input"
//                     onChange={(e) => setImage(e.target.files[0])}
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 {/* Button */}
//                 <button 
//                   type="submit"
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Update Profile
//                 </button>

//                 <div className="text-center mt-3">
//                    <button 
//                      type="button"
//                      onClick={() => window.history.back()} 
//                      className="btn btn-link text-decoration-none small" 
//                      style={{ color: colors.secondary }}
//                    >
//                      Cancel
//                    </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-input:focus {
//           background-color: #ffffff !important;
//           border-color: #2D5A27 !important;
//           box-shadow: 0 0 0 0.2rem rgba(45, 90, 39, 0.15) !important;
//           outline: none;
//         }
//         .transition-btn { transition: 0.2s ease-in-out; }
//         .transition-btn:hover { 
//           opacity: 0.9;
//           transform: translateY(-1px);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default EditProfile;


// import { useState } from "react";
// import Navbar from "../components/Navbar";


// function EditProfile() {

//   const [name, setName] = useState("User Name");
//   const [email, setEmail] = useState("user@email.com");
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const profileData = {
//       name,
//       email,
//       image
//     };

//     console.log("Updated Profile:", profileData);
//   };

//   return (

//     <div>

//       <Navbar />

//       <div className="container mt-4">

//         <h2 className="text-center mb-4">
//           Edit Profile
//         </h2>

//         <form onSubmit={handleSubmit}>

//           {/* Name */}
//           <div className="mb-3">

//             <label className="form-label">
//               Name
//             </label>

//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//           </div>

//           {/* Email */}
//           <div className="mb-3">

//             <label className="form-label">
//               Email
//             </label>

//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//           </div>

//           {/* Profile Picture */}
//           <div className="mb-4">

//             <label className="form-label">
//               Profile Picture
//             </label>

//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => setImage(e.target.files[0])}
//             />

//           </div>

//           {/* Button */}
//           <div className="text-center">

//             <button className="btn btn-primary px-4">
//               Update Profile
//             </button>

//           </div>

//         </form>

//       </div>

    

//     </div>

//   );
// }

// export default EditProfile;