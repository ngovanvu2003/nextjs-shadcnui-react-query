"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center bg-black pl-1 pr-1 pt-3 pb-3">
      <Link href="/" className=" text-white font-bold text-[1.6em] ">
        Use Shadcn/ui and React-query
      </Link>
    </div>
  );
};

export default Header;
