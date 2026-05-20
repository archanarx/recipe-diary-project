import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const colors = {
    primary: "#2D5A27",
    secondary: "#ef8127",
    // secondary: "#F4A261",
  };

  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsLoading(true);

    const user = { name, email, password };

    axios.post("http://localhost:8000/signup/", user)
      .then(() => {
        setErrorMessage('');
        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch(error => {
        setIsLoading(false);

        if (error.response?.data?.errors) {
          setErrorMessage(Object.values(error.response.data.errors).join(''));
        } else {
          setErrorMessage('Failed to connect to API');
        }
      });
  }

  return (
    <div className="app-bg d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">

            <div className="p-4 p-md-5 rounded-4 glass-card">

              {isSuccess ? (
                // ✅ SUCCESS SCREEN ONLY
                <div className="text-center success-box">

                  <Link
                    to="/"
                    className="text-decoration-none fw-bolder fs-3"
                    style={{ color: colors.primary }}
                  >
                    🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
                  </Link>

                  <div className="mt-4">
                    <div className="checkmark-glow">
                      <div className="checkmark">✔</div>
                    </div>

                    <h4 className="mt-4 fw-bold">Account Created!</h4>
                    <p className="text-muted small">Redirecting to login...</p>
                  </div>

                </div>
              ) : (
                // ✅ NORMAL SIGNUP UI
                <>
                  {/* HEADER */}
                  <div className="text-center mb-4">
                    <Link
                      to="/"
                      className="text-decoration-none fw-bolder fs-3"
                      style={{ color: colors.primary }}
                    >
                      🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
                    </Link>

                    <h2
                      className="fw-semibold mt-3"
                      style={{
                        fontSize: "18px",
                        color: "#2D5A27",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      Build your recipe collection
                    </h2>
                  </div>

                  {/* ERROR */}
                  {errorMessage && (
                    <div className="alert alert-danger py-2 text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* FORM */}
                  <form onSubmit={registerUser}>

                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder=" "
                      />
                      <label className="form-label">Full Name</label>
                    </div>

                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder=" "
                      />
                      <label className="form-label">Email</label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder=" "
                          />
                          <label className="form-label">Password</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder=" "
                          />
                          <label className="form-label">Confirm Password</label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-glow w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating..." : "Create Account"}
                    </button>

                  </form>

                  {/* LINK */}
                  <p className="text-center mt-4 mb-0 text-muted small">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{ color: colors.secondary, fontWeight: "bold" }}
                    >
                      Login
                    </Link>
                  </p>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;


// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";

// function Signup() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#b1dc9a",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   //  State
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const navigate = useNavigate();

//   //  Register function
//   function registerUser(e) {
//     e.preventDefault(); // prevent page reload

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     setIsLoading(true);

//     const user = { name, email, password };

//     axios.post("http://localhost:8000/signup/", user)
//       .then(response => {
//         setErrorMessage('');
//         setIsLoading(false);
//         setIsSuccess(true); // 🔥 trigger success screen

//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       })
//       .catch(error => {
//         setIsLoading(false);
        
//         if (error.response?.data?.errors) {
//           setErrorMessage(Object.values(error.response.data.errors).join(''));
//         } else {
//           setErrorMessage('Failed to connect to API');
//         }
//       });
//   }
//   return (
//   <div className="app-bg d-flex align-items-center">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">

//           {/* SAME LOGIN STYLE CARD */}
//           <div
//             className="p-4 p-md-5 rounded-4 glass-card"
//           >

//             {/* HEADER */}
//             <div className="text-center mb-4">
//               <Link
//                 to="/"
//                 className="text-decoration-none fw-bolder fs-3"
//                 style={{ color: colors.primary }}
//               >
//                 🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//               </Link>

//               <h2
//                 className="fw-semibold mt-3"
//                 style={{
//                   fontSize: "18px",
//                   color: "#2D5A27",
//                   letterSpacing: "-0.3px",
//                   textAlign: "center"
//                 }}
//               >
//               Build your recipe collection
//               </h2>
//               {/* <h2 className="fw-bold mt-3 h4 text-dark">
//                 Create Account ✨
//               </h2> */}
//             </div>

//             {/* ERROR */}
//             {errorMessage && (
//               <div className="alert alert-danger py-2 text-center">
//                 {errorMessage}
//               </div>
//             )}

              
//             {/* FORM */}
//             {isSuccess ? (
//             <div className="text-center success-box">

//               <div className="checkmark-glow">
//                 <div className="checkmark">✔</div>
//               </div>

//                 <h4 className="mt-4 fw-bold">Account Created!</h4>
//                 <p className="text-muted small">Redirecting to login...</p>

//               </div>
//               ) : (
              
//               <form onSubmit={registerUser}>

//                 {/* FULL NAME */}
//                 <div className="form-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     placeholder=" "
//                   />
//                   <label className="form-label">Full Name</label>
//                 </div>

//                 {/* EMAIL */}
//                 <div className="form-group mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder=" "
//                   />
//                   <label className="form-label">Email</label>
//                 </div>

//                 {/* PASSWORD ROW */}
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <div className="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         placeholder=" "
//                       />
//                       <label className="form-label">Password</label>
//                     </div>
//                   </div>

//                   <div className="col-md-6 mb-4">
//                     <div className="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                         placeholder=" "
//                       />
//                       <label className="form-label">Confirm Password</label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* SAME LOGIN BUTTON STYLE */}
//                 <button
//                   type="submit"
//                   className="btn btn-glow w-100"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Creating..." : "Create Account"}
//                 </button>

//               </form>
//             )}

//             {/* LINK */}
//             <p className="text-center mt-4 mb-0 text-muted small">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 style={{ color: colors.secondary, fontWeight: "bold" }}
//               >
//                 Login
//               </Link>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
  
// }

// export default Signup;



// backup code


// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";

// function Signup() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#b1dc9a",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   //  State
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   //  Register function
//   function registerUser(e) {
//     e.preventDefault(); // prevent page reload

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     const user = { name, email, password };

//     axios.post("http://localhost:8000/signup/", user)
//       .then(response => {
//         setErrorMessage('');
//         navigate('/');
//       })
//       .catch(error => {
//         if (error.response?.data?.errors) {
//           setErrorMessage(Object.values(error.response.data.errors).join(''));
//         } else {
//           setErrorMessage('Failed to connect to API');
//         }
//       });
//   }
//   return (
//   <div className="app-bg d-flex align-items-center">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">

//           {/* SAME LOGIN STYLE CARD */}
//           <div
//             className="p-4 p-md-5 rounded-4 glass-card"
//           >

//             {/* HEADER */}
//             <div className="text-center mb-4">
//               <Link
//                 to="/"
//                 className="text-decoration-none fw-bolder fs-3"
//                 style={{ color: colors.primary }}
//               >
//                 🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//               </Link>

//               <h2
//                 className="fw-semibold mt-3"
//                 style={{
//                   fontSize: "18px",
//                   color: "#2D5A27",
//                   letterSpacing: "-0.3px",
//                   textAlign: "center"
//                 }}
//               >
//               Build your recipe collection
//               </h2>
//               {/* <h2 className="fw-bold mt-3 h4 text-dark">
//                 Create Account ✨
//               </h2> */}
//             </div>

//             {/* ERROR */}
//             {errorMessage && (
//               <div className="alert alert-danger py-2 text-center">
//                 {errorMessage}
//               </div>
//             )}

//             {/* FORM */}
//             <form onSubmit={registerUser}>

//               {/* FULL NAME */}
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   placeholder=" "
//                 />
//                 <label className="form-label">Full Name</label>
//               </div>

//               {/* EMAIL */}
//               <div className="form-group mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder=" "
//                 />
//                 <label className="form-label">Email</label>
//               </div>

//               {/* PASSWORD ROW */}
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                       placeholder=" "
//                     />
//                     <label className="form-label">Password</label>
//                   </div>
//                 </div>

//                 <div className="col-md-6 mb-4">
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                       placeholder=" "
//                     />
//                     <label className="form-label">Confirm Password</label>
//                   </div>
//                 </div>
//               </div>

//               {/* SAME LOGIN BUTTON STYLE */}
//               <button
//                 type="submit"
//                 className="btn w-100 rounded-pill fw-bold text-white btn-glow"
//               >
//                 Create Account
//               </button>

//             </form>

//             {/* LINK */}
//             <p className="text-center mt-4 mb-0 text-muted small">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 style={{ color: colors.secondary, fontWeight: "bold" }}
//               >
//                 Login
//               </Link>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
  
// }

// export default Signup;






// latest choice


// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";

// function Signup() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#b1dc9a",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   //  State
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   //  Register function
//   function registerUser(e) {
//     e.preventDefault(); // prevent page reload

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     const user = { name, email, password };

//     axios.post("http://localhost:8000/signup/", user)
//       .then(response => {
//         setErrorMessage('');
//         navigate('/');
//       })
//       .catch(error => {
//         if (error.response?.data?.errors) {
//           setErrorMessage(Object.values(error.response.data.errors).join(''));
//         } else {
//           setErrorMessage('Failed to connect to API');
//         }
//       });
//   }
//   return (
//   <div className="app-bg d-flex align-items-center">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">

//           {/* SAME LOGIN STYLE CARD */}
//           <div
//             className="p-4 p-md-5 rounded-4 glass-card"
//           >

//             {/* HEADER */}
//             <div className="text-center mb-4">
//               <Link
//                 to="/"
//                 className="text-decoration-none fw-bolder fs-3"
//                 style={{ color: colors.primary }}
//               >
//                 🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//               </Link>

//               <h2
//                 className="fw-semibold mt-3"
//                 style={{
//                   fontSize: "18px",
//                   color: "#2D5A27",
//                   letterSpacing: "-0.3px",
//                   textAlign: "center"
//                 }}
//               >
//               Build your recipe collection
//               </h2>
//               {/* <h2 className="fw-bold mt-3 h4 text-dark">
//                 Create Account ✨
//               </h2> */}
//             </div>

//             {/* ERROR */}
//             {errorMessage && (
//               <div className="alert alert-danger py-2 text-center">
//                 {errorMessage}
//               </div>
//             )}

//             {/* FORM */}
//             <form onSubmit={registerUser}>

//               <div className="mb-3">
//                 <label className="form-label small fw-bold text-muted">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control py-2 rounded-3 custom-input"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label small fw-bold text-muted">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control py-2 rounded-3 custom-input"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label small fw-bold text-muted">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6 mb-4">
//                   <label className="form-label small fw-bold text-muted">
//                     Confirm
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* SAME LOGIN BUTTON STYLE */}
//               <button
//                 type="submit"
//                 className="btn w-100 rounded-pill fw-bold text-white btn-glow"
//               >
//                 Create Account
//               </button>

//             </form>

//             {/* LINK */}
//             <p className="text-center mt-4 mb-0 text-muted small">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 style={{ color: colors.secondary, fontWeight: "bold" }}
//               >
//                 Login
//               </Link>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
  
// }

// export default Signup;






// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     bg: "#b1dc9a",         
//     inputBg: "#f1f3f5",    // Slightly darker shade for visibility
//     inputBorder: "#dee2e6" // Clearer border
//   };

// function Register() {
//   var [name, setName] = useState('');
//   var [email, setEmail] = useState('');
//   var [password, setPassword] = useState('');
//   var [confirmPassword, setConfirmPassword] = useState('');
//   var navigate = useNavigate();

//   function registerUser() {
//     var user = {
//       name: name,
//       email: email,
//       password: password
//     }
//     if (password == confirmPassword ) {
//     axios.post("http://localhost:8000/signup/", user).then(response=>{
//       setErrorMessage('');
//       navigate('/');
//     }).catch(error=>{
//       if(error.response.data.errors){
//         setErrorMessage(Object.values(error.response.data.errors).join(''));
//       }else{
//         setErrorMessage('Failed to connect to api');
//       }
//     })
//   }
// }




//   return (
//     <div style={{ 
//       backgroundColor: colors.bg, 
//       minHeight: "100vh", 
//       display: "flex", 
//       alignItems: "center",
//       padding: "40px 0",
//       fontFamily: "'Inter', sans-serif" 
//     }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5">
            
//             <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4" style={{ backgroundColor: "#ffffff" }}>
              
//               <div className="text-center mb-4">
//                 <Link to="/" className="text-decoration-none fw-bolder fs-3" style={{ color: colors.primary }}>
//                   🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//                 </Link>
//                 <h2 className="fw-bold mt-3 h4">Create Account</h2>
//               </div>

//               <form>
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Full Name</label>
//                   <input
//                     type="text"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder=""
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Email Address</label>
//                   <input
//                     type="email"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder=""
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label small fw-bold text-muted">Password</label>
//                     <input
//                       type="password"
//                       className="form-control py-2 rounded-3 custom-input"
//                       placeholder=""
//                       style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="col-md-6 mb-4">
//                     <label className="form-label small fw-bold text-muted">Confirm</label>
//                     <input
//                       type="password"
//                       className="form-control py-2 rounded-3 custom-input"
//                       placeholder=""
//                       style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                   </div>
                  
//                 </div>

//                 <button 
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn" 
//                   style={{ backgroundColor: colors.primary, border: "none" }} onClick={registerUser}
//                 >
//                   Create Account
//                 </button>
//               </form>

//               <p className="text-center mt-4 mb-0 text-muted small">
//                 Already have an account? <Link to="/login" className="fw-bold text-decoration-none" style={{ color: colors.secondary }}>Login</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .custom-input::placeholder {
//           color: #adb5bd;
//           font-size: 0.9rem;
//         }
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

// export default Signup;


































// import { Link } from "react-router-dom";

// function Signup() {
//   return (
//     <div className="container mt-5" style={{maxWidth:"400px"}}>

//       <h3 className="text-center mb-4">Create Account</h3>

//       <input className="form-control mb-3" placeholder="Full Name" />
//       <input className="form-control mb-3" placeholder="Email" />
//       <input type="password" className="form-control mb-3" placeholder="Password" />
//       <input type="password" className="form-control mb-3" placeholder="Confirm Password" />

//       <button className="btn btn-dark w-100 mb-3">
//         Create Account
//       </button>

//       <p className="text-center">
//         Already have account? <Link to="/login">Login</Link>
//       </p>

//     </div>
//   );
// }

// export default Signup;