import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  const links = ["home", "features", "screenshots", "core team"];

  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="logo">
        <img src={logo} alt="superior" width={80} height={80} />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex flex-gap-2">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <Button text="Download" />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  .toggle {
    display: none;
  }
  .links {
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    padding: 2.5rem 10rem;

    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      li {
        a {
          color: #002000;
          text-decoration: none;
          text-transform: capitalize;
          transition: 0.4s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 2rem;
    z-index: 999;
    margin: 0;
    /* button {
      display: none;
    } */
    .account-info {
      display: none;
    }
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: var(--primary-color);
        width: 25px;
        height: 25px;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 50;
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      clip-path: none;
      ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: var(--primary-color);
          }
        }
      }
    }
  }
`;

export default Navbar;
