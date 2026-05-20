import { useEffect, useState } from "react";
import axios from "axios";

function TopRecipeTable() {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/top-recipes/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setTopRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getRankStyle = (index) => {
    if (index === 0) return { bg: "#F4A261", shadow: "0 0 15px rgba(244,162,97,0.6)" };
    if (index === 1) return { bg: "#C0C0C0", shadow: "0 0 15px rgba(192,192,192,0.6)" };
    if (index === 2) return { bg: "#CD7F32", shadow: "0 0 15px rgba(205,127,50,0.6)" };
    return { bg: "#E9F5DB", shadow: "none" };
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        padding: "10px",
        border: "1px solid rgba(255,255,255,0.4)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
      }}
    >
      <table className="table align-middle mb-0">

        {/* HEADER */}
        <thead>
          <tr
            style={{
              color: "#2D5A27",
              fontSize: "14px",
              letterSpacing: "0.5px",
              borderBottom: "1px solid #e6f0df",
            }}
          >
            <th className="text-center">Rank</th>
            <th>Recipe</th>
            <th>Creator</th>
            <th className="text-center">Views</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {topRecipes.map((recipe, index) => {
            const rank = getRankStyle(index);

            return (
              <tr
                key={recipe.id}
                style={{
                  transition: "all 0.25s ease",
                  borderBottom: "1px solid #f1f5ee",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >

                {/* RANK */}
                <td className="text-center">
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      margin: "auto",
                      borderRadius: "50%",
                      background: rank.bg,
                      color: "white",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: rank.shadow,
                      fontSize: "15px",
                    }}
                  >
                    {index + 1}
                  </div>
                </td>

                {/* RECIPE NAME */}
                <td
                  style={{
                    fontWeight: "600",
                    color: "#2D5A27",
                    fontSize: "15px",
                  }}
                >
                  {recipe.title}
                </td>

                {/* AUTHOR */}
                <td style={{ color: "#6c7f66", fontSize: "14px" }}>
                  {recipe.author}
                </td>

                {/* VIEWS */}
                <td className="text-center">
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#e9f5db",
                      fontWeight: "600",
                      color: "#2D5A27",
                      fontSize: "13px",
                    }}
                  >
                    {recipe.views}
                  </span>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TopRecipeTable;
// import { useEffect, useState } from "react";
// import axios from "axios";

// function TopRecipeTable() {
//   const [topRecipes, setTopRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/top-recipes/", {
//         headers: {
//           Authorization: `Token ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((res) => setTopRecipes(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const getMedal = (index) => {
//     if (index === 0) return "#F4A261"; // gold
//     if (index === 1) return "#C0C0C0"; // silver
//     if (index === 2) return "#CD7F32"; // bronze
//     return "#e9f5db";
//   };

//   return (
//     <div
//       style={{
//         background: "rgba(255,255,255,0.75)",
//         backdropFilter: "blur(15px)",
//         borderRadius: "18px",
//         overflow: "hidden",
//         border: "1px solid rgba(255,255,255,0.3)",
//       }}
//     >
//       <div className="table-responsive">
//         <table className="table align-middle mb-0">
          
//           {/* HEADER */}
//           <thead
//             style={{
//               background: "linear-gradient(90deg, #e9f5db, #f7fbf3)",
//             }}
//           >
//             <tr>
//               <th className="text-center">Rank</th>
//               <th>Recipe</th>
//               <th>Created By</th>
//               <th className="text-center">Views</th>
//             </tr>
//           </thead>

//           {/* BODY */}
//           <tbody>
//             {topRecipes.map((recipe, index) => (
//               <tr
//                 key={recipe.id}
//                 style={{
//                   transition: "all 0.25s ease",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.background = "#f7fbf3")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.background = "transparent")
//                 }
//               >
//                 {/* RANK */}
//                 <td className="text-center fw-bold">
//                   {index < 3 ? (
//                     <span
//                       style={{
//                         display: "inline-flex",
//                         width: "36px",
//                         height: "36px",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         borderRadius: "50%",
//                         background: getMedal(index),
//                         color: "white",
//                         fontWeight: "bold",
//                         boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//                         transform: "scale(1)",
//                         transition: "0.2s",
//                       }}
//                     >
//                       {index + 1}
//                     </span>
//                   ) : (
//                     <span style={{ color: "#6c7f66" }}>{index + 1}</span>
//                   )}
//                 </td>

//                 {/* TITLE */}
//                 <td
//                   style={{
//                     fontWeight: "600",
//                     color: "#2D5A27",
//                   }}
//                 >
//                   {recipe.title}
//                 </td>

//                 {/* AUTHOR */}
//                 <td style={{ color: "#6c7f66" }}>{recipe.author}</td>

//                 {/* VIEWS */}
//                 <td className="text-center fw-bold" style={{ color: "#2D5A27" }}>
//                   {recipe.views}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TopRecipeTable;


// import { useEffect, useState } from "react";
// import axios from "axios";

// function TopRecipeTable() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB",
//   };

//   const [topRecipes, setTopRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/top-recipes/", {
//         headers: {
//           Authorization: `Token ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((res) => {
//         setTopRecipes(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//       <div className="table-responsive">
//         <table className="table table-hover mb-0 align-middle">
//           <thead style={{ backgroundColor: colors.accent }}>
//             <tr>
//               <th className="text-center">Rank</th>
//               <th>Recipe Name</th>
//               <th>Created By</th>
//               <th className="text-center">Views</th>
//             </tr>
//           </thead>

//           <tbody>
//             {topRecipes.map((recipe, index) => (
//               <tr key={recipe.id}>
//                 <td className="text-center fw-bold">{index + 1}</td>
//                 <td style={{ color: colors.primary, fontWeight: "bold" }}>
//                   {recipe.title}
//                 </td>
//                 <td>{recipe.author}</td>
//                 <td className="text-center">{recipe.views}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TopRecipeTable;


// function TopRecipeTable() {
//   const colors = {
//     primary: "#2D5A27",    // Forest Green
//     secondary: "#F4A261",  // Warm Amber
//     accent: "#E9F5DB",     // Soft Sage
//   };

//   const topTen = [
//     { title: "Garden Fresh Pesto", author: "Chef Mario", views: "12.5k" },
//     { title: "Honey Glazed Salmon", author: "Sarah J.", views: "10.2k" },
//     { title: "Rustic Tomato Soup", author: "Chef Julian", views: "9.8k" },
//     { title: "Avocado Toast Max", author: "Emma Cook", views: "8.1k" },
//     { title: "Spicy Ramen Bowl", author: "Lee Wong", views: "7.4k" },
//     { title: "Berry Blast Smoothie", author: "Anna S.", views: "6.9k" },
//     { title: "Classic Beef Burger", author: "Mike T.", views: "5.5k" },
//     { title: "Lemon Garlic Shrimp", author: "Chef Mario", views: "4.2k" },
//     { title: "Chocolate Lava Cake", author: "Bella B.", views: "3.9k" },
//     { title: "Quinoa Salad", author: "FitFoodie", views: "2.1k" }
//   ];

//   return (
//     <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//       <div className="table-responsive">
//         <table className="table table-hover mb-0 align-middle">
//           <thead style={{ backgroundColor: colors.accent }}>
//             <tr>
//               <th className="ps-4 py-3 border-0 text-center" style={{ color: colors.primary, width: "80px" }}>Rank</th>
//               <th className="py-3 border-0" style={{ color: colors.primary }}>Recipe Name</th>
//               <th className="py-3 border-0" style={{ color: colors.primary }}>Created By</th>
//               <th className="py-3 border-0 text-center" style={{ color: colors.primary }}>Views</th>
//               <th className="pe-4 py-3 border-0 text-end" style={{ color: colors.primary }}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topTen.map((recipe, index) => (
//               <tr key={index} style={{ borderBottom: "1px solid #f8f9fa" }}>
//                 <td className="ps-4 py-4 text-center">
//                   {/* Top 3 get a colored circle, 4-10 get a plain bold number */}
//                   {index < 3 ? (
//                     <div className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold shadow-sm" 
//                          style={{ 
//                            width: "35px", 
//                            height: "35px", 
//                            backgroundColor: index === 0 ? colors.secondary : colors.primary, 
//                            color: "white" 
//                          }}>
//                       {index + 1}
//                     </div>
//                   ) : (
//                     <span className="fw-bold fs-5" style={{ color: "#adb5bd" }}>
//                       {index + 1}
//                     </span>
//                   )}
//                 </td>
//                 <td className="py-3">
//                   <div className="fw-bold fs-6" style={{ color: colors.primary }}>{recipe.title}</div>
//                 </td>
//                 <td className="py-3 text-muted">{recipe.author}</td>
//                 <td className="py-3 text-center fw-bold text-dark">{recipe.views}</td>
//                 <td className="pe-4 py-3 text-end">
//                   <button className="btn btn-sm rounded-pill px-3 fw-bold shadow-sm transition-btn" 
//                           style={{ border: `2px solid ${colors.accent}`, color: colors.primary }}>
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <style>{`
//         .transition-btn:hover {
//           background-color: ${colors.primary} !important;
//           color: white !important;
//           border-color: ${colors.primary} !important;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default TopRecipeTable;











// function TopRecipeTable() {
//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     accent: "#E9F5DB"
//   };

//   const topTen = [
//     { title: "Garden Fresh Pesto", author: "Chef Mario", views: "12.5k" },
//     { title: "Honey Glazed Salmon", author: "Sarah J.", views: "10.2k" },
//     { title: "Rustic Tomato Soup", author: "Chef Julian", views: "9.8k" },
//     { title: "Avocado Toast Max", author: "Emma Cook", views: "8.1k" },
//     { title: "Spicy Ramen Bowl", author: "Lee Wong", views: "7.4k" },
//     { title: "Berry Blast Smoothie", author: "Anna S.", views: "6.9k" },
//     { title: "Classic Beef Burger", author: "Mike T.", views: "5.5k" },
//     { title: "Lemon Garlic Shrimp", author: "Chef Mario", views: "4.2k" },
//     { title: "Chocolate Lava Cake", author: "Bella B.", views: "3.9k" },
//     { title: "Quinoa Salad", author: "FitFoodie", views: "2.1k" }
//   ];

//   return (
//     <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
//       <div className="table-responsive">
//         <table className="table table-hover mb-0 align-middle">
//           <thead style={{ backgroundColor: colors.accent }}>
//             <tr>
//               <th className="ps-4 py-3 border-0" style={{ color: colors.primary }}>Rank</th>
//               <th className="py-3 border-0" style={{ color: colors.primary }}>Recipe Name</th>
//               <th className="py-3 border-0" style={{ color: colors.primary }}>Created By</th>
//               <th className="py-3 border-0 text-center" style={{ color: colors.primary }}>Views</th>
//               <th className="pe-4 py-3 border-0 text-end">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {topTen.map((recipe, index) => (
//               <tr key={index}>
//                 <td className="ps-4 py-3 fw-bold">
//                   {index < 3 ? (
//                     <span className="rounded-circle d-inline-flex align-items-center justify-content-center" 
//                           style={{ width: "30px", height: "30px", backgroundColor: index === 0 ? colors.secondary : colors.accent, color: index === 0 ? "white" : colors.primary }}>
//                       {index + 1}
//                     </span>
//                   ) : (
//                     <span className="ps-2 text-muted">#{index + 1}</span>
//                   )}
//                 </td>
//                 <td className="py-3 fw-bold" style={{ color: colors.primary }}>{recipe.title}</td>
//                 <td className="py-3 text-muted">{recipe.author}</td>
//                 <td className="py-3 text-center fw-bold">{recipe.views}</td>
//                 <td className="pe-4 py-3 text-end">
//                   <button className="btn btn-sm rounded-pill px-3 fw-bold shadow-sm" 
//                           style={{ border: `2px solid ${colors.accent}`, color: colors.primary }}>
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TopRecipeTable;



// function TopRecipeTable() {

//   const recipes = [
//     { rank: 1, title: "Pasta", creator: "Anna", views: 500 },
//     { rank: 2, title: "Cake", creator: "Tom", views: 480 },
//     { rank: 3, title: "Soup", creator: "Mia", views: 460 }
//   ];

//   return (

//     <div className="container mt-4">

//       <h4 className="mb-4">
//         ⭐ Top 10 Recipes of the Week
//       </h4>

//       <table className="table table-bordered">

//         <thead className="table-dark">
//           <tr>
//             <th>Rank</th>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Creator</th>
//             <th>Views</th>
//             <th>View Details</th>
//           </tr>
//         </thead>

//         <tbody>

//           {recipes.map((recipe, index) => (

//             <tr key={index}>

//               <td>{recipe.rank}</td>

//               <td>
//                 <img
//                   src="https://source.unsplash.com/100x80/?food"
//                   alt="recipe"
//                 />
//               </td>

//               <td>{recipe.title}</td>

//               <td>{recipe.creator}</td>

//               <td>{recipe.views}</td>

//               <td>
//                 <button className="btn btn-dark btn-sm">
//                   View
//                 </button>
//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>

//   );

// }

// export default TopRecipeTable;