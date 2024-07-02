import { useEffect, useState } from "react";
import API_ENDPOINT from "../scripts/globals/api-endpoint";
import CONFIG from "../scripts/globals/config";
export default function Search({ recipesData, setRecipesData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchRecipesData() {
      try {
        const res = await fetch(
          `${API_ENDPOINT.SEARCH}?query=${query}&apiKey=${CONFIG.apiKey}`
        );
        const data = await res.json();
        setRecipesData(data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    fetchRecipesData();
  }, [query]);
  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full justify-items-center shadow-md h-7 rounded-md top-3 "
        />
      </form>
    </div>
  );
}
