import React from "react";
import LoaderAnimation from "../assets/Loader.svg";

const Loader = () => {
  return (
    <div>
      <div className="fixed  w-full min-h-screen z-50 bg-transparent opacity-30" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <img src={LoaderAnimation} alt="Loader Animation" />
      </div>
    </div>
  );
};

export default Loader;
