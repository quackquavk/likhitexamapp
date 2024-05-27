import React, { useEffect, useState } from "react";
import { carKnowledgeQuestions, englishCardDetails } from "@/constants";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import QuizApp from "./QuizApp";

const DropDown = () => {
  const [query, setQuery] = useState("Select question type");

  return (
    <>
      <Select onValueChange={(value) => setQuery(value)}>
        <SelectTrigger className="w-fit  bg-black text-white px-10 rounded-md py-2 text-[15px] md:text-[20px] flex flex-grow items-center gap-3  focus:outline-none">
          {query}
        </SelectTrigger>
        <SelectContent>
          {englishCardDetails.map((details) => (
            <SelectItem
              key={details.questions}
              value={details.topic}
              className=" bg-slate-50 rounded-md hover:shadow-md cursor-pointer px-3 gap-3  "
              disabled={details.topic === query}
            >
              <Image
                src={details.imageLink}
                width={40}
                height={40}
                alt={details.topic}
                className="hidden md:block"
              />
                <h1 className="font-semibold smtext-[10px] md:text-[14px]">{details.topic}</h1>
                <p className="text-[12px]">{details.noOfQuestions} Questions</p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default DropDown;
