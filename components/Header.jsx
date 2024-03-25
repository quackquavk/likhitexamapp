import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row px-20 w-[100%] gap-10 justify-between p-5 items-center border-bottom-2 border-black">
      <h1 className="text-[20px] font-bold font">Vows</h1>
      <div className="flex items-center justify-center gap-10 md:flex sm:hidden">
        <h3>Home</h3>
        <h3>Premium</h3>
        <h3>Car</h3>
      </div>
      <button className="bg-black text-white rounded-md px-7 text-[18px]">Login</button>
    </div>
  );
};

export default Header;
