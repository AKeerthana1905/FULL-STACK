import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: "Delhi",
    },
    {
      question: "Which language is used for React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "React is a ____?",
      options: ["Database", "Framework", "Library", "Language"],
      answer: "Library",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Online Quiz</h2>

      {!showResult ? (
        <>
          <h3>
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                ...styles.option,
                backgroundColor:
                  selectedOption === option ? "#4CAF50" : "#eee",
              }}
              disabled={selectedOption !== ""}
            >
              {option}
            </button>
          ))}

          <button
            onClick={handleNext}
            style={styles.nextBtn}
            disabled={!selectedOption}
          >
            Next
          </button>

          <p>Score: {score}</p>
        </>
      ) : (
        <div>
          <h3>🎉 Quiz Completed!</h3>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  option: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
  },
  nextBtn: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Quiz;
