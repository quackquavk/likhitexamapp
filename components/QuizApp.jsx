import { englishCardDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDown from "./DropDown";

const QuizApp = ({ questions, pageToSkip = 0 }) => {
  const classNames =
    "bg-black rounded-md px-5 py-2 text-white hover:bg-slate-800 disabled:display-hidden";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [Alert, setAlert] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    setAlert(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setAlert(false);
      setShowResult(true);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <div className="w-full   justify-center bg-slate-50 h-full block">
        <div className="z-10 wrapper rounded-xl border-2 border-white p-20  mx-auto">
          <DropDown />
          <div className="z-10  mt-4">
            <h2 className="md:text-xl text-lg font-bold mb-4">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="mb-4">{currentQuestion.question}</p>
            <ul>
              {currentQuestion.options.map((option, index) => (
                <li key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => handleAnswerSelection(index)}
                      className="mr-2"
                      required={true}
                    />
                    &nbsp;{option}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2  mt-3 max-w-[20%] ">
            {currentQuestionIndex !== 0 && (
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="bg-black rounded-md px-5 py-2 text-white hover:bg-slate-800 disabled:opacity-0"
              >
                Previous
              </button>
            )}
            {currentQuestionIndex !== questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
                className={`${classNames} disabled:bg-white`}
              >
                Next
              </button>
            )}
            <button
              onClick={handleSubmit}
              className={`${classNames} disabled:bg-gray-600`}
            >
              Submit
            </button>
          </div>
          {showResult && (
            <p
              style={{
                color:
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "#388E3C"
                    : "#EF4444",
              }}
              className="text-[20px] font-semibold"
            >
              {selectedAnswer === currentQuestion.correctAnswer
                ? "Correct!"
                : "Incorrect!"}
            </p>
          )}
          {Alert && (
            <p className="p-medium-20 bg-white">Please select an option</p>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizApp;
