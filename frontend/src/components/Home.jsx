import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Hero from "../assets/hero.png";

const Home = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Section id="home">
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>SuperiorOS</h1>
          <p>
            Superior OS is a Custom ROM based on AOSP, with a bunch of special
            features. The main aim of this ROM is to deliver lightning fast
            experience with stability, security and good battery backup
          </p>
          <div>
            <button onClick={() => setHidden((s) => !s)} className="btn-donate">
              Donate
            </button>

            {!hidden ? (
              <div className="payment">
                <div className="payment-donate">
                  <h2>
                    <a
                      href="https://www.paypal.com/paypalme/Sipun"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Paypal
                    </a>
                  </h2>
                </div>
                <div className="payment-donate">
                  <h2>
                    <a
                      href="https://telegra.ph/UPI-Id-09-18"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UPI
                    </a>
                  </h2>
                </div>
                <div className="payment-donate">
                  <h2>
                    <a
                      href="https://ibb.co/FgqkqLF"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PayTm
                    </a>
                  </h2>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="img">
          <img src={Hero} alt="" />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 0.5rem;
  background-color: var(--primary-background_color);
  border-radius: 1rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse {
    width: 30rem;
    height: 30rem;
    background-color: #ae54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;

      h1 {
        color: white;
        font-size: 5rem;
      }

      p {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .btn-donate {
      border: none;
      outline: none;
      padding: 10px 16px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 700;
    }
    .payment {
      display: flex;
      gap: 5rem;
      margin-top: 3%;

      .payment-donate {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2 {
          font-size: 2rem;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .img {
      img {
        height: 40rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        text-align: center;
        h1 {
          font-size: 3rem;
          span {
            img {
              height: 2rem;
            }
          }
        }
        p {
          font-size: 1rem;
        }
        .payment {
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }
      }
      .img {
        img {
          height: 15rem;
        }
      }
    }
  }
`;

export default Home;
