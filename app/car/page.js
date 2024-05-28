"use client";
import React from "react";
import { allQuestions1 } from "@/constants";
import QuizApp from "@/components/QuizApp";
const page = () => {
  return (
    <section className="flex flex-col iitems-start  gap-2 w-full sm:overflow-hidden  min-h-screen">
      <QuizApp questions={allQuestions1} />
      <div className="wrapper">
      </div>
    </section>
  );
};

export default page;
