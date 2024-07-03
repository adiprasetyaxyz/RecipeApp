import { NavLink } from "react-router-dom";
import NavData from "./NavData";
export default function SideBar() {
  return (
    <div className="h-screen bg-white w-52 shadow-xl flex flex-col m-0">
      <h1 className="text-center text-xl font-bold mt-6">RecipeApp</h1>
      <nav className="flex flex-col mt-10 space-y-4">
        {NavData.map((nav) => (
          <NavLink
            to={nav.link}
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-2  hover:bg-primary border-r-4 border-secondary"
                : "flex items-center p-2  hover:bg-blue-100"
            }
            key={nav.name}
          >
            {nav.icon} {nav.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
