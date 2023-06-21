import React from "react";
import Sidebar from "../navbar/sidebar";
import Topbar from "../navbar/topbar";

export default function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Topbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </React.Fragment>
  );
}
