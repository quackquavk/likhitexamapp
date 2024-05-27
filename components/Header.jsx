'use client'
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row md:px-20 px-5 w-[100%] gap-10 justify-between p-5 items-center border-b-[1px] border-slate-200 ">
      <h1 className="text-[20px] font-bold font cursor-pointer"><Link href='/'>Vows</Link></h1>
      <div className=" items-center justify-center gap-10 hidden md:flex">
        <h3><Link href='/'>Home</Link></h3>
        <h3><Link href='/'>About</Link></h3>
        <h3><Link href='/'>Apply</Link></h3>
      </div>
      <button className="bg-black text-white rounded-md px-4 py-1 text-[18px]">Login</button>
    </div>
  );
};

export default Header;
