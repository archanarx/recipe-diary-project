function Pagination({ currentPage, setCurrentPage, totalRecipes, recipesPerPage }) {
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container text-center mt-5 mb-5">

    
    <button
        onClick={goPrev}
        disabled={currentPage === 1}
        className="btn rounded-pill px-4 me-2 fw-bold shadow-sm border"
        style={{
          backgroundColor: "white",
          color: "#2D5A27",
          opacity: currentPage === 1 ? 0.5 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer"
        }}
      >
        Previous
      </button>



      {/* Page 1 */}
      <button
        onClick={() => goToPage(1)}
        className="btn rounded-circle me-2 p-0 shadow-sm"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: currentPage === 1 ? "#2D5A27" : "white",
          color: currentPage === 1 ? "white" : "black"
        }}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        onClick={() => goToPage(2)}
        className="btn rounded-circle me-2 p-0 shadow-sm border"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: currentPage === 2 ? "#2D5A27" : "white",
          color: currentPage === 2 ? "white" : "black"
        }}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        onClick={() => goToPage(3)}
        className="btn rounded-circle me-2 p-0 shadow-sm border"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: currentPage === 3 ? "#2D5A27" : "white",
          color: currentPage === 3 ? "white" : "black"
        }}
      >
        3
      </button>

      {/* Previous Button */}
      {/* <button
        onClick={goPrev}
        disabled={currentPage === 1}
        className="btn rounded-pill px-4 me-2 fw-bold shadow-sm border"
        style={{
          backgroundColor: "white",
          color: "#2D5A27",
          opacity: currentPage === 1 ? 0.5 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer"
        }}
      >
        Previous
      </button> */}

      {/* Next Button */}
      <button
        onClick={goNext}
        disabled={currentPage === totalPages}
        className="btn rounded-pill px-4 ms-2 fw-bold shadow-sm border"
        style={{
          backgroundColor: "white",
          color: "#2D5A27",
          opacity: currentPage === totalPages ? 0.5 : 1,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer"
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

// function Pagination() {
//   return (
//     <div className="container text-center mt-5 mb-5">
//       <button className="btn rounded-circle me-2 p-0 shadow-sm" style={{ width: "40px", height: "40px", backgroundColor: "#2D5A27", color: "white" }}>1</button>
//       <button className="btn rounded-circle me-2 p-0 shadow-sm border" style={{ width: "40px", height: "40px", backgroundColor: "white" }}>2</button>
//       <button className="btn rounded-circle me-2 p-0 shadow-sm border" style={{ width: "40px", height: "40px", backgroundColor: "white" }}>3</button>
//       <button className="btn rounded-pill px-4 ms-2 fw-bold shadow-sm border" style={{ backgroundColor: "white", color: "#2D5A27" }}>Next</button>
//     </div>
//   );
// }



// export default Pagination;