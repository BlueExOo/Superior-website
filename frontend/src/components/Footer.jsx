import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { socialIcons } from "../utils";

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>SuperiorOS</p>
          </div>

          <div className="copy-right">
            <p>
              CopyRight &copy; 2022 {""}
              <span>
                <a href="https://github.com/SuperiorOS">SuperiorOS Project</a>
              </span>
            </p>
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
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;

  .wrapper {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    .inner-wrapper {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background: var(--primary-color);
      background: linear-gradient(
        to right,
        var(--primary-background_color),
        var(--primary-color)
      );
      padding-top: 1em;
      padding-right: 1em;
      padding-bottom: 1em;
      padding-left: 1.5em;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;

      .logo {
        display: flex;
        width: 70px;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.4rem;
          color: var(--primary-color);
          margin-left: -10px;
        }
      }

      .copy-right {
        text-align: left;
        font-size: 1.1rem;
        color: white;

        a {
          text-decoration: none;
          color: var(--secondary-color);
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
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .wrapper {
      display: flex;
      flex-direction: column;

      .inner-wrapper {
        text-align: justify;
        flex-direction: column;
        display: flex;
        padding-top: 2em;
        padding-right: 2em;
        padding-bottom: 2em;
        padding-left: 2em;
        gap: 1em;

        .logo {
          justify-content: center;
        }
      }
    }
  }
`;

export default Footer;
