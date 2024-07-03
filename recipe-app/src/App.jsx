import { useState } from "react";
import RecipesList from "./components/RecipesList";
import Search from "./components/Search";
import TagsButton from "./components/TagsButton";
function App() {
  const [recipesData, setRecipesData] = useState([]);
  return (
    <div className="App flex justify-center flex-col m-0 p-0">
      <Search recipesData={recipesData} setRecipesData={setRecipesData} />
      <div>
        <h2 className="pl-20 text-lg font-bold">Explore Recipes</h2>
        <RecipesList
          recipesData={recipesData}
          setRecipesData={setRecipesData}
        />
      </div>
    </div>
  );
}

export default App;
