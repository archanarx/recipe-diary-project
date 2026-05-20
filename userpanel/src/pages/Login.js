import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const colors = {
    primary: "#2D5A27",
    secondary: "#ef8127",
    bg: "#b1dc9a",
    inputBg: "#f1f3f5",
    inputBorder: "#dee2e6"
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // ✅ for redirect

  function attemptLogin(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/login/", {
      email: email,
      password: password
    })
    .then(response => {
      setErrorMessage('');

      console.log(response.data); // 🔥 debug

      //  store token
      localStorage.setItem('token', response.data.token);

      //  redirect to home
      navigate('/home');
    })
    .catch(error => {
      console.log(error); // 🔥 debug

      if (error.response?.data?.errors) {
        setErrorMessage(Object.values(error.response.data.errors).join(' '));
      } else if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage("Server not responding");
      } else {
        setErrorMessage("Something went wrong");
      }
    });
  }
  return (
 <div className="app-bg d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">

          {/* GLASS CARD */}
          <div className="p-4 p-md-5 rounded-4 glass-card position-relative">
        

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
                  fontSize: "16px",
                  color: "#2D5A27",
                  letterSpacing: "-0.2px",
                  textAlign: "center"
                }}
              >
                   Ready to create something amazing?
              </h2>
              {/* <h2 className="fw-bold mt-3 h4 text-dark">Your recipes are waiting 🍲</h2> */}

              {errorMessage && (
                <div className="alert alert-danger mt-3 py-2">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* FORM */}
            <form onSubmit={attemptLogin}>

              {/* EMAIL */}
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

                {/* PASSWORD */}
              <div className="form-group mb-4">
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

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="btn w-100 rounded-pill fw-bold text-white btn-glow"
              >
                Login
              </button>

            </form>

            {/* SIGNUP LINK */}
            <p className="text-center mt-4 mb-0 text-muted small">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="fw-bold text-decoration-none"
                style={{ color: colors.secondary }}
              >
                Register
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>

    
  </div>
);
  
}

export default Login;






// latest choice




// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// function Login() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#b1dc9a",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate(); // ✅ for redirect

//   function attemptLogin(e) {
//     e.preventDefault();

//     axios.post("http://127.0.0.1:8000/login/", {
//       email: email,
//       password: password
//     })
//     .then(response => {
//       setErrorMessage('');

//       console.log(response.data); // 🔥 debug

//       //  store token
//       localStorage.setItem('token', response.data.token);

//       //  redirect to home
//       navigate('/home');
//     })
//     .catch(error => {
//       console.log(error); // 🔥 debug

//       if (error.response?.data?.errors) {
//         setErrorMessage(Object.values(error.response.data.errors).join(' '));
//       } else if (error.response?.data?.message) {
//         setErrorMessage(error.response.data.message);
//       } else if (error.request) {
//         setErrorMessage("Server not responding");
//       } else {
//         setErrorMessage("Something went wrong");
//       }
//     });
//   }
//   return (
//  <div className="app-bg d-flex align-items-center">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-5 col-lg-4">

//           {/* GLASS CARD */}
//           <div className="p-4 p-md-5 rounded-4 glass-card position-relative">
        

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
//                   fontSize: "16px",
//                   color: "#2D5A27",
//                   letterSpacing: "-0.2px",
//                   textAlign: "center"
//                 }}
//               >
//                    Ready to create something amazing?
//               </h2>
//               {/* <h2 className="fw-bold mt-3 h4 text-dark">Your recipes are waiting 🍲</h2> */}

//               {errorMessage && (
//                 <div className="alert alert-danger mt-3 py-2">
//                   {errorMessage}
//                 </div>
//               )}
//             </div>

//             {/* FORM */}
//             <form onSubmit={attemptLogin}>

//               <div className="mb-3">
//                 <label className="form-label small fw-bold text-muted">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control py-2 rounded-3 custom-input"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                   style={{
//                     backgroundColor: "rgba(241,243,245,0.7)",
//                     border: "1px solid #dee2e6"
//                   }}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="form-label small fw-bold text-muted">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control py-2 rounded-3 custom-input"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   required
//                   style={{
//                     backgroundColor: "rgba(241,243,245,0.7)",
//                     border: "1px solid #dee2e6"
//                   }}
//                 />
//               </div>

//               {/* LOGIN BUTTON */}
//               <button
//                 type="submit"
//                 className="btn w-100 rounded-pill fw-bold text-white btn-glow"
//               >
//                 Login
//               </button>

//             </form>

//             {/* SIGNUP LINK */}
//             <p className="text-center mt-4 mb-0 text-muted small">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="fw-bold text-decoration-none"
//                 style={{ color: colors.secondary }}
//               >
//                 Register
//               </Link>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>

//     {/* STYLE */}
//     <style>{`
//       .custom-input:focus {
//         border-color: #2D5A27 !important;
//         box-shadow: 0 0 0 0.2rem rgba(45, 90, 39, 0.2) !important;
//         background: white !important;
//       }

//       .login-btn {
//         background: linear-gradient(135deg, #2D5A27, #3a7a33);
//         padding: 12px;
//         transition: all 0.3s ease;
//         box-shadow: 0 6px 15px rgba(45,90,39,0.2);
//       }

//       .login-btn:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 12px 25px rgba(45,90,39,0.3);
//         opacity: 0.95;
//       }
//     `}</style>
//   </div>
// );
  
// }

// export default Login;















// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// function Login() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#b1dc9a",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   function attemptLogin(e) {
//     e.preventDefault(); // ✅ prevent page reload

//     axios.post("http://localhost:8000/login/", {
//       email: email,
//       password: password
//     })
//     .then(response => {
//       setErrorMessage('');
//       console.log(response.data.token);
//       localStorage.setItem('token', response.data.token); // ✅ Store token in localStorage
//     })
//     .catch(error => {
//       if (error.response?.data?.errors) {
//         setErrorMessage(Object.values(error.response.data.errors).join(' '));
//       } else if (error.response?.data?.message) {
//         setErrorMessage(error.response.data.message);
//       } else {
//         setErrorMessage('Failed to login user. Please contact admin');
//       }
//     });
//   }

//   return (
//     <div style={{ 
//       backgroundColor: colors.bg, 
//       minHeight: "100vh", 
//       display: "flex", 
//       alignItems: "center",
//       fontFamily: "'Inter', sans-serif" 
//     }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-5 col-lg-4">
            
//             <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4" style={{ backgroundColor: "#ffffff" }}>
              
//               <div className="text-center mb-4">
//                 <Link to="/" className="text-decoration-none fw-bolder fs-3" style={{ color: colors.primary }}>
//                   🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//                 </Link>
//                 <h2 className="fw-bold mt-3 h4">Sign In</h2>

//                 {errorMessage && (
//                   <div className="alert alert-danger">{errorMessage}</div>
//                 )}
//               </div>

//               {/* ✅ attach submit here instead of button */}
//               <form onSubmit={attemptLogin}>
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Email</label>
//                   <input
//                     type="email"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted">Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 <button 
//                   type="submit"
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Login
//                 </button>
//               </form>

//               <p className="text-center mt-4 mb-0 text-muted small">
//                 Don't have an account?{" "}
//                 <Link to="/signup" className="fw-bold text-decoration-none" style={{ color: colors.secondary }}>
//                   Register
//                 </Link>
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;














// import { Link } from "react-router-dom";
// import axios from "axios";


// function Login() {
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     bg: "#b1dc9a",         // Warm white background
//     inputBg: "#f1f3f5",    // Light gray for input visibility
//     inputBorder: "#dee2e6" // Sharper border color
    

//     var [email, setEmail] = useState('');
//     var [password, setPassword] = useState('');
//     var [errorMessage, setErrorMessage] = useState('');
      
//       function attemptLogin() {
//          axios.post("http://localhost:8000/login/", user,{
//             email:email,
//             password:password
//         }).then(response=>{
//             setErrorMessage('')
//             console.log(response.data.token)
//         }).catch(error=>{
//             if(error.response.data.errors){
//                 setErrorMessage(Object.values(error.response.data.errors).join(' '))
//             }else if(error.response.data.message){
//                 setErrorMessage(error.response.data.message)
//             }else{
//                 setErrorMessage('Failed to login user. Please contact admin')
//             }
//         })

//   };

//   return (
//     <div style={{ 
//       backgroundColor: colors.bg, 
//       minHeight: "100vh", 
//       display: "flex", 
//       alignItems: "center",
//       fontFamily: "'Inter', sans-serif" 
//     }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-5 col-lg-4">
            
//             <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4" style={{ backgroundColor: "#ffffff" }}>
              
//               <div className="text-center mb-4">
//                 <Link to="/" className="text-decoration-none fw-bolder fs-3" style={{ color: colors.primary }}>
//                   🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//                 </Link>
//                 <h2 className="fw-bold mt-3 h4">Sign In</h2>
//                  {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
//               </div>

//               <form>
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Email</label>
//                   <input
//                     type="email"
//                     className="form-control py-2 rounded-3 custom-input"
//                     value={email}
//                         onInput={(event)=>setEmail(event.target.value)}
//                     placeholder="Enter your email"
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label small fw-bold text-muted">Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 custom-input"
//                     placeholder="Enter your password"
//                     value={password}
//                         onInput={(event)=>setPassword(event.target.value)}
//                     style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//                   />
//                 </div>

//                 <button 
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}onClick={attemptLogin}
//                 >
//                   Login
//                 </button>
//               </form>

//               <p className="text-center mt-4 mb-0 text-muted small">
//                 Don't have an account? <Link to="/signup" className="fw-bold text-decoration-none" style={{ color: colors.secondary }}>Register</Link>
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
//           box-shadow: 0 4px 12px rgba(45, 90, 39, 0.2) !important;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Login;













// import { Link } from "react-router-dom";

// function Login() {
//   // Same color theme as Landing Page
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//     bg: "#fffdfa"          // Warm white
//   };

//   return (
//     <div style={{ 
//       backgroundColor: colors.bg, 
//       minHeight: "100vh", 
//       display: "flex", 
//       alignItems: "center",
//       fontFamily: "'Inter', sans-serif" 
//     }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-5 col-lg-4">
            
//             {/* Login Card */}
//             <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4" style={{ backgroundColor: "#ffffff" }}>
              
//               <div className="text-center mb-4">
//                 <Link to="/" className="text-decoration-none fw-bolder fs-3" style={{ color: colors.primary }}>
//                   🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
//                 </Link>
//                 <h2 className="fw-bold mt-3 h4">Welcome Back</h2>
//                 <p className="text-muted small">Please enter your details to sign in</p>
//               </div>

//               <form>
//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Email Address</label>
//                   <input
//                     type="email"
//                     className="form-control py-2 rounded-3 border-light-subtle shadow-sm"
//                     placeholder="name@example.com"
//                     style={{ backgroundColor: "#fcfcfc" }}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label small fw-bold text-muted">Password</label>
//                   <input
//                     type="password"
//                     className="form-control py-2 rounded-3 border-light-subtle shadow-sm"
//                     placeholder="••••••••"
//                     style={{ backgroundColor: "#fcfcfc" }}
//                   />
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <div className="form-check">
//                     <input className="form-check-input" type="checkbox" id="remember" />
//                     <label className="form-check-label small text-muted" htmlFor="remember">
//                       Remember me
//                     </label>
//                   </div>
//                   <Link to="#" className="small text-decoration-none fw-bold" style={{ color: colors.primary }}>
//                     Forgot?
//                   </Link>
//                 </div>

//                 <button 
//                   className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn" 
//                   style={{ backgroundColor: colors.primary, border: "none" }}
//                 >
//                   Sign In
//                 </button>
//               </form>

//               <p className="text-center mt-4 mb-0 text-muted small">
//                 New here? <Link to="/signup" className="fw-bold text-decoration-none" style={{ color: colors.secondary }}>Create an account</Link>
//               </p>
//             </div>
            
//             <p className="text-center mt-4 text-muted" style={{ fontSize: "0.8rem" }}>
//               © 2026 Recipe Diary. Secure Login.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .transition-btn { transition: all 0.3s ease; }
//         .transition-btn:hover { 
//           filter: brightness(1.2); 
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(45, 90, 39, 0.2) !important;
//         }
//         .form-control:focus {
//           border-color: #2D5A27;
//           box-shadow: 0 0 0 0.25px rgba(45, 90, 39, 0.25);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Login;



// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="container mt-5" style={{maxWidth:"400px"}}>

//       <h3 className="text-center mb-4">Login</h3>

//       <input
//         className="form-control mb-3"
//         placeholder="Email"
//       />

//       <input
//         type="password"
//         className="form-control mb-3"
//         placeholder="Password"
//       />

//       <button className="btn btn-dark w-100 mb-3">
//         Login
//       </button>

//       <p className="text-center">
//         Don't have an account? <Link to="/signup">Register</Link>
//       </p>

//     </div>
//   );
// }

// export default Login;