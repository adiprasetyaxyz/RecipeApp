import { useState, useEffect } from "react";
import API_ENDPOINT from "../scripts/globals/api-endpoint";
import CONFIG from "../scripts/globals/config";

export default function Search({ setRecipesData }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const params = new URLSearchParams({
          apiKey: CONFIG.apiKey,
          addRecipeInformation: "true",
        });

        if (query) {
          params.append("query", query);
          params.append("number", "8");
        } else {
          params.append("number", "8");
          params.append("includeTags", "vegetarian,dessert");
          params.append("excludeTags", "quinoa");
        }

        const endpoint = query
          ? `${API_ENDPOINT.SEARCH}?${params.toString()}`
          : `${API_ENDPOINT.RANDOM}?${params.toString()}`;

        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setRecipesData(data.recipes || data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    // Panggil handleSearch ketika komponen pertama kali dimuat dan ketika nilai query berubah
    handleSearch();
  }, [query, setRecipesData]);

  return (
    <div className="flex justify-center items-center my-4">
      <form className="w-full max-w-xl flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full shadow-md h-10 rounded-xl p-2 border border-gray-300"
          placeholder="Search for recipes..."
        />
      </form>
    </div>
  );
}
