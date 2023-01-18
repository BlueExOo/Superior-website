import React from "react";
import PayPal from "../assets/paypal.png";
import Upi from "../assets/upi.png";
import PayTm from "../assets/paytm.png";
import BgImage from "../assets/hero-img.png";
import Header from "../components/Header";

const DonatePage = () => {
  return (
    <section className="2xl:container h-screen m-auto bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500">
      <Header />
      <div hidden className="fixed inset-0 w-7/12 lg:block">
        <img src={BgImage} alt="" />
      </div>
      <div className="relative h-full ml-auto lg:w-6/12 py-4">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="py-10">
            <p className="font-medium text-xl md:text-2xl text-center uppercase text-gray-200">
              support makes us grow together
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-1">
            <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <a
                href="https://www.paypal.com/paypalme/Sipun"
                target="_blank"
                rel="noreferrer"
                className="flex gap-8 justify-center items-center"
              >
                <img src={PayPal} alt="" className="w-12" />
                <span className="block w-max font-medium tracking-wide text-5xl text-white">
                  PayPal
                </span>
              </a>
            </button>

            <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <a
                href="https://telegra.ph/UPI-Id-09-18"
                target="_blank"
                rel="noreferrer"
                className="flex gap-8 justify-center items-center"
              >
                <img src={Upi} alt="" className="w-12" />
                <span className="block w-max font-medium tracking-wide text-5xl text-white">
                  UPI
                </span>
              </a>
            </button>

            <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <a
                href="https://ibb.co/FgqkqLF"
                target="_blank"
                rel="noreferrer"
                className="flex gap-8 justify-center items-center"
              >
                <img src={PayTm} alt="" className="w-12" />
                <span className="block w-max font-medium tracking-wide text-5xl text-white">
                  PayTm
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
