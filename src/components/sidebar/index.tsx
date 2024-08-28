import { FC } from "react";
import Link from "next/link";

const Sidebar: FC = () => {
  return (
    <nav className="hidden  sm:block sm:w-64 h-full bg-white shadow-md absolute text-black text-base font-semibold">
      <Link href="/" className="block p-4 hover:bg-gray-50">
        Dashboard
      </Link>
      <Link href="/task-management" className="block p-4 hover:bg-gray-50">
        Task Management
      </Link>
      <Link href="/" className="block p-4 hover:bg-gray-50">
        User Management
      </Link>
    </nav>
  );
};

export default Sidebar;
