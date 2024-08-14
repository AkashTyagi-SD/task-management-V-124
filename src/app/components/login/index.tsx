"use client";

import Link from "next/link";
import { FC } from "react";

const Login: FC = () => {
  const handleSubmit = (event: any) => {};

  return (
    <div className="flex justify-center items-center bg-cyan-800 h-screen">
      <form
        className="w-96 p-6 shadow-lg bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-cyan-800 text-3xl text-center">Login</h1>
        <div className="mt-4">
          <label htmlFor="email" className="block text-base mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter email..."
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter password..."
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label className="ml-2">Remember Me</label>
          </div>
          <div>
            <Link href={"/#"} className="hover:underline text-cyan-800">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <button className="border-2 border-cyan-800 bg-cyan-800 text-white py-1 w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
