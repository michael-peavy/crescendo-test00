import "./App.css";
import Recipe from "./Recipe";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:3001/recipes `);
    setRecipes(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {recipes.map((recipe, index) => (
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <Recipe
                key={index}
                title={recipe.title}
                description={recipe.description}
                image={recipe.images.small}
                ingredients={recipe.ingredients}
                servings={recipe.servings}
                prepTime={recipe.prepTime}
                cookTime={recipe.cookTime}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
