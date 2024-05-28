"use client";
import React from "react";
import { allQuestions1} from "@/constants";
import QuizApp from "@/components/QuizApp";
const page = () => {
  return (
    <section
      className="flex flex-col iitems-start  mouse-wheel gap-2 w-full sm:overflow-hidden py-5 min-h-screen"
      id="MAIN"
    >
      <QuizApp questions={allQuestions1} />
    </section>
  );
};

export default page;