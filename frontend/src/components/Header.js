import React, { useEffect, useState } from "react";
import Nav from "./NavBar/Nav";
import NavMobile from "./NavBar/NavMobile";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };
    window.addEventListener("scroll", scrollHandler);

    // Explicit call so that the navbar gets blurred when component mounts
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`mb-12 lg:mb-0 z-20 px-4 lg:px-0 py-3 fixed w-full bg-white ${
        !top && "backdrop-blur-md bg-opacity-50"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            {/* nav / initially hidden / show on large screens  */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-20 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          <Link to="/downloadPage">
            <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
              Download Page
              <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
            </button>
          </Link>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="text-2xl text-primary cursor-pointer lg:hidden"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
