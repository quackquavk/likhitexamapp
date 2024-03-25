import React from "react";
import Image from "next/image";
import {englishCardDetails} from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center max-h-[70%]  gap-2 w-full overflow-hidden mx-30 "> 
      <div className="max-w-[70%] h-full min-w-[80%] bg-black items-start flex flex-row mt-10 overflow-scroll">
      {englishCardDetails.map((details) => {
          return <div
            className="flex flex-col bg-slate-50 rounded-md hover:shadow-md justify-center items-center min-h-[200px] min-w-[250px] max-w-[250px] gap-5 cursor-pointer"
            key={details.questions}
          >
            <h1 className="font-semibold text-[14px]">{details.topic}</h1>
           <Link href={details.link}>
           <Image
              src={details.imageLink}
              width={100}
              height={100}
              alt={details.topic}
              objectFit="contain"
              className="min-h-[80px] max-h-[80px]"
            />
           </Link>
            <p>{details.questions} Questions</p>
          </div>
      })}
      </div>
    </section>
  );
};

export default page;
