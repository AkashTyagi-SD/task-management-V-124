import { FC, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { VscTasklist } from "react-icons/vsc";
import { GrUserManager } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import SidebarItem from "./SidebarItem";
import styles from "./sidebar.module.css";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: <RxDashboard />,
        label: "Dashboard",
        route: "/",
      },
      {
        icon: <VscTasklist />,
        label: "Task Management",
        route: "/task-management",
      },
      {
        icon: <VscTasklist />,
        label: "Employee Management",
        route: "/employee-management",
      },
      {
        icon: <GrUserManager />,
        label: "User Management",
        route: "/user-management",
      },
    ],
  },
];
const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [pageName, setPageName] = useState("dashboard");

  return (
    <aside className={styles.container}>
      <div className={styles.sidebarButton}>
        <h2 className="font-bold text-white">Welcome</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          className="block lg:hidden"
        >
          <IoMdArrowBack />
        </button>
      </div>
      <div className={styles.sidebarContent}>
        <nav className={styles.navBar}>
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <ul className="mb-2 flex flex-col gap-1.5">
                {group.menuItems.map((menuItem, menuIndex) => (
                  <SidebarItem
                    key={menuIndex}
                    item={menuItem}
                    pageName={pageName}
                    setPageName={setPageName}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
