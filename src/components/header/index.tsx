"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import styles from "./header.module.css";

const HeaderComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HideShowMenuBar = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.avtarContainer}>
      <RxAvatar size={30} color="#ffffff" onClick={() => HideShowMenuBar()} />
      {menuOpen && (
        <div className={styles.menubar}>
          <Link href="" className={styles.linkmenubar}>
            Profile
          </Link>
          <Link href="" className={styles.linkmenubar}>
            Setting
          </Link>
          <Link href="" className={styles.linkmenubar}>
            LogOut
          </Link>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();

  const renderText = (type: string): React.ReactNode => {
    switch (type) {
      case "/":
        return <HeaderComp />;
      case "/login":
        return (
          <>
            <h1 className={styles.text}>Are you want to signup?</h1>
            <Link href="/signup" className={styles.link}>
              SignUp
            </Link>
          </>
        );
      case "/signup":
        return (
          <>
            <h1 className={styles.text}>Already Signup?</h1>
            <Link href="/login" className={styles.link}>
              SignIn
            </Link>
          </>
        );
      default:
        return <HeaderComp />;
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.childContainer}>{renderText(pathname)}</div>
    </header>
  );
};

export default Header;
