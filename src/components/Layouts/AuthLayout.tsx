"use client";

import React from "react";
import Header from "../header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
