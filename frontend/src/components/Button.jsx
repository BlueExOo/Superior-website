import React from "react";
import styled from "styled-components";

const Button = ({ text, blue }) => {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
};

const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.5rem 2rem;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    :not(.blue) {
      background: transparent;
      border: 1px solid white;
    }
  }
  .blue {
    background-color: var(--primary-color);
  }
`;

export default Button;
