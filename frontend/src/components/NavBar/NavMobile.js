import React from "react";
import { navigationData } from "../../utils";

const NavMobile = () => {
  return (
    <ul className="flex flex-col px-6 py-8 gap-y-4">
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a className="text-white" href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
