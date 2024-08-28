"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const renderText = (type: string): React.ReactNode => {
    switch (type) {
      case "/":
        return (
          <>
            <h1 className="font-medium text-xl mr-4">
              Are you want to signin?
            </h1>
            <Link href="/login" className="mt-1 text-white hover:underline">
              SignIn
            </Link>
          </>
        );
      case "/login":
        return (
          <>
            <h1 className="font-medium text-xl mr-4">
              Are you want to signup?
            </h1>
            <Link href="/signup" className="mt-1 text-white hover:underline">
              SignUp
            </Link>
          </>
        );
      case "/signup":
        return (
          <>
            <h1 className="font-medium text-xl mr-4">Already Signup?</h1>
            <Link href="/login" className="mt-1 text-white hover:underline">
              SignIn
            </Link>
          </>
        );
      default:
    }
  };

  return (
    <header className="flex py-4 px-2 w-full justify-end bg-cyan-800 sticky top-0">
      <div className="flex justify-between">{renderText(pathname)}</div>
    </header>
  );
};

export default Header;
