import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarLink = ({ path, Icon, text }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-colorgray-100 flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
          isActive && "font-bold text-blue-300"
        }`
      }
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </NavLink>
  );
};
