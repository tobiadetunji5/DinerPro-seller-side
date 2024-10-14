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
    <div className="flex flex-col h-full w-full">
      <Topbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
