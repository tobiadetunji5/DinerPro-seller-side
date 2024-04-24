"use client";
import React, { useEffect } from "react";
import Sidebar from "../navbar/sidebar";
import Topbar from "../navbar/topbar";

export default function MainLayout({ children }) {
  useEffect(() => {
    const token = window.localStorage.getItem("auth_token");
    console.log("Token", token);
  }, []);

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
