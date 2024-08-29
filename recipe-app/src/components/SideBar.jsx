import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavData from "./NavData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="fixed top-0 left-0 h-screen bg-white w-52 shadow-xl flex flex-col m-0 z-50 hidden lg:flex">
        <h1 className="text-center text-xl font-bold mt-6">RecipeApp</h1>
        <nav className="flex flex-col mt-10 space-y-4">
          {NavData.map((nav) => (
            <NavLink
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 hover:bg-primary border-r-4 border-secondary"
                  : "flex items-center p-2 hover:bg-blue-100"
              }
              key={nav.name}
            >
              {nav.icon} {nav.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-2 left-2 z-50">
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white w-52 shadow-xl flex flex-col m-0 z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-center text-xl font-bold mt-6">RecipeApp</h1>
        <nav className="flex flex-col mt-10 space-y-4">
          {NavData.map((nav) => (
            <NavLink
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 hover:bg-primary border-r-4 border-secondary"
                  : "flex items-center p-2 hover:bg-blue-100"
              }
              key={nav.name}
              onClick={() => setIsOpen(false)} // Close sidebar when a link is clicked
            >
              {nav.icon} {nav.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
