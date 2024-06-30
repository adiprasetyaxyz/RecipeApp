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
    <>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}
