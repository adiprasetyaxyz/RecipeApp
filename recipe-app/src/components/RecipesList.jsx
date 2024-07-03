import RecipeItem from "./RecipeItem";

export default function RecipesList({ recipesData }) {
  console.log(recipesData);
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      style={{ marginLeft: "5%", marginRight: "5%" }}
    >
      {recipesData.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
