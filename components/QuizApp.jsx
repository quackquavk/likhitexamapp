import { englishCardDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quizAppParams = {
  questions: Object,
  pageToSkip: Number,
};

const QuizApp = ({ questions, pageToSkip }) => {
  const classNames =
    "bg-black rounded-md px-5 py-2 text-white hover:bg-slate-800 disabled:display-hidden";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [Alert, setAlert] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    console.log(index)
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
    if (selectedAnswer) {
      setAlert(false)
      setShowResult(true);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-slate-50">
        <div className="z-10 wrapper rounded-xl border-2 border-white p-20  mx-auto">
          <div className="z-10  ">
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
          {Alert && <p className="p-medium-20 bg-white">Please select an option</p>}
        </div>
      </div>
      <div className="wrapper justify-center items-center">
        <h1 className="font-bold text-[24px]">Check out other sections:</h1>
        <div className="bg-slate-50 z-10">
          <div className="items-start flex flex-row mt-3 overflow-x-scroll">
            {englishCardDetails.map((details, index) => {
              if (index !== pageToSkip) {
                return (
                  <Link href={details.link} key={details.questions}>
                    <div className="flex flex-col bg-slate-50 rounded-md hover:shadow-md justify-center items-center min-h-[200px] min-w-[250px] max-w-[250px] gap-5 cursor-pointer">
                      <h1 className="font-semibold text-[14px]">
                        {details.topic}
                      </h1>
                      <Image
                        src={details.imageLink}
                        width={100}
                        height={100}
                        alt={details.topic}
                        className="min-h-[80px] max-h-[80px]"
                      />
                      <p>{details.questions} Questions</p>
                    </div>
                  </Link>
                );
              } else {
                return null; // Skip rendering the 2nd element
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizApp;
