"use client";
import React, { useEffect, useRef } from "react";
import DropDown from "@/components/DropDown";
import QuizApp from "@/components/QuizApp";
import { carKnowledgeQuestions } from "@/constants";
const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-center  mouse-wheel gap-2 w-full sm:overflow-hidden py-5"
      id="MAIN"
    >
      <QuizApp questions={carKnowledgeQuestions} />
      

    </section>
  );
};

export default page;
