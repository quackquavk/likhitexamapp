import React, { useState } from "react";
import { englishCardDetails } from "@/constants";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";


const DropDown = () => {
   const [query, setQuery] = useState('')

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="dropdown-trigger bg-black text-white px-10 rounded-md py-2 text-[20px] flex items-center gap-3 focus:outline-none">
          Select your category <RiArrowDropDownLine />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col">
          {englishCardDetails.map((details) => (
            <DropdownMenuItem
              key={details.questions}
              onSelect={() => setQuery(details.topic)}
              className="flex  bg-slate-50 rounded-md hover:shadow-md cursor-pointer p-3 gap-3 items-start"
            >
                <Image
                  src={details.imageLink}
                  width={40}
                  height={40}
                  alt={details.topic}
                  className=""
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-[14px]">{details.topic}</h1>
                  <p>{details.questions} Questions</p>
                </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
