import React from "react";

export default function NavItem({ title }: { title: string }) {
  return (
    <p className="hover:text-slate-200 dark:hover:text-slate-950 hover:cursor-pointer ">
      {title}
    </p>
  );
}
