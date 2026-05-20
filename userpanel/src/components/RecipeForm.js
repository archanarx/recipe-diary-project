import { useState } from "react";

function RecipeForm({ initialData = {}, onSubmit, buttonText }) {

  const [title, setTitle] = useState(initialData.title || "");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [time, setTime] = useState(initialData.time || "");
  const [difficulty, setDifficulty] = useState(initialData.difficulty || "Easy");
  const [image, setImage] = useState(null);

  const colors = {
    primary: "#2D5A27",
    secondary: "#F4A261",
    inputBg: "#f1f3f5",
    inputBorder: "#dee2e6"
  };

  // ✅ INGREDIENT HANDLERS
  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // ✅ STEP HANDLERS
  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  // ✅ SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedIngredients = ingredients
      .filter(item => item.trim() !== "")
      .join(",");

    const formattedSteps = steps
      .filter(step => step.trim() !== "")
      .join(".");

    const recipeData = {
      title,
      ingredients: formattedIngredients,
      steps: formattedSteps,
      time,
      level: difficulty,
      image
    };

    onSubmit(recipeData);
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Title */}
      <div className="mb-5">
        <label className="form-label small fw-bold text-muted text-uppercase">Recipe Title</label>
        <input
          type="text"
          className="form-control py-2 rounded-3 custom-input"
          placeholder="e.g. Garden Fresh Pasta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
        />
      </div>

      <div className="row">
        {/* Cooking Time */}
        <div className="col-md-6 mb-5">
          <label className="form-label small fw-bold text-muted text-uppercase">Cooking Time (mins)</label>
          <input
            type="number"
            className="form-control py-2 rounded-3 custom-input"
            placeholder="minutes"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
          />
        </div>

        {/* Difficulty */}
        <div className="col-md-6 mb-5">
          <label className="form-label small fw-bold text-muted text-uppercase">Difficulty</label>
          <select
            className="form-select py-2 rounded-3 custom-input"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>

      {/* ✅ Ingredients */}
      <div className="mb-5">
        <label className="form-label small fw-bold text-muted text-uppercase">Ingredients</label>

        {ingredients.map((item, index) => (
          <input
            key={index}
            type="text"
            className="form-control py-2 rounded-3 custom-input mb-2"
            placeholder={`Ingredient ${index + 1}`}
            value={item}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
          />
        ))}

        <button
          type="button"
          onClick={addIngredient}
          // className="btn btn-sm mt-2"
          // style={{ backgroundColor: colors.secondary, color: "#fff" }}
          className="btn add-btn mt-3 rounded-pill px-3"
        >
          + Add Ingredient
        </button>
      </div>

      {/* ✅ Steps */}
      <div className="mb-5">
        <label className="form-label small fw-bold text-muted text-uppercase">Instructions</label>

        {steps.map((step, index) => (
          <input
            key={index}
            type="text"
            className="form-control py-2 rounded-3 custom-input mb-2"
            placeholder={`Step ${index + 1}`}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
          />
        ))}

        <button
          type="button"
          onClick={addStep}
          className="btn add-btn mt-3 rounded-pill px-3"
        >
          + Add Step
        </button>
      </div>

      {/* Image Upload */}
      <div className="mb-5">
        <label className="form-label small fw-bold text-muted text-uppercase">Upload Food Photo</label>
        <input
          type="file"
          className="form-control py-2 rounded-3 custom-input"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
        />
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          className="btn btn-glow w-100"
          // className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn"
          style={{ backgroundColor: colors.primary, border: "none", padding: "12px" }}
        >
          ✨ {buttonText}
        </button>
      </div>

      <style>{`
        .custom-input:focus {
          background-color: #ffffff !important;
          border-color: #2D5A27 !important;
          box-shadow: 0 0 0 0.2rem rgba(45, 90, 39, 0.15) !important;
          outline: none;
        }
        .transition-btn:hover { 
          opacity: 0.95;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(45, 90, 39, 0.3) !important;
        }
      `}</style>

    </form>
  );
}

export default RecipeForm;

// import { useState } from "react";

// function RecipeForm({ initialData = {}, onSubmit, buttonText }) {
//   // Your original logic preserved
//   const [title, setTitle] = useState(initialData.title || "");
//   const [ingredients, setIngredients] = useState(initialData.ingredients || "");
//   const [steps, setSteps] = useState(initialData.steps || "");
//   const [time, setTime] = useState(initialData.time || "");
//   const [difficulty, setDifficulty] = useState(initialData.difficulty || "Easy");
//   const [image, setImage] = useState(null);

//   const colors = {
//     primary: "#2D5A27",
//     secondary: "#F4A261",
//     inputBg: "#f1f3f5",
//     inputBorder: "#dee2e6"
//   };

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   // ✅ Convert newline → formatted string
//   const formattedIngredients = ingredients
//     .split("\n")
//     .map(item => item.trim())
//     .filter(item => item !== "")
//     .join(",");

//   const formattedSteps = steps
//     .split("\n")
//     .map(step => step.trim())
//     .filter(step => step !== "")
//     .join(".");

//   const recipeData = {
//     title,
//     ingredients: formattedIngredients,
//     steps: formattedSteps,
//     time,
//     level: difficulty,
//     image
//   };

//   onSubmit(recipeData);
//   };

  
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const recipeData = { title, ingredients, steps, time, level: difficulty, image };
//   //   onSubmit(recipeData);
//   // };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Title */}
//       <div className="mb-4">
//         <label className="form-label small fw-bold text-muted text-uppercase">Recipe Title</label>
//         <input
//           type="text"
//           className="form-control py-2 rounded-3 custom-input"
//           placeholder="e.g. Garden Fresh Pasta"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//         />
//       </div>

//       <div className="row">
//         {/* Cooking Time */}
//         <div className="col-md-6 mb-4">
//           <label className="form-label small fw-bold text-muted text-uppercase">Cooking Time (mins)</label>
//           <input
//             type="number"
//             className="form-control py-2 rounded-3 custom-input"
//             placeholder="minutes"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//           />
//         </div>

//         {/* Difficulty */}
//         <div className="col-md-6 mb-4">
//           <label className="form-label small fw-bold text-muted text-uppercase">Difficulty</label>
//           <select
//             className="form-select py-2 rounded-3 custom-input"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//             style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//           >
//             <option>Easy</option>
//             <option>Medium</option>
//             <option>Hard</option>
//           </select>
//         </div>
//       </div>

//       {/* Ingredients */}
//       <div className="mb-4">
//         <label className="form-label small fw-bold text-muted text-uppercase">Ingredients</label>
//         <textarea
//           className="form-control py-2 rounded-3 custom-input"
//           rows="4"
//           placeholder="List ingredients here..."
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//         ></textarea>
//       </div>

//       {/* Steps */}
//       <div className="mb-4">
//         <label className="form-label small fw-bold text-muted text-uppercase">Instructions</label>
//         <textarea
//           className="form-control py-2 rounded-3 custom-input"
//           rows="5"
//           placeholder="Write step-by-step instructions..."
//           value={steps}
//           onChange={(e) => setSteps(e.target.value)}
//           style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//         ></textarea>
//       </div>

//       {/* Image Upload - Styled nicely */}
//       <div className="mb-5">
//         <label className="form-label small fw-bold text-muted text-uppercase">Upload Food Photo</label>
//         <input
//           type="file"
//           className="form-control py-2 rounded-3 custom-input"
//           onChange={(e) => setImage(e.target.files[0])}
//           style={{ backgroundColor: colors.inputBg, border: `1px solid ${colors.inputBorder}` }}
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="text-center">
//         <button 
//           className="btn btn-lg w-100 rounded-pill text-white fw-bold shadow-sm transition-btn"
//           style={{ backgroundColor: colors.primary, border: "none", padding: "12px" }}
//         >
//           ✨ {buttonText}
//         </button>
//       </div>

//       <style>{`
//         .custom-input:focus {
//           background-color: #ffffff !important;
//           border-color: #2D5A27 !important;
//           box-shadow: 0 0 0 0.2rem rgba(45, 90, 39, 0.15) !important;
//           outline: none;
//         }
//         .transition-btn:hover { 
//           opacity: 0.95;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(45, 90, 39, 0.3) !important;
//         }
//       `}</style>
//     </form>
//   );
// }

// export default RecipeForm;










// import { useState } from "react";

// function RecipeForm({ initialData = {}, onSubmit, buttonText }) {

//   const [title, setTitle] = useState(initialData.title || "");
//   const [ingredients, setIngredients] = useState(initialData.ingredients || "");
//   const [steps, setSteps] = useState(initialData.steps || "");
//   const [time, setTime] = useState(initialData.time || "");
//   const [difficulty, setDifficulty] = useState(initialData.difficulty || "Easy");
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const recipeData = {
//       title,
//       ingredients,
//       steps,
//       time,
//       difficulty,
//       image
//     };

//     onSubmit(recipeData);
//   };

//   return (

//     <form onSubmit={handleSubmit}>

//       {/* Title */}
//       <div className="mb-3">
//         <label className="form-label">Title</label>
//         <input
//           type="text"
//           className="form-control"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       {/* Ingredients */}
//       <div className="mb-3">
//         <label className="form-label">Ingredients</label>
//         <textarea
//           className="form-control"
//           rows="4"
//           placeholder="Write ingredients here..."
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Steps */}
//       <div className="mb-3">
//         <label className="form-label">Steps</label>
//         <textarea
//           className="form-control"
//           rows="4"
//           placeholder="Write step-by-step instructions..."
//           value={steps}
//           onChange={(e) => setSteps(e.target.value)}
//         ></textarea>
//       </div>

//       {/* Cooking Time */}
//       <div className="mb-3">
//         <label className="form-label">Cooking Time</label>
//         <input
//           type="number"
//           className="form-control"
//           placeholder="minutes"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </div>

//       {/* Difficulty */}
//       <div className="mb-3">
//         <label className="form-label">Difficulty</label>
//         <select
//           className="form-control"
//           value={difficulty}
//           onChange={(e) => setDifficulty(e.target.value)}
//         >
//           <option>Easy</option>
//           <option>Medium</option>
//           <option>Hard</option>
//         </select>
//       </div>

//       {/* Image Upload */}
//       <div className="mb-4">
//         <label className="form-label">Upload Image</label>
//         <input
//           type="file"
//           className="form-control"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="text-center">
//         <button className="btn btn-primary px-4">
//           {buttonText}
//         </button>
//       </div>

//     </form>
//   );
// }

// export default RecipeForm;