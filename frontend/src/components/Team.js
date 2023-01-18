import React from "react";

import { teamData } from "../utils";

const Team = () => {
  return (
    <section
      id="core-team"
      className=" py-20 container mx-auto px-6 md:px-12 lg:px-8"
    >
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Meet Our Team
        </h1>
      </div>
      <div className="grid md:grid-cols-5 gap-28 md:gap-12 py-20">
        {teamData.map((team, index) => {
          const { image, name, title, socialIcons } = team;
          return (
            <div className="border-t-4 space-y-8 group text-center" key={index}>
              <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  width="640"
                  height="805"
                  className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                />
              </div>
              <div className="text-center">
                <h5 className="text-xl font-semibold text-primary">{name}</h5>
                <span className="text-gray-500 text-sm">{title}</span>
              </div>
              <div className="flex justify-center items-center gap-4 mx-auto w-12 text-3xl">
                {socialIcons.map((social, index) => {
                  const { icon, link } = social;
                  return (
                    <a
                      href={link}
                      className="block w-max mx-auto text-center"
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
