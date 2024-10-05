import React from "react";
import Sidebar from "../navbar/sidebar";
import Topbar from "../navbar/topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Topbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
