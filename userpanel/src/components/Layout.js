import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e9f5db 0%, #f6fbef 40%, #d2eab3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-100px",
          width: "320px",
          height: "320px",
          background: "#F4A261",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: "0.25",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-160px",
          right: "-120px",
          width: "380px",
          height: "380px",
          background: "#2D5A27",
          borderRadius: "50%",
          filter: "blur(140px)",
          opacity: "0.15",
        }}
      />

      {/* Navbar (common for all pages) */}
      <Navbar />

      {/* Page Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;