import React from "react";
import Sidebar from "../navbar/sidebar";
import Topbar from "../navbar/topbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
