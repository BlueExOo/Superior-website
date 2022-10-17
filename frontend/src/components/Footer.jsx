import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { socialIcons } from "../utils";

const DEVELOPERS = [
  { name: "Maintainer", link: "mailto:superioros123@gmail.com" },
  { name: "Gerrit", link: "https://review.superioros.org/q/status:open" },
  { name: "Crowdin", link: "https://translations.superioros.org/" },
];

const Footer = () => {
  return (
    <Container>
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>SuperiorOS</h3>
        </div>

        <div className="social-icons">
          {socialIcons.map((icon, index) => {
            return (
              <div className="icon" key={index}>
                <a href={icon.link}>{icon.name}</a>
              </div>
            );
          })}
        </div>

        <div className="footer-bottom">
          <p>
            CopyRight &copy;2022 {""}
            <span>
              <a href="https://github.com/SuperiorOS">SuperiorOS Project</a>
            </span>
          </p>

          <div className="footer-menu">
            <ul className="f-menu">
              {DEVELOPERS.map(({ name, link }, index) => {
                return (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background: var(--primary-background_color);
  height: auto;
  width: 100%;
  padding-top: 20px;
  border-radius: 15px;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }

      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color);
        margin-left: -10px;
        font-size: 2.1rem;
        font-weight: 500;
        text-transform: capitalize;
        line-height: 3rem;
      }
    }

    .social-icons {
      flex-direction: row;
      display: flex;
      gap: 1em;
      align-items: center;
      padding-top: 0.7em;
      padding-right: 1em;
      padding-bottom: 0.7em;
      padding-left: 1em;
      background-color: #fce9e9;
      border-radius: 50px;
      margin-bottom: 0.7rem;

      svg {
        color: var(--primary-color);
        width: 20px;
        height: 20px;
      }

      a {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        text-decoration: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .footer-bottom {
      background: var(--primary-color);
      background: linear-gradient(
        to right,
        var(--primary-background_color),
        var(--primary-color)
      );
      width: 100%;
      padding: 20px;
      padding-bottom: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
        word-spacing: 2px;
        text-transform: capitalize;
        color: white;

        span {
          text-transform: uppercase;
          opacity: 0.4;
          font-weight: 200;

          a {
            color: var(--primary-color);
            font-size: 16px;
            text-decoration: none;
          }
        }
      }

      .footer-menu {
        ul {
          display: flex;

          li {
            padding-right: 10px;
            display: block;

            a {
              color: white;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .footer-bottom {
      flex-direction: column;
      .footer-menu {
        margin-top: 10px;
        padding-bottom: 20px;
      }
    }
  }
`;

export default Footer;
