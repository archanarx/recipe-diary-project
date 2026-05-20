


import { Link } from "react-router-dom";

function Landing() {
  const recipes = [
    { title: "Creamy Herb Pasta", tag: "Italian", desc: "Rich and creamy alfredo sauce tossed with perfectly cooked pasta.", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80" },
    { title: "Classic Beef Burger", tag: "American", desc: "Juicy grilled beef patty with fresh lettuce, cheese, and toasted buns.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { 
      title: "Chocolate Lava Cake", 
      tag: "Dessert", 
      desc: "Warm chocolate cake with a gooey molten center, served fresh.", 
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80" 
    }
  
  ];

  // Professional Color Palette
  const colors = {
    primary: "#2D5A27", // Forest Green
    secondary: "#ef8127", // Warm Amber
    accent: "#E9F5DB", // Soft Sage
    text: "#1A1C19",
    light: "#FFFFFF"
  };

  return (
    <div style={{ 
      backgroundColor: "#fffdfa", // Warm white paper feel
      color: colors.text, 
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh"
    }}>
      
      {/* Navbar with subtle glassmorphism */}
      <nav className="navbar navbar-expand-lg sticky-top py-3 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)" }}>
        <div className="container">
          <Link to="/" className="navbar-brand fw-bolder" style={{ color: colors.primary, fontSize: "1.5rem" }}>
            🥗 Recipe<span style={{ color: colors.secondary }}>Diary</span>
          </Link>
          <div className="d-flex align-items-center">
            <Link to="/login" className="btn btn-link text-decoration-none me-3 fw-bold" style={{ color: colors.primary }}>Login</Link>
            <Link to="/signup" className="btn px-4 rounded-pill fw-bold text-white shadow-sm" style={{ backgroundColor: colors.primary }}>Join for Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with a splash of color */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, #fff 100%)` }}>
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <span className="badge rounded-pill mb-3 px-3 py-2 fw-bold" style={{ backgroundColor: colors.secondary, color: '#fff' }}>
                NEW: SEASONAL SPECIALS OUT NOW
              </span>
              <h1 className="display-2 fw-bolder mb-4" style={{ color: colors.primary, letterSpacing: "-2px", lineHeight: "1.1" }}>
                Cook like a pro, <br/> share like a friend.
              </h1>
              <p className="lead mb-5 px-lg-5" style={{ color: "#4A4A4A", fontWeight: "450" }}>
                The world’s most organized digital cookbook. Join 50,000+ home chefs sharing their culinary secrets daily.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/signup" className="btn btn-lg px-5 py-3 rounded-pill shadow fw-bold text-white border-0 transition-btn" style={{ backgroundColor: colors.primary }}>Get Cooking</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container py-5 mt-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
          <div>
            <h6 className="text-uppercase fw-bold mb-2" style={{ color: colors.secondary, letterSpacing: "2px" }}>Handpicked</h6>
            <h2 className="display-6 fw-bold m-0" style={{ color: colors.primary }}>Editor's Choice</h2>
          </div>
          
        </div>

        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 bg-transparent recipe-card">
                <div className="position-relative overflow-hidden rounded-4 mb-3 shadow-sm">
                  <div className="position-absolute top-0 start-0 m-3 z-3">
                    <span className="badge bg-white text-dark rounded-pill px-3 py-2 fw-bold shadow-sm">{recipe.tag}</span>
                  </div>
                  <img
                    src={recipe.img}
                    className="card-img-top img-hover"
                    alt={recipe.title}
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-0">
                  <h4 className="fw-bold mb-2" style={{ color: colors.primary }}>{recipe.title}</h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>{recipe.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colorful Footer */}
      <footer className="py-5 mt-5" style={{ backgroundColor: colors.primary }}>
        <div className="container text-center">
          <h3 className="text-white fw-bold mb-4">Recipe Diary</h3>
          <p className="text-white-50 small mb-0">
            &copy; 2026 RECIPE DIARY. MADE WITH ❤️ FOR FOOD LOVERS.
          </p>
        </div>
      </footer>

      <style>{`
        .img-hover { transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .recipe-card:hover .img-hover { transform: scale(1.1); }
        .transition-btn:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 12px 20px rgba(45, 90, 39, 0.3) !important;
            filter: brightness(1.1);
        }
        .navbar-brand:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
}

export default Landing;



