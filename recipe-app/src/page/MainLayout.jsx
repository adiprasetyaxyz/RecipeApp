import React from "react";
import SideBar from "../components/SideBar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row m-0">
      <SideBar />
      <main className="flex-grow text-left p-6 m-3">{children}</main>
    </div>
  );
}
