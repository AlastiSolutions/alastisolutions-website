import React from "react";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex gap-4 justify-center px-3 py-1 dark:bg-white bg-slate-900 dark:text-slate-900 text-white rounded-[0.10rem]">
      <NavItem title="Home" />
      <NavItem title="Projects" />
      <NavItem title="Resume" />
    </div>
  );
}
