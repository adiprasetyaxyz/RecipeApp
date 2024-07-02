import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SettingsIcon from "@mui/icons-material/Settings";

const NavData = [
  { name: "Home", link: "/", icon: <HomeIcon /> },
  { name: "Favorite", link: "/favorite", icon: <FavoriteIcon /> },
  { name: "Mealplan", link: "/meal-plan", icon: <LunchDiningIcon /> },
  { name: "Settings", link: "/settings", icon: <SettingsIcon /> },
];

export default NavData;
