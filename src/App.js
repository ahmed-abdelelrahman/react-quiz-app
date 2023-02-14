import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  return (
    <div className='App'>
      {showScore ? (
        <div className='absolute top-20 left-1/2 text-5xl text-blue-700'>
          score: {score} / {questions.length}
        </div>
      ) : (
        <div className='bg-gray-100 h-screen'>
          <div className='fixed text-center h-10 w-full text-white text-xl bg-blue-500 py-2 mb-4'>
            question:{currentIndex + 1}/{questions.length}
          </div>
          <div className='container mx-auto pt-20 pl-10'>
            <form>
              <div className='mb-4'>
                <p className='text-lg font-bold'>Question {currentIndex + 1}</p>
                <p>{questions[currentIndex].questionText}</p>
                <div className='flex justify-center items-center flex-col'>
                  {questions[currentIndex].answerOptions.map((data, id) => (
                    <button
                      className='w-20 pb-4'
                      onClick={(e) => {
                        if (currentIndex < questions.length - 1) {
                          setcurrentIndex(currentIndex + 1);
                        } else {
                          setshowScore(true);
                        }

                        e.preventDefault();
                        if (data.isCorrect) {
                          setscore(score + 1);
                        }
                      }}
                    >
                      {data.answerText}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
