import RecipeItem from "./RecipeItem";

export default function RecipesList({ recipesData }) {
  console.log(recipesData);
  return (
    <div>
      {recipesData.map((recipe) => (
        <RecipeItem recipe={recipe} />
      ))}
    </div>
  );
}
