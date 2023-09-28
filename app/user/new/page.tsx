"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/user")} className="btn btn-primary">
        Create User
      </button>
    </div>
  );
};

export default NewUserPage;
