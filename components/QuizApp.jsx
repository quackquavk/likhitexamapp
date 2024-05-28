import { allQuestions1, englishCardDetails } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import DropDown from "./DropDown";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import useImageExists from "./useImageExists";

const QuizApp = ({ questions }) => {
  const [query, setQuery] = useState("Select question type");
  const classNames =
    "bg-black rounded-md px-5 py-2 text-white hover:bg-slate-800 disabled:display-hidden";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(410);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [Alert, setAlert] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
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
  const handleSelect = (value) => {
    setCurrentQuestionIndex(value.startingIndex);
    setQuery(value.topic);
  };
  const imageIndex = currentQuestionIndex - 411;
  const jpgSrc = `/traficSignals/image${imageIndex + 1}.jpg`;
  const pngSrc = `/traficSignals/image${imageIndex + 1}.png`;
  const jpgExists = useImageExists(jpgSrc);

  const src = jpgExists ? jpgSrc : pngSrc;
  return (
    <>
      <div className="w-full   justify-center bg-slate-50 h-full block">
        <div className="z-10 wrapper rounded-xl  p-20  mx-auto">
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-fit  bg-black text-white px-10 rounded-md py-2 text-[15px] md:text-[20px] flex flex-grow items-center gap-3  focus:outline-none">
              {query}
            </SelectTrigger>
            <SelectContent>
              {englishCardDetails.map((details) => (
                <SelectItem
                  key={details.startingIndex}
                  value={details}
                  className=" bg-slate-50 rounded-md hover:shadow-md cursor-pointer px-3 gap-3  "
                >
                  <Image
                    src={details.imageLink}
                    width={40}
                    height={40}
                    alt={details.topic}
                    className="hidden md:block"
                  />
                  <h1 className="font-semibold smtext-[10px] md:text-[14px]">
                    {details.topic}
                  </h1>
                  <p className="text-[12px]">
                    {details.noOfQuestions} Questions
                  </p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="z-10  mt-4">
            <h2 className="md:text-xl text-lg font-bold mb-4">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="mb-4">{currentQuestion.question}</p>
            {imageIndex >= 0 &&
              ((
                <Image
                  src={src}
                  width={100}
                  height={100}
                  alt="traffic image"
                  className="object-contain min-h-[80px] max-h-[80px] my-2"
                />
              
              ))}
            <ul>
              {currentQuestion.options.map((option, index) => (
                <li key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      key={index}
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
            <p className="p-medium-20 font-red">Please select an option</p>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizApp;
