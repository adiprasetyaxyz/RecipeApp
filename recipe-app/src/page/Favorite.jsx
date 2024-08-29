import { useState, useEffect } from "react";
import RecipesList from "../components/RecipesList";

export default function Favorite() {
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    // Load liked recipes from local storage when the component mounts
    const storedLikedRecipes =
      JSON.parse(localStorage.getItem("likedRecipes")) || [];
    setLikedRecipes(storedLikedRecipes);
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-10">
        Your Favorite Recipes
      </h1>
      {likedRecipes.length > 0 ? (
        <RecipesList recipesData={likedRecipes} />
      ) : (
        <p>No favorite recipes found.</p>
      )}
    </div>
  );
}
