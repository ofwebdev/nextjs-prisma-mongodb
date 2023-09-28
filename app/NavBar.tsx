import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-3 p-5 bg-slate-200">
      <Link href="/">Home</Link>
      <Link href="/user">User</Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
};

export default NavBar;
