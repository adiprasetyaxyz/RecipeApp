import RecipeInformation from "./RecipeInformation";

export default function RecipeItem({ recipe }) {
  return (
    <div>
      <img
        className="w-56 h-40 rounded-sm"
        src={recipe.image}
        alt={recipe.title}
      />
      <h2>{recipe.title}</h2>
      <RecipeInformation recipe={recipe} />
    </div>
  );
}
