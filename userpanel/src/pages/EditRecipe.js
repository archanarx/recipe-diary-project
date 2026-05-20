import Navbar from "../components/Navbar";
import RecipeForm from "../components/RecipeForm";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import toast from "react-hot-toast";


function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  const colors = {
    primary: "#2D5A27",
    secondary: "#F4A261",
  };

  // ✅ Fetch recipe
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/recipe-edit/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      const data = res.data;

      setRecipe({
        title: data.title || "",
        ingredients: data.ingredients || "",
        steps: data.steps || "",
        time: data.time || "",
        difficulty: data.level || "Easy"
      });
    })
    .catch(err => console.log(err));
  }, [id]);

  // ✅ Update recipe
  const handleUpdateRecipe = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("time", data.time);
    formData.append("level", data.level);
    formData.append("ingredients", data.ingredients);
    formData.append("steps", data.steps);

    if (data.image) {
      formData.append("image", data.image);
    }

    axios.put(`http://127.0.0.1:8000/edit/${id}/`, formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(() => {
      toast.success("Recipe updated successfully ");
      navigate(`/recipe-details/${id}`);
    })
    .catch(err => {
      console.log(err);
      toast.error("Error updating recipe ");
    });
  };

  if (!recipe) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="app-bg">
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-xl-6">

            {/* GLASS CARD */}
            <div className="glass-card p-4 p-md-5">

              {/* HEADER */}
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: colors.primary }}>
                  📝 Edit Your Masterpiece
                </h2>
                <p className="text-muted">
                  Update your recipe just like creating a new one ✨
                </p>
              </div>

              {/* FORM */}
              <RecipeForm
                initialData={recipe}
                onSubmit={handleUpdateRecipe}
                buttonText="Save Changes"
              />

            </div>

            {/* BACK BUTTON */}
            <div className="text-center mt-4">
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-link text-decoration-none fw-bold"
                style={{ color: colors.secondary }}
              >
                ← Cancel and Go Back
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRecipe;


// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import"../App.css";

// function EditRecipe() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#d2eab3"
//   };

//   // ✅ Fetch recipe (NO formatting here)
//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/recipe-edit/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       const data = res.data;

//       setRecipe({
//         title: data.title || "",
//         ingredients: data.ingredients || "",   // 🔥 keep as-is
//         steps: data.steps || "",               // 🔥 keep as-is
//         time: data.time || "",
//         difficulty: data.level || "Easy"
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, [id]);

//   // ✅ SAME logic as AddRecipe (only PUT instead of POST)
//   const handleUpdateRecipe = (data) => {
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("time", data.time);
//     formData.append("level", data.level);
//     formData.append("ingredients", data.ingredients);
//     formData.append("steps", data.steps);

//     if (data.image) {
//       formData.append("image", data.image);
//     }

//     axios.put(`http://127.0.0.1:8000/edit/${id}/`, formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(() => {
//       alert("Recipe updated successfully ✅");
//       navigate(`/recipe-details/${id}`);
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error updating recipe ❌");
//     });
//   };

//   // ✅ Loading state
//   if (!recipe) {
//     return <h2 className="text-center mt-5">Loading...</h2>;
//   }

//   return (
//     <div className="app-bg">
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-7 col-xl-6">

//             <div className="text-center mb-5">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>
//                 📝 Edit Your Masterpiece
//               </h2>
//               <p className="text-muted">
//                 Update your recipe just like creating a new one ✨
//               </p>
//             </div>

//             <div className="glass-card p-4 p-md-5">
//               <RecipeForm
//                 initialData={recipe}   // 🔥 SAME FORM as AddRecipe
//                 onSubmit={handleUpdateRecipe}
//                 buttonText="Save Changes"
//               />
//             </div>

//             <div className="text-center mt-4">
//               <button 
//                 onClick={() => window.history.back()} 
//                 className="btn btn-link text-decoration-none fw-bold" 
//                 style={{ color: colors.secondary }}
//               >
//                 ← Cancel and Go Back
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRecipe;




// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function EditRecipe() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#d2eab3"
//   };

//   // ✅ Fetch recipe
//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/recipe/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       const data = res.data;

//       // 🔥 IMPORTANT FIX (convert for textarea)
//       const formattedIngredients = data.ingredients
//         ? data.ingredients.split(",").join("\n")
//         : "";

//       const formattedSteps = data.steps
//         ? data.steps.split(".").join("\n")
//         : "";

//       setRecipe({
//         title: data.title,
//         ingredients: formattedIngredients, // ✅ multiline
//         steps: formattedSteps,             // ✅ multiline
//         time: data.time,
//         difficulty: data.level
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, [id]);

//   // ✅ Update API (same as AddRecipe logic)
//   const handleUpdateRecipe = (data) => {
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("time", data.time);
//     formData.append("level", data.level);
//     formData.append("ingredients", data.ingredients); // already formatted by RecipeForm
//     formData.append("steps", data.steps);

//     if (data.image) {
//       formData.append("image", data.image);
//     }

//     axios.get(`http://127.0.0.1:8000/recipe-edit/${id}/`, formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(() => {
//       alert("Recipe updated successfully ✅");
//       navigate(`/recipe-details/${id}`);
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error updating recipe ❌");
//     });
//   };

//   if (!recipe) {
//     return <h2 className="text-center mt-5">Loading...</h2>;
//   }

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">

//             <div className="text-center mb-5">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>
//                 📝 Edit Your Masterpiece
//               </h2>
//               <p className="text-muted">
//                 Refining the flavors? Update your recipe details below.
//               </p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
//               <RecipeForm
//                 initialData={recipe}
//                 onSubmit={handleUpdateRecipe}
//                 buttonText="Save Changes"
//               />
//             </div>

//             <div className="text-center mt-4">
//               <button 
//                 onClick={() => window.history.back()} 
//                 className="btn btn-link text-decoration-none fw-bold" 
//                 style={{ color: colors.secondary }}
//               >
//                 ← Cancel and Go Back
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRecipe;




// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function EditRecipe() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [recipe, setRecipe] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#d2eab3"
//   };

//   // ✅ Fetch recipe
//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/recipe/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       const data = res.data;

//       setRecipe({
//         title: data.title,
//         ingredients: data.ingredients,
//         steps: data.steps,
//         time: data.time,
//         difficulty: data.level
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, [id]);

//   // ✅ Update API
//   const handleUpdateRecipe = (data) => {
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("time", data.time);
//     formData.append("level", data.level);
//     formData.append("ingredients", data.ingredients);
//     formData.append("steps", data.steps);

//     if (data.image) {
//       formData.append("image", data.image);
//     }

//     axios.put(`http://127.0.0.1:8000/edit/${id}/`, formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(() => {
//       alert("Recipe updated successfully ✅");
//       navigate(`/recipe-details/${id}`);
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error updating recipe ❌");
//     });
//   };

//   if (!recipe) {
//     return <h2 className="text-center mt-5">Loading...</h2>;
//   }

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">

//             <div className="text-center mb-5">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>
//                 📝 Edit Your Masterpiece
//               </h2>
//               <p className="text-muted">
//                 Refining the flavors? Update your recipe details below.
//               </p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
//               <RecipeForm
//                 initialData={recipe}
//                 onSubmit={handleUpdateRecipe}
//                 buttonText="Save Changes"
//               />
//             </div>

//             <div className="text-center mt-4">
//               <button 
//                 onClick={() => window.history.back()} 
//                 className="btn btn-link text-decoration-none fw-bold" 
//                 style={{ color: colors.secondary }}
//               >
//                 ← Cancel and Go Back
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRecipe;

// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";

// function EditRecipe() {
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     bg: "#d2eab3"          // Warm white
//   };

//   const existingRecipe = {
//     title: "Chicken Curry",
//     ingredients: "Chicken, Onion, Spices",
//     steps: "Cook chicken, add spices, simmer",
//     time: 40,
//     difficulty: "Medium"
//   };

//   const handleUpdateRecipe = (data) => {
//     console.log("Updated Recipe:", data);
//     // Here is where you'd typically call your API to save changes
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
            
//             {/* Header section with an Edit icon vibe */}
//             <div className="text-center mb-5">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>
//                 📝 Edit Your Masterpiece
//               </h2>
//               <p className="text-muted">Refining the flavors? Update your recipe details below.</p>
//             </div>

//             {/* The Form Container */}
//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5" style={{ backgroundColor: "#ffffff" }}>
//               <RecipeForm
//                 initialData={existingRecipe}
//                 onSubmit={handleUpdateRecipe}
//                 buttonText="Save Changes"
//               />
//             </div>
            
//             {/* Optional Back Link */}
//             <div className="text-center mt-4">
//                <button 
//                  onClick={() => window.history.back()} 
//                  className="btn btn-link text-decoration-none fw-bold" 
//                  style={{ color: colors.secondary }}
//                >
//                  ← Cancel and Go Back
//                </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditRecipe;

// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";

// function EditRecipe() {

//   const existingRecipe = {
//     title: "Chicken Curry",
//     ingredients: "Chicken, Onion, Spices",
//     steps: "Cook chicken, add spices, simmer",
//     time: 40,
//     difficulty: "Medium"
//   };

//   const handleUpdateRecipe = (data) => {
//     console.log("Updated Recipe:", data);
//   };

//   return (

//     <div>

//       <Navbar />

//       <div className="container mt-4">

//         <h2 className="mb-4 text-center">
//           Edit Recipe
//         </h2>

//         <RecipeForm
//           initialData={existingRecipe}
//           onSubmit={handleUpdateRecipe}
//           buttonText="Update Recipe"
//         />

//       </div>


//     </div>

//   );
// }

// export default EditRecipe;