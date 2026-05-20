function SearchSection({ search, setSearch }) {
  return (
    <div
      className="container mt-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Search Box */}
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          position: "relative",
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            background:
              "linear-gradient(135deg, rgba(45,90,39,0.25), rgba(244,162,97,0.25))",
            borderRadius: "18px",
            filter: "blur(14px)",
            zIndex: 0,
          }}
        ></div>

        {/* Main container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "18px",
            padding: "14px 16px",
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Icon */}
          <div style={{ marginRight: "12px" }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D5A27"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.7 }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search recipes, ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "15px",
              color: "#1f3d1a",
              fontWeight: "500",
              letterSpacing: "0.3px",
            }}
          />

          {/* Clear button */}
          {search && (
            <span
              onClick={() => setSearch("")}
              style={{
                marginLeft: "10px",
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                color: "#fff",
                background: "linear-gradient(135deg, #f4a261, #e76f51)",
                padding: "6px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 6px 15px rgba(244,162,97,0.3)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              CLEAR
            </span>
          )}
        </div>
      </div>

      {/* Helper text */}
      <p
        style={{
          marginTop: "12px",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#7a8f73",
          fontWeight: "600",
        }}
      >
        Discover recipes instantly
      </p>
    </div>
  );
}

export default SearchSection;



// function SearchSection({ search, setSearch }) {
//   return (
//     <div className="container mt-5">
//       <div
//         className="input-group shadow-sm rounded-pill overflow-hidden"
//         style={{ border: "2px solid #E9F5DB" }}
//       >
//         <input
//           type="text"
//           className="form-control border-0 px-4 py-3"
//           placeholder="Search by title or ingredient..."
//           style={{ backgroundColor: "#f8f9fa" }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* Button kept ONLY for UI (no logic) */}
//         <button
//           className="btn px-4 fw-bold text-white"
//           style={{ backgroundColor: "#2D5A27" }}
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SearchSection;





// function SearchSection() {
//   return (
//     <div className="container mt-5">
//       <div className="input-group shadow-sm rounded-pill overflow-hidden" style={{ border: "2px solid #E9F5DB" }}>
//         <input
//           type="text"
//           className="form-control border-0 px-4 py-3"
//           placeholder="Search by title or ingredient..."
//           style={{ backgroundColor: "#f8f9fa" }}
//         />
//         <button className="btn px-4 fw-bold text-white" style={{ backgroundColor: "#2D5A27" }}>
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }



// export default SearchSection;