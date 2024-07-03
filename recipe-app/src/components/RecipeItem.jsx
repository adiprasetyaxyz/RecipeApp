import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function RecipeItem({ recipe }) {
  const [liked, setLiked] = useState(false);
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    // Load liked recipes from local storage when the component mounts
    const storedLikedRecipes =
      JSON.parse(localStorage.getItem("likedRecipes")) || [];
    setLikedRecipes(storedLikedRecipes);

    // Check if the current recipe is already liked
    if (
      storedLikedRecipes.some((savedRecipe) => savedRecipe.id === recipe.id)
    ) {
      setLiked(true);
    }
  }, [recipe.id]);

  const handleLike = () => {
    let updatedLikedRecipes;

    if (liked) {
      // Remove recipe from liked recipes
      updatedLikedRecipes = likedRecipes.filter(
        (savedRecipe) => savedRecipe.id !== recipe.id
      );
    } else {
      // Add recipe to liked recipes
      updatedLikedRecipes = [...likedRecipes, recipe];
    }

    setLiked(!liked);
    setLikedRecipes(updatedLikedRecipes);
    localStorage.setItem("likedRecipes", JSON.stringify(updatedLikedRecipes));
  };

  return (
    <div className="relative flex-initial h-auto rounded-md w-52 p-3 bg-primary m-2">
      <img
        className="w-44 h-20 rounded-lg mb-1"
        src={recipe.image}
        alt={recipe.title}
      />
      <button
        onClick={handleLike}
        className="absolute top-3 right-6 text-red-500"
      >
        {liked ? (
          <FavoriteIcon className="bg-white rounded-full p-1" />
        ) : (
          <FavoriteBorderIcon className="bg-white rounded-full p-1" />
        )}
      </button>
      <h2 className="font-semibold text-xs">
        {<Link to={`recipe/${recipe.id}`}>{recipe.title}</Link>}
      </h2>
      <p className="text-xs">Source: {recipe.sourceName}</p>
      <ul>
        {recipe.dishTypes &&
          recipe.dishTypes.slice(0, 3).map((tag, index) => (
            <li
              key={index}
              className="bg-secondary rounded-md p-0.5 m-0.5 inline-block text-xs"
            >
              {tag}
            </li>
          ))}
      </ul>
    </div>
  );
}
