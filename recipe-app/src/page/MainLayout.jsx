import React from "react";
import SideBar from "../components/SideBar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row bg-main h-auto min-h-screen">
      <SideBar />
      <main className="flex-grow text-left p-0 m-0 lg:ml-52 ml-0">
        {children}
      </main>
    </div>
  );
}
