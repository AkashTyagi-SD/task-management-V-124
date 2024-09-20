"use client";

import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../header";
import style from "./DefaultLayout.module.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className={style.container}>
        <Header />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <section className={style.sidebar}></section> */}
        {children}
      </div>
    </>
  );
}
