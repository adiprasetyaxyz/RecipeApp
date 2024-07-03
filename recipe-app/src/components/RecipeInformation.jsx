import { useEffect, useState } from "react";
import API_ENDPOINT from "../scripts/globals/api-endpoint";
import CONFIG from "../scripts/globals/config";
import FoodTag from "./FoodTag";

export default function RecipeInformation({ recipe }) {
  const [recipeInformation, setRecipeInformation] = useState({});

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const res = await fetch(
          `${API_ENDPOINT.INFORMATION.replace("{id}", recipe.id)}?apiKey=${
            CONFIG.apiKey
          }`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch recipe information");
        }
        const data = await res.json();
        setRecipeInformation(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching recipe information:", error);
      }
    }

    if (recipe && recipe.id) {
      fetchFoodDetail();
    }
  }, [recipe]); // Add recipe to dependency array

  return (
    <div>
      <p>Source : {recipeInformation.sourceName}</p>
      <FoodTag
        recipeInformation={recipeInformation}
        setRecipeInformation={setRecipeInformation}
      />
    </div>
  );
}
