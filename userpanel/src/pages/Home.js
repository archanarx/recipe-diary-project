import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";
import TopRecipesBar from "../components/TopRecipesBar";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";



function Home() {
  const [recipes, setRecipes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- GET ALL RECIPES ----------------
  const fetchAllRecipes = () => {
    setLoading(true);

    axios.get("http://127.0.0.1:8000/home/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setRecipes(res.data);
      setCurrentPage(1);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  };

  // ---------------- SEARCH API ----------------
  const fetchSearch = (query) => {
    setLoading(true);

    axios.get("http://127.0.0.1:8000/search/", {
      params: { q: query },
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setRecipes(res.data);
      setCurrentPage(1);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  };

  // ---------------- INITIAL LOAD ----------------
  useEffect(() => {
    fetchAllRecipes();
  }, []);

  // ---------------- LIVE SEARCH (NO BUTTON) ----------------
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        fetchAllRecipes();
      } else {
        fetchSearch(search);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ---------------- PAGINATION ----------------
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="app-bg">
      <Navbar />

      {/* UI SAME */}
      <SearchSection search={search} setSearch={setSearch} />

      <TopRecipesBar />

      <div className="container mt-5">
        <h5 className="fw-bold mb-4">🍲 All Recipes</h5>

        {/* ---------------- LOADING SPINNER ---------------- */}
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-success" role="status"></div>
            <p className="mt-2 fw-bold text-muted">Loading recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          /* ---------------- NO RESULTS ---------------- */
          <div className="text-center mt-5 fw-bold text-muted">
            😕 No results found
          </div>
        ) : (
          /* ---------------- RECIPES ---------------- */
          <div className="row">
            {currentRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalRecipes={recipes.length}
        recipesPerPage={recipesPerPage}
      />
    </div>
  );
}

export default Home;





// import Navbar from "../components/Navbar";
// import SearchSection from "../components/SearchSection";
// import TopRecipesBar from "../components/TopRecipesBar";
// import RecipeCard from "../components/RecipeCard";
// import Pagination from "../components/Pagination";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Home() {
//   const [recipes, setRecipes] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const recipesPerPage = 6;

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/home/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => setRecipes(res.data))
//     .catch(err => console.log(err));
//   }, []);

//   const indexOfLastRecipe = currentPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//   const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

//   return (
//     <div style={{ backgroundColor: "#F8FAF5", minHeight: "100vh" }}>
//       <Navbar />
//       <SearchSection />
//       <TopRecipesBar />

//       <div className="container mt-5">
//         <h5 className="fw-bold mb-4">🍲 All Recipes</h5>

//         <div className="row">
//           {currentRecipes.map(recipe => (
//             <RecipeCard key={recipe.id} recipe={recipe} />
//           ))}
//         </div>
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         totalRecipes={recipes.length}
//         recipesPerPage={recipesPerPage}
//       />
//     </div>
//   );
// }

// export default Home;



// import Navbar from "../components/Navbar";
// import SearchSection from "../components/SearchSection";
// import TopRecipesBar from "../components/TopRecipesBar";
// import RecipeCard from "../components/RecipeCard";
// import Pagination from "../components/Pagination";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Home() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/home/", {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => {
//       console.log(res.data);
//       setRecipes(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <div style={{ backgroundColor: "#F8FAF5", minHeight: "100vh" }}>
//       <Navbar />
//       <SearchSection />
//       <TopRecipesBar />

//       <div className="container mt-5">
//         <h5 className="fw-bold mb-4">🍲 All Recipes</h5>

//         <div className="row">
//           {recipes.map(recipe => (
//             <RecipeCard key={recipe.id} recipe={recipe} />
//           ))}
//         </div>
//       </div>

//       <Pagination />
//     </div>
//   );
// }

// export default Home;








// import Navbar from "../components/Navbar";
// import SearchSection from "../components/SearchSection";
// import TopRecipesBar from "../components/TopRecipesBar";
// import RecipeCard from "../components/RecipeCard";
// import Pagination from "../components/Pagination";
// import recipes from "../data/recipes";


// function Home() {
//   return (
//     <div style={{ backgroundColor: "#F8FAF5", minHeight: "100vh" }}>
//       <Navbar />
//       <SearchSection />
//       <TopRecipesBar />
//       <div className="container mt-5">
//         <h5 className="fw-bold mb-4" style={{ color: "#2D5A27", borderLeft: "4px solid #F4A261", paddingLeft: "15px" }}>
//           🍲 All Recipes
//         </h5>
//         <div className="row">
//           {recipes.map(recipe => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//           ))}
//         </div>
//       </div>
//       <Pagination />
//     </div>
//   );
// }


// export default Home;