import React from "react";
import "./QuestionArray.css";
import { useState } from "react";

const QuestionArray = () => {
  const [que, setQue] = useState(0);

  let [counter, setCounter] = useState(0);

  function end() {
    alert("questions completes");
  }

  let questions = [
    "WHAT IS HTML ?",
    " WHAT IS CSS ?",
    "WHAT IS JAVASCRIPT ?",
    "WHAT IS REACT ?",
  ];
  let answers = [
    [
      { answer: "hyper text tranfer props" },
      { answer: "hyper text tranfer protocol", value: true },
      { answer: "hyper task tranfer protocol" },
      { answer: "higher text tranfer protocol" },
    ],
    [
      { answer: "cascading style sheet", value: true },
      { answer: "cascading short sheet" },
      { answer: "control style sheet" },
      { answer: "case style sheet" },
    ],
    [
      { answer: "photoshop app" },
      { answer: "framework" },
      { answer: "programming language", value: true },
      { answer: "goverment portal" },
    ],
    [
      { answer: "java framework" },
      { answer: "python framework" },
      { answer: "backend language" },
      { answer: "javascript framework", value: true },
    ],
  ];

  function ansfun(resp) {
    nxtquefun();

    if (resp == true) {
      //   alert('ans is right')
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
      //   alert('wrong answer')
    }
  }

  function nxtquefun() {
    if (que <= 2) {
      setQue(que + 1);
    } else setTimeout(end, 100);
  }

  function prequefun() {
    if (que >= 1) {
      setQue(que - 1);
    } else alert("no question before");
  }

  return (
    <div>
      <div className="div2">
        <h1 style={{ marginLeft: "600px", color: "orange" }}>
          your score is : {counter}
        </h1>
        <div className="innerdiv1">
          <h1>Question {que + 1}/4 : </h1>
          <h2 style={{ marginTop: "30px" }}> {questions[que]}</h2>
        </div>
        <div className="innerdiv2">
          {answers &&
            answers[que].map((resp, i) => (
              <button
                className="optfont"
                key={i}
                onClick={() => ansfun(resp.value)}
              >
                {resp.answer}
              </button>
            ))}

          <div className="nxtpre-btn">
            <button
              style={{
                marginLeft: "700px",
                marginTop: "100px",
                backgroundColor: "indianred",
              }}
              onClick={() => {
                prequefun();
              }}
            >
              <h1>PREVIOUS QUESTION</h1>
            </button>
            <button
              style={{
                marginLeft: "700px",
                marginTop: "100px",
                backgroundColor: "indianred",
              }}
              onClick={() => {
                nxtquefun();
              }}
            >
              <h1>NEXT QUESTION</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionArray;
