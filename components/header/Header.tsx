import React from "react";
import styles from "./styles.module.css";
import Logo from "../ui/Logo";
import MenuItems from "./MenuItems";
import NavButtons from "./NavButtons";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    // Header sticky
    <header
      className={`${styles.header}  w-full items-center justify-center px-5 py-2.5 ${className}`}
    >
          {/* Navbar */}
      <nav className=" min-[600px]:flex w-full items-center px-5 justify-between max-[600px]:justify-center">
          {/* Navbar Logo */}
          <Logo href="/" className=" border border-transparent py-1.5 px-3 hover:border-gray-500 
          rounded-full active:ring active:ring-gray-200 max-[600px]:justify-center"> 
          <p className="text-[#555555] text-[14px] max-[600px]:hidden">Test</p>
          </Logo>
          {/* Nav Links */}
          <MenuItems className="max-[900px]:hidden ml-10" />
          {/* Nav Button Group */}
          <NavButtons className="max-[650px]:hidden" />
      </nav>
    </header>
  );
};

export default Header;
