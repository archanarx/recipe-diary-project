import { Link } from "react-router-dom";

function TopRecipesBar() {
  return (
    <div className="container mt-5">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          padding: "16px 18px",
          borderRadius: "18px",
          background:
            "linear-gradient(135deg, rgba(233,245,219,0.9), rgba(244,162,97,0.15))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          border: "1px solid rgba(255,255,255,0.4)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Title */}
        <h5
          className="m-0 fw-bold"
          style={{
            color: "#1f3d1a",
            letterSpacing: "0.5px",
            fontSize: "16px",
          }}
        >
          ✨ Top 5 Recipes of the Week
        </h5>

        {/* Button */}
        <Link
          to="/top-recipes"
          style={{
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f4a261, #e76f51)",
              color: "white",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              boxShadow: "0 8px 18px rgba(244,162,97,0.35)",
              transition: "all 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 22px rgba(244,162,97,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 18px rgba(244,162,97,0.35)";
            }}
          >
            View All 
          </span>
        </Link>
      </div>
    </div>
  );
}

export default TopRecipesBar;


// import { Link } from "react-router-dom";
// function TopRecipesBar() {
//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{ backgroundColor: "#E9F5DB" }}>
//         <h5 className="m-0 fw-bold" style={{ color: "#2D5A27" }}>Top 10 Recipes of the Week</h5>
//         <Link to="/top-recipes" className="btn btn-sm rounded-pill px-3 fw-bold shadow-sm" style={{ backgroundColor: "#F4A261", color: "white", border: "none" }}>
//           View All 
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default TopRecipesBar;