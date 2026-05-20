import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

function ChangePassword() {
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // //  SHOW/HIDE STATE
  const [showPassword, setShowPassword] = useState({
  current: false,
  new: false,
  confirm: false
  });


  const colors = {
    primary: "#2D5A27",
    secondary: "#ef8127",
    accent: "#E9F5DB",
    bg: "#d2eab3",
    inputBg: "#f1f3f5"
  };

  
  const togglePassword = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };


  // ✅ CONNECTED TO BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();

    // check match
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match ");
      return;
    }

    axios.post("http://127.0.0.1:8000/change-password/", {
      old_password: currentPassword,
      new_password: newPassword
    }, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(() => {
      toast.success("Password changed successfully ");

      // clear fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    })
    .catch(err => {
      console.log(err);

      if (err.response?.data?.error) {
        toast.error(err.response.data.error); // backend error
      } else {
        toast.error("Error changing password ");
      }
    });
  };

return (
  <div className="app-bg">
    <Navbar />

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">

          {/* HEADER */}
          <div className="text-center mb-4">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
              style={{
                width: "75px",
                height: "75px",
                background: "rgba(233,245,219,0.6)",
                backdropFilter: "blur(10px)"
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>🔒</span>
            </div>

            <h2 className="fw-bold" style={{ color: colors.primary }}>
              Security Update
            </h2>
            <p className="text-muted">
              Change your password securely ✨
            </p>
          </div>

          {/* GLASS CARD */}
          <div className="glass-card p-4 p-md-5">

            <form onSubmit={handleSubmit}>

              {/* CURRENT PASSWORD */}
              <div className="mb-4">
                <label className="form-label small fw-bold text-muted text-uppercase">
                  Current Password
                </label>

                <div className="position-relative">
                  <input
                    type={showPassword.current ? "text" : "password"}
                    className="form-control py-2 rounded-3 custom-input"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    style={{ backgroundColor: colors.inputBg, border: "none" }}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePassword("current")}
                  >
                    {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
              </div>

              <hr className="my-4" style={{ opacity: 0.1 }} />

              {/* NEW PASSWORD */}
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted text-uppercase">
                  New Password
                </label>

                <div className="position-relative">
                  <input
                    type={showPassword.new ? "text" : "password"}
                    className="form-control py-2 rounded-3 custom-input"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ backgroundColor: colors.inputBg, border: "none" }}
                  />
                  <span
                      className="password-toggle"
                      onClick={() => togglePassword("new")}
                    >
                      {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="mb-4">
                <label className="form-label small fw-bold text-muted text-uppercase">
                  Confirm Password
                </label>

                <div className="position-relative">
                  <input
                    type={showPassword.confirm ? "text" : "password"}
                    className="form-control py-2 rounded-3 custom-input"
                    placeholder="Repeat new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ backgroundColor: colors.inputBg, border: "none" }}
                  />
                  <span
                      className="password-toggle"
                      onClick={() => togglePassword("confirm")}
                    >
                      {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="d-flex gap-3">

                <button 
                  type="button"
                  onClick={() => window.history.back()}
                  className="btn w-50 rounded-pill fw-bold"
                  style={{ color: colors.secondary }}
                >
                  Cancel
                </button>

                <button 
                  type="submit"
                  className="btn w-50 rounded-pill text-white fw-bold shadow-sm transition-btn"
                  style={{ backgroundColor: colors.primary, border: "none" }}
                >
                  Update
                </button>

              </div>

            </form>
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
        opacity: 0.95; 
        transform: translateY(-2px);
      }

      .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #6c757d;
          display: flex;
          align-items: center;
          transition: 0.2s;
        }

        .password-toggle:hover {
          color: ${colors.primary};
          transform: translateY(-50%) scale(1.1);
        }

        .custom-input {
          padding-right: 40px !important; /* space for eye icon */
        }

    `}</style>
  </div>
);
}

export default ChangePassword;





// MAIN BACKUP CODE

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import toast from "react-hot-toast";

// function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#d2eab3",
//     inputBg: "#f1f3f5"
//   };

//   // ✅ CONNECTED TO BACKEND
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // check match
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match ❌");
//       return;
//     }

//     axios.post("http://127.0.0.1:8000/change-password/", {
//       old_password: currentPassword,
//       new_password: newPassword
//     }, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(() => {
//       toast.success("Password changed successfully ");

//       // clear fields
//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     })
//     .catch(err => {
//       console.log(err);

//       if (err.response?.data?.error) {
//         toast.error(err.response.data.error); // backend error
//       } else {
//         toast.error("Error changing password ");
//       }
//     });
//   };

// return (
//   <div className="app-bg">
//     <Navbar />

//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-7 col-lg-5">

//           {/* HEADER */}
//           <div className="text-center mb-4">
//             <div 
//               className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
//               style={{
//                 width: "75px",
//                 height: "75px",
//                 background: "rgba(233,245,219,0.6)",
//                 backdropFilter: "blur(10px)"
//               }}
//             >
//               <span style={{ fontSize: "1.8rem" }}>🔒</span>
//             </div>

//             <h2 className="fw-bold" style={{ color: colors.primary }}>
//               Security Update
//             </h2>
//             <p className="text-muted">
//               Change your password securely ✨
//             </p>
//           </div>

//           {/* GLASS CARD */}
//           <div className="glass-card p-4 p-md-5">

//             <form onSubmit={handleSubmit}>

//               {/* CURRENT PASSWORD */}
//               <div className="mb-4">
//                 <label className="form-label small fw-bold text-muted text-uppercase">
//                   Current Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control py-2 rounded-3 custom-input"
//                   placeholder="Enter current password"
//                   value={currentPassword}
//                   onChange={(e) => setCurrentPassword(e.target.value)}
//                   style={{ backgroundColor: colors.inputBg, border: "none" }}
//                 />
//               </div>

//               <hr className="my-4" style={{ opacity: 0.1 }} />

//               {/* NEW PASSWORD */}
//               <div className="mb-3">
//                 <label className="form-label small fw-bold text-muted text-uppercase">
//                   New Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control py-2 rounded-3 custom-input"
//                   placeholder="Minimum 8 characters"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   style={{ backgroundColor: colors.inputBg, border: "none" }}
//                 />
//               </div>

//               {/* CONFIRM PASSWORD */}
//               <div className="mb-4">
//                 <label className="form-label small fw-bold text-muted text-uppercase">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control py-2 rounded-3 custom-input"
//                   placeholder="Repeat new password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   style={{ backgroundColor: colors.inputBg, border: "none" }}
//                 />
//               </div>

//               {/* BUTTONS */}
//               <div className="d-flex gap-3">

//                 <button 
//                   type="button"
//                   onClick={() => window.history.back()}
//                   className="btn w-50 rounded-pill fw-bold"
//                   style={{ color: colors.secondary }}
//                 >
//                   Cancel
//                 </button>

//                 <button 
//                   type="submit"
//                   className="btn w-50 rounded-pill text-white fw-bold shadow-sm transition-btn"
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Update
//                 </button>

//               </div>

//             </form>
//           </div>

//         </div>
//       </div>
//     </div>

//     <style>{`
//       .custom-input:focus {
//         background-color: #ffffff !important;
//         box-shadow: 0 0 0 2px ${colors.primary} !important;
//         outline: none;
//       }

//       .transition-btn:hover { 
//         opacity: 0.95; 
//         transform: translateY(-2px);
//       }
//     `}</style>
//   </div>
// );
// }

// export default ChangePassword;










// BACKUP RETURN CODE

// return (
//     <div className="app-bg">
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-7 col-lg-5">
            
//             {/* Security Icon & Header */}
//             <div className="text-center mb-4">
//               <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm" 
//                    style={{ width: "80px", height: "80px", backgroundColor: colors.accent }}>
//                 <span style={{ fontSize: "2rem" }}>🔒</span>
//               </div>
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Security Update</h2>
//               <p className="text-muted">Ensure your account remains safe.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ backgroundColor: "#ffffff" }}>
//               <form onSubmit={handleSubmit}>
                
//                 {/* Current Password */}
//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Current Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Enter current password"
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 <hr className="my-4" style={{ opacity: 0.1 }} />

//                 {/* New Password */}
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">New Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Minimum 8 characters"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Confirm New Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Repeat new password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 <button 
//                   type="submit"
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn mb-3" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Update Password
//                 </button>

//                 <button 
//                   type="button"
//                   onClick={() => window.history.back()}
//                   className="btn w-100 text-decoration-none fw-bold" 
//                   style={{ color: colors.secondary }}
//                 >
//                   Go Back
//                 </button>
//               </form>
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
//           opacity: 0.95; 
//           transform: translateY(-1px);
//         }
//       `}</style>
//     </div>
//   );







// import { useState } from "react";
// import Navbar from "../components/Navbar";

// function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//     bg: "#d2eab3",
//     inputBg: "#f1f3f5"
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     console.log("Password Updated:", { currentPassword, newPassword });
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-7 col-lg-5">
            
//             {/* Security Icon & Header */}
//             <div className="text-center mb-4">
//               <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm" 
//                    style={{ width: "80px", height: "80px", backgroundColor: colors.accent }}>
//                 <span style={{ fontSize: "2rem" }}>🔒</span>
//               </div>
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Security Update</h2>
//               <p className="text-muted">Ensure your account remains safe.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ backgroundColor: "#ffffff" }}>
//               <form onSubmit={handleSubmit}>
                
//                 {/* Current Password */}
//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Current Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Enter current password"
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 <hr className="my-4" style={{ opacity: 0.1 }} />

//                 {/* New Password */}
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted text-uppercase">New Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Minimum 8 characters"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted text-uppercase">Confirm New Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Repeat new password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: "none" }}
//                   />
//                 </div>

//                 <button 
//                   type="submit"
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn mb-3" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Update Password
//                 </button>

//                 <button 
//                   type="button"
//                   onClick={() => window.history.back()}
//                   className="btn w-100 text-decoration-none fw-bold" 
//                   style={{ color: colors.secondary }}
//                 >
//                   Go Back
//                 </button>
//               </form>
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
//           opacity: 0.95; 
//           transform: translateY(-1px);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ChangePassword;


// import { useState } from "react";
// import Navbar from "../components/Navbar";

// function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//     bg: "#fffdfa",
//     inputBg: "#f1f3f5",
//     danger: "#dc3545"
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     const passwordData = { currentPassword, newPassword };
//     console.log("Password Updated:", passwordData);
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
            
//             {/* Header */}
//             <div className="mb-4">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>Security Settings</h2>
//               <p className="text-muted">Keep your account secure by updating your password regularly.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//               <div className="row g-0">
                
//                 {/* Left Side: Security Icon/Info */}
//                 <div className="col-md-4 p-5 text-center border-end d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#fcfcfc" }}>
//                   <div className="mb-4 d-flex align-items-center justify-content-center rounded-circle shadow-sm" 
//                        style={{ width: "100px", height: "100px", backgroundColor: colors.accent, color: colors.primary, fontSize: "2.5rem" }}>
//                     🔒
//                   </div>
//                   <h6 className="fw-bold mb-2">Password Policy</h6>
//                   <p className="text-muted small px-3">
//                     Use a strong password with at least 8 characters, including numbers and symbols.
//                   </p>
//                 </div>

//                 {/* Right Side: Password Form */}
//                 <div className="col-md-8 p-5 bg-white">
//                   <h5 className="fw-bold mb-4" style={{ color: colors.primary }}>Change Password</h5>
                  
//                   <form onSubmit={handleSubmit}>
//                     {/* Current Password */}
//                     <div className="mb-3">
//                       <label className="form-label small fw-bold text-muted text-uppercase">Current Password</label>
//                       <input
//                         type="password"
//                         className="form-control py-2 custom-input"
//                         placeholder="••••••••"
//                         value={currentPassword}
//                         onChange={(e) => setCurrentPassword(e.target.value)}
//                         style={{ backgroundColor: colors.inputBg, border: "none" }}
//                       />
//                     </div>

//                     <div className="row">
//                       {/* New Password */}
//                       <div className="col-md-6 mb-3">
//                         <label className="form-label small fw-bold text-muted text-uppercase">New Password</label>
//                         <input
//                           type="password"
//                           className="form-control py-2 custom-input"
//                           placeholder="••••••••"
//                           value={newPassword}
//                           onChange={(e) => setNewPassword(e.target.value)}
//                           style={{ backgroundColor: colors.inputBg, border: "none" }}
//                         />
//                       </div>

//                       {/* Confirm Password */}
//                       <div className="col-md-6 mb-4">
//                         <label className="form-label small fw-bold text-muted text-uppercase">Confirm New Password</label>
//                         <input
//                           type="password"
//                           className="form-control py-2 custom-input"
//                           placeholder="••••••••"
//                           value={confirmPassword}
//                           onChange={(e) => setConfirmPassword(e.target.value)}
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
//                         Update Password
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

// export default ChangePassword;




// import { useState } from "react";
// import Navbar from "../components/Navbar";


// function ChangePassword() {

//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const passwordData = {
//       currentPassword,
//       newPassword
//     };

//     console.log("Password Updated:", passwordData);
//   };

//   return (

//     <div>

//       <Navbar />

//       <div className="container mt-4">

//         <h2 className="text-center mb-4">
//           Change Password
//         </h2>

//         <form onSubmit={handleSubmit}>

//           {/* Current Password */}
//           <div className="mb-3">

//             <label className="form-label">
//               Current Password
//             </label>

//             <input
//               type="password"
//               className="form-control"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//             />

//           </div>

//           {/* New Password */}
//           <div className="mb-3">

//             <label className="form-label">
//               New Password
//             </label>

//             <input
//               type="password"
//               className="form-control"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//           </div>

//           {/* Confirm Password */}
//           <div className="mb-4">

//             <label className="form-label">
//               Confirm Password
//             </label>

//             <input
//               type="password"
//               className="form-control"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//           </div>

//           {/* Button */}
//           <div className="text-center">

//             <button className="btn btn-primary px-4">
//               Update Password
//             </button>

//           </div>

//         </form>

//       </div>


//     </div>

//   );
// }

// export default ChangePassword;