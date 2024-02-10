import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import IngredientsByID from "./pages/IngredientsByID/IngredientsByID";
import Meal from "./pages/Meal/Meal";
import Ingredients from "./pages/Ingredients/Ingredients";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Ingredients />} />
        <Route path="/ingredients/:filter" element={<IngredientsByID />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
