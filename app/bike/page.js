"use client";
import React, { useEffect, useRef } from "react";
import DropDown from "@/components/DropDown";
import QuizApp from "@/components/QuizApp";
import { allQuestions1, carKnowledgeQuestions, realCarKnowledge } from "@/constants";
const page = () => {
  return (
    <section
      className="flex flex-col iitems-start justify-center  mouse-wheel gap-2 w-full sm:overflow-hidden py-5"
      id="MAIN"
    >
      <QuizApp questions={allQuestions1} />
    </section>
  );
};

export default page;
