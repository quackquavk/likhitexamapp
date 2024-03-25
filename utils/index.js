import { useState } from "react";

const quizAppParams = {
  questions: Object,
};

const QuizApp = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

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
    setShowResult(true);
  };

  return (
    <div className="w-full h-screen flex justify-center bg-slate-50">
      <div className="z-10 max-w-xl rounded-xl border-2 border-white p-20 max-h-xxl mx-auto">
        <div className="z-10">
          <h2 className="text-xl font-bold mb-4">
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
                  />
                       {option}
                </label>
              </li>
            ))}
          </ul>
          <div className="flex mt-[10px] gap-3">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="mr-2 bg-black text-white px-2 mt-4  rounded-md disabled:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className="mr-2 bg-black text-white px-2 rounded-md disabled:bg-gray-300"
            >
              Next
            </button>
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-2  rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
       {showResult &&(
        <p
            className={
              selectedAnswer === currentQuestion.correctAnswer
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {selectedAnswer === currentQuestion.correctAnswer
              ? "Correct!"
              : "Incorrect!"}
          </p>
       )}
      </div>
    </div>
  );
};

export default QuizApp;
