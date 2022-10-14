import React from "react";
import styled from "styled-components";
import { featuresData } from "../utils";

const Features = () => {
  return (
    <Section id="features">
      <div className="title">
        <h2>Features</h2>
      </div>
      <div className="container">
        <div className="ellipse"></div>
        <div className="content">
          {featuresData.map(
            ({ image, title, description, buttonText }, index) => {
              return (
                <div className="createAndSell" key={index}>
                  <div className="image">
                    <img src={image} alt="create and sell" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  }
  .container {
    background-color: var(--primary-background_color);
    padding: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background-color: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    .content {
      display: flex;
      gap: 3rem;
      .createAndSell {
        background-color: #ffffff34;
        z-index: 10;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background-color: var(--primary-color);
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          padding: 1rem;
          width: max-content;
          border-radius: 2rem;
          img {
            height: 6rem;
          }
        }
        h3 {
          color: white;
          text-align: center;
        }
        p {
          color: var(--secondary-color);
          margin-bottom: 1rem;
          text-align: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export default Features;
