import { NavLinkItem } from "./NavLink";
import { useGame } from "../../helpers/useGameContext";
import { useState } from "react";
import Footer from "../footer/Footer";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { isGameCompleted } = useGame();

  const closeNavbar = () => {
    setNavOpen(false);
  };

  return isGameCompleted ? (
    <header
      className={`absolute animate-slideDown w-full md:bg-[transparent] z-50 justify-between md:justify-start md:items-stretch items-center flex px-4 md:px-0 transition-all duration-200 border-b border-b-lines-color text-text-secondary bg-primary-bg`}
    >
      <div
        className="p-3 pe-28 flex justify-between items-center shrink-0 truncate"
        role="button"
      >
        <p>fabio-simonelli</p>
      </div>
      <nav className="md:w-full">
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`fixed left-0 w-full z-50 right-0 min-h-screen pt-1 bg-primary-bg md:translate-x-0 md:relative text-white transform transition-all duration-300 md:relative md:flex  md:min-h-0 md:px-0 md:py-0 md:space-y-0 ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <NavLinkItem
            label={"_hello"}
            redirectTo={"/home"}
            className={"border-t md:border-t-0"}
            onClick={closeNavbar}
          />
          <NavLinkItem
            label={"_about-me"}
            redirectTo={"/about"}
            onClick={closeNavbar}
          />
          <NavLinkItem
            label={"_projects"}
            redirectTo={"/projects"}
            className={"md:border-r"}
            onClick={closeNavbar}
          />
          <NavLinkItem
            label={"_contact-me"}
            redirectTo={"/contact"}
            className={"ml-auto"}
            onClick={closeNavbar}
          />
          <Footer className={"md:hidden bottom-10"} />
        </ul>
      </nav>
    </header>
  ) : null;
};
