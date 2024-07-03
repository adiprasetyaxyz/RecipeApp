import React from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetailPage() {
  const params = useParams();
  return <div>RecipeDetailPage {params.recipeId}</div>;
}
