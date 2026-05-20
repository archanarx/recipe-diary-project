
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const formatTime = (time) => {
    if (time >= 60) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      if (minutes === 0) return `${hours} hr`;
      return `${hours} hr ${minutes} min`;
    }
    return `${time} min`;
  };

  if (!recipe) return null;

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="recipe-card h-100">
        <div className="recipe-card__media">
          <img
            src={`http://localhost:8000${recipe.image}`}
            alt={recipe.title}
            className="recipe-card__img"
          />
          <div className="recipe-card__overlay" />
          <span className="recipe-card__badge">{recipe.level}</span>
          <span className="recipe-card__views">👁 {recipe.views}</span>
        </div>

        <div className="recipe-card__body">
          <p className="recipe-card__author-line">
            Chef  <span className="recipe-card__author-name">{recipe.author.name}</span>
          </p>

          <h5 className="recipe-card__title">{recipe.title}</h5>

          <div className="recipe-card__meta">
            <span className="recipe-card__meta-item">
              <span className="recipe-card__meta-icon">⏱</span>
              {formatTime(recipe.time)}
            </span>
          </div>

          <Link to={`/recipe-details/${recipe.id}`} className="recipe-card__btn">
            <span>View Recipe</span>
            <span className="recipe-card__btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;


// MAIN CODE



// import { Link } from "react-router-dom";

// function RecipeCard({ recipe }) {
//   // ✅ Time formatter (handles mins + hours)
//   const formatTime = (time) => {
//     if (time >= 60) {
//       const hours = Math.floor(time / 60);
//       const minutes = time % 60;

//       if (minutes === 0) return `${hours} hr`;
//       return `${hours} hr ${minutes} min`;
//     }
//     return `${time} min`;
//   };

//   // ✅ Prevent crash
//   if (!recipe) return null;

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card border-0 rounded-4 overflow-hidden h-100 transition-card glass-card">

//         {/* IMAGE */}
//         <img
//           src={`http://localhost:8000${recipe.image}`}
//           className="card-img-top"
//           alt="recipe"
//           style={{
//             height: "200px",
//             objectFit: "cover",
//             filter: "brightness(0.95) contrast(1.05)"
//           }}
//         />
//         {/* Subtle Level Badge */}
//           <div 
//             style={{
//               position: "absolute",
//               top: "12px",
//               right: "12px",
//               backgroundColor: "rgba(255, 255, 255, 0.9)",
//               padding: "4px 12px",
//               borderRadius: "20px",
//               fontSize: "0.75rem",
//               fontWeight: "700",
//               color: "#2D5A27",
//               textTransform: "uppercase"
//             }}
//           >
//             {recipe.level}
//           </div>

//         {/* BODY */}
//         <div className="card-body p-4">

//           <h5
//             className="fw-bold mb-2"
//             style={{
//               color: "#2D5A27",
//               letterSpacing: "-0.3px"
//             }}
//           >
//             {recipe.title}
//           </h5>

//           <p className="text-muted small mb-2">
//             By:{" "}
//             <span style={{ color: "#F4A261", fontWeight: "600" }}>
//               {recipe.author.name}
//             </span>
//           </p>

//           <div
//             className="d-flex gap-3 mb-3 text-muted px-1"
//             style={{ fontSize: "0.85rem" }}
//           >
//             <span>⏱ {formatTime(recipe.time)}</span>
//             <span>🏷 {recipe.level}</span>
//             <span>👁 {recipe.views}</span>
//           </div>

//           <Link
//             to={`/recipe-details/${recipe.id}`}
//             className="btn w-100 rounded-pill fw-bold text-white shadow-sm btn-glow"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;

