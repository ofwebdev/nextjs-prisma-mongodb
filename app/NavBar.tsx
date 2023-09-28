"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Loading from "./loading";

const NavBar = () => {
  const { status, data: session } = useSession();

  // if (status === "loading") return <Loading />;

  return (
    <div className="flex gap-3 p-5 bg-slate-200">
      <Link href="/">Home</Link>
      <Link href="/user">User</Link>
      <Link href="/admin">Admin</Link>
      {status === "loading" && <Loading />}
      {status === "authenticated" && (
        <div>
          {session.user!.name}

          <Link href={"/api/auth/signout"} className="ml-4">
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">lOGIN</Link>
      )}
    </div>
  );
};

export default NavBar;
