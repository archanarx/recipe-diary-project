import Navbar from "../components/Navbar";
import TopRecipeTable from "../components/TopRecipeTable";

function TopRecipes() {
  return (
    // <div style={{ minHeight: "100vh", background: "#f6f8f5" }}>
    <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #e9f5db 0%, #f6fbef 40%, #d2eab3 100%)",
      position: "relative",
      overflow: "hidden",
    }}
    >
      {/* Background blob 1 */}
<div
  style={{
    position: "absolute",
    top: "-120px",
    left: "-100px",
    width: "300px",
    height: "300px",
    background: "#F4A261",
    borderRadius: "50%",
    filter: "blur(120px)",
    opacity: "0.25",
  }}
/>

{/* Background blob 2 */}
<div
  style={{
    position: "absolute",
    bottom: "-150px",
    right: "-120px",
    width: "350px",
    height: "350px",
    background: "#2D5A27",
    borderRadius: "50%",
    filter: "blur(140px)",
    opacity: "0.15",
  }}
/>
      <Navbar />

      <div className="container mt-5">

        {/* SIMPLE HEADER */}
        <div className="mb-4">
          <h2
            style={{
              fontWeight: "700",
              color: "#2D5A27",
              fontSize: "30px",
              marginBottom: "5px",
            }}
          >
            Top 5 Recipes
          </h2>

          <p style={{ color: "#6b7d62", fontSize: "14px", margin: 0 }}>
            Community’s most loved creations
          </p>
        </div>

        {/* TABLE */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e8eee3",
            overflow: "hidden",
          }}
        >
          <TopRecipeTable />
        </div>

      </div>
    </div>
  );
}

export default TopRecipes;

// import Navbar from "../components/Navbar";
// import TopRecipeTable from "../components/TopRecipeTable";

// function TopRecipes() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         paddingBottom: "60px",
//         background:
//           "radial-gradient(circle at top, #e9f5db 0%, #d2eab3 45%, #f6fbef 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Navbar />

//       {/* Glow effect */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-120px",
//           left: "-100px",
//           width: "320px",
//           height: "320px",
//           background: "#F4A261",
//           borderRadius: "50%",
//           filter: "blur(130px)",
//           opacity: "0.25",
//         }}
//       />

//       <div className="container mt-5 position-relative">

//         {/* HEADER */}
//         <div
//           className="text-center p-5 mb-5"
//           style={{
//             borderRadius: "24px",
//             background: "rgba(255,255,255,0.6)",
//             backdropFilter: "blur(20px)",
//             border: "1px solid rgba(255,255,255,0.4)",
//             boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-block",
//               padding: "6px 14px",
//               borderRadius: "50px",
//               background: "#E9F5DB",
//               fontWeight: "600",
//               fontSize: "13px",
//               color: "#2D5A27",
//             }}
//           >
//             🔥 Weekly Rankings
//           </div>

//           <h1
//             style={{
//               marginTop: "15px",
//               fontWeight: "800",
//               fontSize: "40px",
//               color: "#2D5A27",
//             }}
//           >
//             Top 5 Recipes
//           </h1>

//           <p style={{ color: "#6c7f66", maxWidth: "500px", margin: "auto" }}>
//             Discover the most loved and trending recipes in your community 🍽️
//           </p>
//         </div>

//         {/* TABLE */}
//         <div className="mx-auto" style={{ maxWidth: "1000px" }}>
//           <TopRecipeTable />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopRecipes;


// import Navbar from "../components/Navbar";
// import TopRecipeTable from "../components/TopRecipeTable";

// function TopRecipes() {
//   const colors = {
//     primary: "#2D5A27",
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         paddingBottom: "60px",
//         background:
//           "radial-gradient(circle at top, #e9f5db 0%, #d2eab3 40%, #f6fbef 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Navbar />

//       {/* floating background glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-100px",
//           left: "-80px",
//           width: "300px",
//           height: "300px",
//           background: "#F4A261",
//           borderRadius: "50%",
//           filter: "blur(120px)",
//           opacity: "0.25",
//         }}
//       />

//       <div className="container mt-5 position-relative">

//         {/* HERO HEADER CARD */}
//         <div
//           className="text-center p-5 mb-5"
//           style={{
//             borderRadius: "25px",
//             background: "rgba(255,255,255,0.65)",
//             backdropFilter: "blur(18px)",
//             boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
//             border: "1px solid rgba(255,255,255,0.4)",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-block",
//               padding: "6px 14px",
//               borderRadius: "50px",
//               background: "#E9F5DB",
//               color: "#2D5A27",
//               fontWeight: "600",
//               fontSize: "13px",
//               marginBottom: "15px",
//             }}
//           >
//             🔥 Weekly Recipe Rankings
//           </div>

//           <h1
//             style={{
//               fontSize: "40px",
//               fontWeight: "800",
//               color: "#2D5A27",
//               marginBottom: "10px",
//               letterSpacing: "-1px",
//             }}
//           >
//             Top 5 Recipes
//           </h1>

//           <p
//             style={{
//               color: "#6c757d",
//               fontSize: "15px",
//               maxWidth: "500px",
//               margin: "0 auto",
//             }}
//           >
//             Discover the most loved, most viewed, and trending recipes from our community this week 🍽️
//           </p>
//         </div>

//         {/* TABLE CARD */}
//         <div
//           className="mx-auto"
//           style={{
//             maxWidth: "1000px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
//             background: "white",
//           }}
//         >
//           <TopRecipeTable />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopRecipes;


// import Navbar from "../components/Navbar";
// import TopRecipeTable from "../components/TopRecipeTable";

// function TopRecipes() {
//   const colors = {
//     primary: "#2D5A27",
//     bg: "#d2eab3"
//   };

//   return (
//     <div style={{ backgroundColor: colors.bg, minHeight: "100vh", paddingBottom: "50px" }}>
//       <Navbar />

//       <div className="container mt-5">
//         <div className="text-center mb-5">
//           <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: "#E9F5DB", color: "#2D5A27", fontWeight: "bold" }}>
//             Weekly Rankings
//           </span>
//           <h2 className="display-5 fw-bold" style={{ color: colors.primary }}>
//              Top 5 Recipes
//           </h2>
//           <p className="text-muted">The most viewed and loved recipes this week.</p>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <TopRecipeTable />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopRecipes;


// import Navbar from "../components/Navbar";
// import TopRecipeTable from "../components/TopRecipeTable";


// function TopRecipes() {

//   return (

//     <div>

//       <Navbar />

//       <TopRecipeTable />

      

//     </div>

//   );

// }

// export default TopRecipes;