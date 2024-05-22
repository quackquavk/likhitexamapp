"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {

  return (
    <>
      <section className="bg-dotted-pattern bg-primary-50 bg-contain py-5 md:py-10">
        <div className="wrapper md:grid-cols-2 grid grid-cols-1 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Getting license made easy: quiz app for new license applicants

            </h1>
            <p className="p-regular-20 md:p-regular-24">
              All the solutions for your license exam in one singular spot.
            </p>
            <button className="rounded-md bg-black text-white w-fit px-3 py-2" href='#select'><Link href='#select'>Choose your category</Link></button>
          </div>
          
             <Image
            src="/images/image-1.png"
            height={1000}
            width={1000}
            alt="hero"
            className="max-h-[50vh] object-contain object-center2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="select">
        <div className="wrapper flex flex-col justify-center w-full items-center ">
          <h1 className="h4-small font-semibold text-[21px]">Select your category</h1>
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-3 border-t-1 border-t-black ">
            <Link href="/car">
              <div className="cursor-pointer h-40 w-40 md:w-60 rounded-md shadow-md flex flex-col items-center justify-around hover:shadow-lg hover:scale-110 transition-all">
                <Image
                  src="/images/car.svg"
                  alt="car"
                  width={110}
                  height={110}
                  className="object-contain"
                />
                <p>Car license</p>
              </div>
            </Link>
            <Link href="/bike">
              <div className="cursor-pointer h-40 w-40 md:w-60 rounded-md shadow-md flex flex-col items-center justify-around hover:shadow-lg hover:scale-110 transition-all">
                <Image src="/images/bike-motorcycle-icon.svg" alt="bike" width={90} height={90} />
                <p>Bike/Scooter license</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="wrapper">
         <button className="rounded-md bg-black text-white w-fit px-3 py-2"><Link target="_blank" href='https://applydlnew.dotm.gov.np/login'>Apply for new license</Link></button>
        </div>
      </section>
    </>
    
  );
}
