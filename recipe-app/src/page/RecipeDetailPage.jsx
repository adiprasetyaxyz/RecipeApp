import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_ENDPOINT from "../scripts/globals/api-endpoint";
import CONFIG from "../scripts/globals/config";

export default function RecipeDetailPage() {
  const params = useParams();
  const [recipeInformation, setRecipeInformation] = useState(null);

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const res = await fetch(
          `${API_ENDPOINT.INFORMATION.replace(
            "{id}",
            params.recipeId
          )}?apiKey=${CONFIG.apiKey}`
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
    fetchFoodDetail();
  }, [params.recipeId]);

  if (!recipeInformation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipeInformation.title}</h1>
      <img
        className="w-full h-72 rounded-lg mb-4 object-cover"
        src={recipeInformation.image}
        alt={recipeInformation.title}
      />
      <p
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: recipeInformation.summary }}
      ></p>
      <p className="mb-4">
        Source:{" "}
        <a
          href={recipeInformation.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recipeInformation.sourceName}
        </a>
      </p>
      <p className="mb-4">
        Ready in: {recipeInformation.readyInMinutes} minutes
      </p>
      <p className="mb-4">Servings: {recipeInformation.servings}</p>
      <p className="mb-4">
        Price per serving: ${recipeInformation.pricePerServing.toFixed(2)}
      </p>
      <p className="mb-4">Health Score: {recipeInformation.healthScore}</p>
      <ul className="mb-4">
        {recipeInformation.dishTypes &&
          recipeInformation.dishTypes.map((dish, index) => (
            <li
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {dish}
            </li>
          ))}
      </ul>
      <h2 className="text-xl font-bold mt-4 mb-2">Ingredients</h2>
      <ul className="mb-4">
        {recipeInformation.extendedIngredients &&
          recipeInformation.extendedIngredients.map((ingredient, index) => (
            <li key={index} className="mb-2">
              <div className="flex items-center">
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  className="w-10 h-10 mr-2"
                />
                <span>{ingredient.original}</span>
              </div>
            </li>
          ))}
      </ul>
      <h2 className="text-xl font-bold mt-4 mb-2">Instructions</h2>
      {recipeInformation.analyzedInstructions &&
      recipeInformation.analyzedInstructions.length > 0 ? (
        <ul>
          {recipeInformation.analyzedInstructions[0].steps.map(
            (step, index) => (
              <li key={index} className="mb-2">
                {index + 1}. {step.step}
              </li>
            )
          )}
        </ul>
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  );
}
