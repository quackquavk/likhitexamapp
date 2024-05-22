import React, { useState } from "react";
import { englishCardDetails } from "@/constants";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [query, setQuery] = useState("");

  const handleSelect = (value) => {
    setQuery(value);
  };

  return (
    <Select>
      <SelectTrigger className="w-fit bg-black text-white px-10 rounded-md py-2 text-[20px] flex items-center gap-3 outline-white focus:outline-none">
       Select Question Type
      </SelectTrigger>
      <SelectContent>
        {englishCardDetails.map((details) => (
          <SelectItem
            key={details.questions}
            value={details.topic}
            onSelect={() => handleSelect(details.topic)}
            className="flex flex-row bg-slate-50 rounded-md hover:shadow-md cursor-pointer px-3 gap-3 items-start"
          >
            <Image
              src={details.imageLink}
              width={40}
              height={40}
              alt={details.topic}
              className="block"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-[14px]">{details.topic}</h1>
              <p className="text-[12px]">{details.questions} Questions</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
