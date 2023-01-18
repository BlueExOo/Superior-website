import React from "react";
import Header from "../components/Header";

import { devicesData } from "../utils";

const DownloadPage = () => {
  const { devices } = devicesData;
  return (
    <section className="2xl:container h-[100vh] bg-gradient-to-r overflow-y-scroll from-blue-600 via-sky-500 to-emerald-500">
      <Header />
      <div className="grid h-screen xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 last:pb-5 gap-4 py-28 place-items-center antialiased">
        {devices.map((device) => {
          const {
            image,
            deviceName,
            deviceCodeName,
            maintainerName,
            downloadLink,
          } = device;
          return (
            <div>
              <img
                src={image}
                alt="DeviceImage"
                className="w-full max-w-[350px] max-h-[350px] object-cover object-center rounded-lg shadow-md"
              />
              <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-baseline">
                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                      {deviceName}
                    </span>
                  </div>
                  <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                    {deviceCodeName}
                  </h4>
                  <div className="mt-1">
                    <span className="text-gray-600 text-sm">
                      {maintainerName}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <a href={downloadLink} download>
                        <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                          <svg
                            className="fill-current w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>

                          <span>Download</span>
                        </button>
                      </a>
                      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DownloadPage;
