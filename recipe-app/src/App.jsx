import { useState } from "react";
import RecipesList from "./components/RecipesList";
import Search from "./components/Search";
function App() {
  const [recipesData, setRecipesData] = useState([]);
  return (
    <div className="App">
      <Search recipesData={recipesData} setRecipesData={setRecipesData} />
      <div>
        <h2 className="text-xl font-bold underline">Item</h2>
        <RecipesList
          recipesData={recipesData}
          setRecipesData={setRecipesData}
        />
      </div>
    </div>
  );
}

export default App;
