"use client";
import React, { useEffect, useRef } from "react";
import DropDown from "@/components/DropDown";
const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-center  mouse-wheel gap-2 w-full sm:overflow-hidden py-5"
      id="MAIN"
    >
      <DropDown />
    </section>
  );
};

export default page;
