import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const colors = {
    primary: "#2D5A27",
    secondary: "#F4A261",
    accent: "#E9F5DB",
    bg: "#fffdfa"
  };

  // ✅ Time formatter
  const formatTime = (time) => {
    if (time >= 60) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;

      if (minutes === 0) return `${hours} hr`;
      return `${hours} hr ${minutes} min`;
    }
    return `${time} min`;
  };

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/recipe/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setRecipe(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [id]);

  // ✅ Loading
  if (!recipe) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  // ✅ Clean arrays (remove empty values)
  const ingredientsArray = recipe.ingredients
    ? recipe.ingredients.split(",").filter(item => item.trim() !== "")
    : [];

  const stepsArray = recipe.steps
    ? recipe.steps.split(".").filter(step => step.trim() !== "")
    : [];

  return (
    <div className="app-bg">
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            
            {/* Image */}
            <div className="mb-5 shadow-sm rounded-4 overflow-hidden" style={{ height: "450px" }}>
              <img
                src={recipe.image}
                alt="recipe"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Title & Meta */}
            <div className="text-center mb-5">
              <h1 className="fw-bold display-5" style={{ color: colors.primary }}>
                {recipe.title}
              </h1>

              <p className="text-muted fs-5">
                By{" "}
                <span className="fw-bold" style={{ color: colors.secondary }}>
                  {recipe.author}
                </span>
              </p>
              
              <div className="d-flex justify-content-center gap-4 mt-4 py-3 border-top border-bottom">
                
                <span className="fw-bold">
                  <span style={{ color: colors.secondary }}>👁</span> {recipe.views} Views
                </span>

                <span className="fw-bold">
                  <span style={{ color: colors.secondary }}>⏱</span> {formatTime(recipe.time)}
                </span>

                <span className="fw-bold">
                  <span style={{ color: colors.secondary }}>🏷</span> {recipe.level}
                </span>

              </div>
            </div>

            <div className="row">

              {/* Ingredients */}
              <div className="col-md-4 mb-4">
                <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: colors.accent }}>
                  <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>
                    Ingredients
                  </h4>
                  
                  <ul className="list-unstyled">
                    {ingredientsArray.map((item, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start">
                        <span className="me-2" style={{ color: colors.primary }}>✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Steps */}
              <div className="col-md-8">
                <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>
                  Preparation Steps
                </h4>

                <div className="ps-2">
                  {stepsArray.map((step, i) => (
                    <div key={i} className="d-flex mb-4">
                      <div className="me-3">
                        <span
                          className="badge rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                          style={{
                            width: "35px",
                            height: "35px",
                            backgroundColor: colors.primary,
                            fontSize: "1rem"
                          }}
                        >
                          {i + 1}
                        </span>
                      </div>

                      <div className="pt-1">
                        <p className="fs-5 text-dark" style={{ lineHeight: "1.6" }}>
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;






// import Navbar from "../components/Navbar";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function RecipeDetails() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#fffdfa"
//   };

//   // ✅ FETCH FROM BACKEND
//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/recipe/${id}/`, {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       setRecipe(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, [id]);

//   // ✅ Loading
//   if (!recipe) {
//     return <h2 className="text-center mt-5">Loading...</h2>;
//   }

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px", fontFamily: "'Inter', sans-serif" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-9">
            
//             {/* High-Resolution Header Image */}
//             <div className="mb-5 shadow-sm rounded-4 overflow-hidden" style={{ height: "450px" }}>
//               <img
//                 src={recipe.image}
//                 alt="recipe"
//                 className="w-100 h-100"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>

//             {/* Title & Meta Info */}
//             <div className="text-center mb-5">
//               <h1 className="fw-bold display-5" style={{ color: colors.primary }}>{recipe.title}</h1>
//               <p className="text-muted fs-5">
//                 By <span className="fw-bold" style={{ color: colors.secondary }}>
//                   {recipe.author}
//                 </span>
//               </p>
              
//               <div className="d-flex justify-content-center gap-4 mt-4 py-3 border-top border-bottom">
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>👁</span> {recipe.views} Views</span>
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>⏱</span>{recipe.time}</span>
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>🏷</span>{recipe.level}</span>
//               </div>
//             </div>

//             <div className="row">
//               {/* Ingredients Sidebar */}
//               <div className="col-md-4 mb-4">
//                 <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: colors.accent }}>
//                   <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>Ingredients</h4>
                  
//                   <ul className="list-unstyled">
//                     {recipe.ingredients.split(",").map((item, i) => (
//                       <li key={i} className="mb-3 d-flex align-items-start">
//                         <span className="me-2" style={{ color: colors.primary }}>✔</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Instructions Main Column */}
//               <div className="col-md-8">
//                 <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>Preparation Steps</h4>
//                 <div className="ps-2">
//                   {recipe.steps.split(".").map((step, i) => (
//                     <div key={i} className="d-flex mb-4">
//                       <div className="me-3">
//                         <span className="badge rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
//                               style={{ width: "35px", height: "35px", backgroundColor: colors.primary, fontSize: "1rem" }}>
//                           {i + 1}
//                         </span>
//                       </div>
//                       <div className="pt-1">
//                         <p className="fs-5 text-dark" style={{ lineHeight: "1.6" }}>{step}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetails;






// import Navbar from "../components/Navbar";
// import { useParams } from "react-router-dom";
// // import recipes from "../data/recipes";

// function RecipeDetails() {
//   const { id } = useParams();

//   const recipe = recipes.find(r => r.id === parseInt(id));

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//     bg: "#fffdfa"
//   };

//   if (!recipe) {
//     return <h2 className="text-center mt-5">Recipe not found</h2>;
//   }

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px", fontFamily: "'Inter', sans-serif" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-9">
            
//             {/* High-Resolution Header Image */}
//             <div className="mb-5 shadow-sm rounded-4 overflow-hidden" style={{ height: "450px" }}>
//               <img
//                 src={recipe.image}
//                 alt="recipe"
//                 className="w-100 h-100"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>

//             {/* Title & Meta Info */}
//             <div className="text-center mb-5">
//               <h1 className="fw-bold display-5" style={{ color: colors.primary }}>{recipe.title}</h1>
//               <p className="text-muted fs-5">By <span className="fw-bold" style={{ color: colors.secondary }}>{recipe.author}</span></p>
              
//               <div className="d-flex justify-content-center gap-4 mt-4 py-3 border-top border-bottom">
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>👁</span> {recipe.views} Views</span>
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>⏱</span>{recipe.time}</span>
//                 <span className="fw-bold"><span style={{ color: colors.secondary }}>🏷</span>{recipe.level}</span>
//               </div>
//             </div>

//             <div className="row">
//               {/* Ingredients Sidebar */}
//               <div className="col-md-4 mb-4">
//                 <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: colors.accent }}>
//                   <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>Ingredients</h4>
                  
//                   <ul className="list-unstyled">
//                     {recipe.ingredients.map((item, i) => (
//                       <li key={i} className="mb-3 d-flex align-items-start">
//                         <span className="me-2" style={{ color: colors.primary }}>✔</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Instructions Main Column */}
//               <div className="col-md-8">
//                 <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>Preparation Steps</h4>
//                 <div className="ps-2">
//                     {recipe.steps.map((step, i) => (
//                     <div key={i} className="d-flex mb-4">
//                       <div className="me-3">
//                         <span className="badge rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
//                               style={{ width: "35px", height: "35px", backgroundColor: colors.primary, fontSize: "1rem" }}>
//                           {i + 1}
//                         </span>
//                       </div>
//                       <div className="pt-1">
//                         <p className="fs-5 text-dark" style={{ lineHeight: "1.6" }}>{step}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetails;














// import Navbar from "../components/Navbar";

// function RecipeDetails() {

//   return (

//     <div>

//       <Navbar />

//       <div className="container mt-4">

//         {/* Recipe Image */}
//         <div className="text-center mb-4">
//           <img
//             src="https://source.unsplash.com/900x400/?food"
//             alt="recipe"
//             className="img-fluid rounded"
//           />
//         </div>

//         {/* Recipe Title */}
//         <h2 className="mb-2">
//           Recipe Title
//         </h2>

//         <p className="text-muted">
//           By: Username
//         </p>

//         {/* Recipe Info */}
//         <div className="mb-4">

//           <span className="me-4">
//             👁 120 Views
//           </span>

//           <span className="me-4">
//             ⏱ 30 mins
//           </span>

//           <span>
//             🏷 Easy
//           </span>

//         </div>

//         {/* Ingredients */}
//         <div className="mb-4">

//           <h4>Ingredients</h4>

//           <ul>

//             <li>Ingredient 1</li>
//             <li>Ingredient 2</li>
//             <li>Ingredient 3</li>

//           </ul>

//         </div>

//         {/* Steps */}
//         <div className="mb-4">

//           <h4>Steps</h4>

//           <ol>

//             <li>Step one</li>
//             <li>Step two</li>
//             <li>Step three</li>

//           </ol>

//         </div>

        

//       </div>

      

//     </div>

//   );

// }

// export default RecipeDetails;