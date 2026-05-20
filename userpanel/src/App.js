import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import TopRecipes from "./pages/TopRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";

import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";


function App() {
  return (


    <BrowserRouter>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
            background: "#fff",
            color: "#2D5A27",
            borderRadius: "12px",
            fontWeight: "600"
            },

            success: {
            style: {
            border: "1px solid #2D5A27"
            }
            },
            
            error: {
            style: {
              border: "1px solid #dc3545"
            }
            }
          }}
        />



      <Routes>

        {/*  Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/*  Protected Routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/top-recipes" 
          element={
            <ProtectedRoute>
              <TopRecipes />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/recipe-details/:id" 
          element={
            <ProtectedRoute>
              <RecipeDetails />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/add-recipe" 
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/edit-recipe/:id" 
          element={
            <ProtectedRoute>
              <EditRecipe />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/edit-profile" 
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/change-password" 
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import TopRecipes from "./pages/TopRecipes";
// import RecipeDetails from "./pages/RecipeDetails";
// import AddRecipe from "./pages/AddRecipe";
// import EditRecipe from "./pages/EditRecipe";
// import Profile from "./pages/Profile";
// import EditProfile from "./pages/EditProfile";
// import ChangePassword from "./pages/ChangePassword";
// import ProtectedRoute from "./ProtectedRoute";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/top-recipes" element={<TopRecipes />} />
//         <Route path="/recipe-details/:id" element={<RecipeDetails />} />
//         <Route path="/add-recipe" element={<AddRecipe />} />
//         <Route path="/edit-recipe" element={<EditRecipe />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/edit-profile" element={<EditProfile />} />
//         <Route path="/change-password" element={<ChangePassword />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;