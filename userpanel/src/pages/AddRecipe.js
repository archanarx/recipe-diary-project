import Navbar from "../components/Navbar";
import RecipeForm from "../components/RecipeForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import toast from "react-hot-toast";

function AddRecipe() {
  const navigate = useNavigate();

  const colors = {
    primary: "#2D5A27",
    secondary: "#F4A261",
  };

  const handleAddRecipe = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("time", data.time);
    formData.append("level", data.level);
    formData.append("ingredients", data.ingredients);
    formData.append("steps", data.steps);
    formData.append("image", data.image);

    axios.post("http://127.0.0.1:8000/create/", formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      console.log(res.data);
      toast.success("Recipe added successfully 🍳");
      // alert("Recipe added successfully ✅");
      navigate("/home");
    })
    .catch(err => {
      console.log(err);
      toast.error("Something went wrong");
      // alert("Error adding recipe ❌");
    });
  };

  return (
    <div className="app-bg">
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-xl-6">
          {/* <div className="col-lg-8"> */}

            {/* GLASS CARD START */}
            <div className="glass-card p-4 p-md-5">

              {/* HEADER INSIDE GLASS */}
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: colors.primary }}>
                  👨‍🍳 Share Your Culinary Magic
                </h2>
                <p className="text-muted">
                  Fill in the details below to add a new masterpiece.
                </p>
              </div>

              {/* FORM */}
              <RecipeForm
                onSubmit={handleAddRecipe}
                buttonText="Publish Recipe"
              />

            </div>
            {/* GLASS CARD END */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;



// backup

// import Navbar from "../components/Navbar";
// import RecipeForm from "../components/RecipeForm";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddRecipe() {
//   const navigate = useNavigate();

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     bg: "#d2eab3"
//   };

//   const handleAddRecipe = (data) => {
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("time", data.time);
//     formData.append("level", data.level);
//     formData.append("ingredients", data.ingredients);
//     formData.append("steps", data.steps);
//     formData.append("image", data.image); // file

//     axios.post("http://127.0.0.1:8000/create/", formData, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(res => {
//       console.log(res.data);
//       alert("Recipe added successfully ✅");
//       navigate("/home"); // ✅ REDIRECT
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Error adding recipe ❌");
//     });
//   };

//   return (
//     <div className="app-bg">
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="text-center mb-5">
//               <h2 className="fw-bold" style={{ color: colors.primary }}>
//                 👨‍🍳 Share Your Culinary Magic
//               </h2>
//               <p className="text-muted">Fill in the details below to add a new masterpiece.</p>
//             </div>

//             <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
//               <RecipeForm onSubmit={handleAddRecipe} buttonText="Publish Recipe" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddRecipe;








