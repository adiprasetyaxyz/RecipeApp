import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorite from "./page/Favorite";
import Mealplan from "./page/MealPlan";
import ErrorPage from "./page/ErrorPage";
import MainLayout from "./page/MainLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/favorite",
    element: (
      <MainLayout>
        <Favorite />
      </MainLayout>
    ),
  },
  {
    path: "/meal-plan",
    element: (
      <MainLayout>
        <Mealplan />
      </MainLayout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
