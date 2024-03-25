import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card";

const page = () => {
  return (
    <>
      <div className="z-10 wrapper bg-red flex flex-col intro    border-2 border-white rounded-xl px-4  justify-center">
        <h1 className="text-black text-xl self-center font-bold text-[24px]">
          Select your category
        </h1>
        <div className=" h-full w-full mt-4  gap-10 my-[-10px] flex-center">
          <Link href="/english/bike">
            <div className="flex flex-col hover:shadow-md rounded-md bg-slate-50 p-3 min-h-[130px] items-center justify-center  min-w-[150px]">
              <p className="text-[16px] font-semibold">2 Wheeler</p>
              <Image
                src="/assets/bike-motorcycle-icon.svg"
                height={80}
                width={80}
                alt="image"
                objectFit=""
              />
            </div>
          </Link>
          <Link href="/english/4wheeler">
            <div className="flex flex-col hover:shadow-md rounded-md bg-slate-50 p-3 min-h-[130px] items-center justify-center min-w-[150px]">
              <p className="text-[16px] font-semibold ">4 Wheeler</p>
              <Image
                src="/assets/car.svg"
                height={100}
                width={100}
                alt="image"
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
