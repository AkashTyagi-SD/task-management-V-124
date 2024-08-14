"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [pageType, setPageType] = useState("login");
  return (
    <header className="flex py-2 px-2 w-full justify-end bg-cyan-800">
      <div className="flex justify-between">
        <h1 className="font-medium text-xl mr-4">
          {pageType == "login" ? "Are you want to signup?" : "Already Signup?"}{" "}
        </h1>
        {pageType == "login" ? (
          <Link href={""} className="mt-1 text-white hover:underline">
            SignUp
          </Link>
        ) : (
          <Link href={""} className="mt-1 text-white hover:underline">
            SignIn
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
